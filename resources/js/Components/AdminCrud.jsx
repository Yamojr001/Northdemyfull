import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

const AdminCrud = ({ title, description, endpoint, fields, columns }) => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error('Failed to load data');
      const data = await res.json();
      setItems(data);
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [endpoint]);

  const normalizeValue = (field, value) => {
    if (field.type === 'array') {
      return Array.isArray(value) ? value.join(', ') : (value || '');
    }
    if (field.type === 'checkbox') {
      return Boolean(value);
    }
    return value ?? '';
  };

  const serializeValue = (field, value) => {
    if (field.type === 'array') {
      return typeof value === 'string'
        ? value.split(',').map((v) => v.trim()).filter(Boolean)
        : [];
    }
    if (field.type === 'checkbox') {
      return Boolean(value);
    }
    return value;
  };

  const handleEdit = (item) => {
    const nextData = {};
    fields.forEach((field) => {
      nextData[field.name] = normalizeValue(field, item[field.name]);
      if (field.type === 'image') {
        nextData[`${field.name}__file`] = null;
      }
    });
    setEditingId(item.id);
    setFormData(nextData);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const payload = {};
    let hasFile = false;

    fields.forEach((field) => {
      const value = formData[field.name];
      const fileValue = field.type === 'image' ? formData[`${field.name}__file`] : null;

      if (fileValue instanceof File) {
        payload[field.name] = fileValue;
        hasFile = true;
        return;
      }

      if (field.skipIfEmpty && (value === '' || value === null || value === undefined)) {
        return;
      }

      payload[field.name] = serializeValue(field, value);
    });

    try {
      let body = null;
      let headers = {};
      let method = editingId ? 'PUT' : 'POST';
      let url = editingId ? `${endpoint}/${editingId}` : endpoint;

      if (hasFile) {
        const formDataBody = new FormData();
        Object.entries(payload).forEach(([key, val]) => {
          if (val instanceof File) {
            formDataBody.append(key, val);
          } else if (Array.isArray(val)) {
            formDataBody.append(key, JSON.stringify(val));
          } else if (typeof val === 'boolean') {
            formDataBody.append(key, val ? '1' : '0');
          } else if (val !== undefined && val !== null) {
            formDataBody.append(key, String(val));
          }
        });

        if (editingId) {
          formDataBody.append('_method', 'PUT');
          method = 'POST';
        }

        body = formDataBody;
      } else {
        headers = { 'Content-Type': 'application/json' };
        body = JSON.stringify(payload);
      }

      const res = await fetch(url, {
        method,
        headers,
        body,
      });
      if (!res.ok) throw new Error('Failed to save');
      await fetchItems();
      handleCancel();
    } catch (err) {
      setError('Failed to save changes');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      const res = await fetch(`${endpoint}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      await fetchItems();
    } catch (err) {
      setError('Failed to delete item');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900">{title}</h2>
          {description && <p className="text-slate-500">{description}</p>}
        </div>
        <button
          onClick={() => setEditingId(null)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all"
        >
          <Plus size={16} />
          Add New
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 className="text-lg font-black text-slate-900 mb-4">
          {editingId ? 'Edit Item' : 'Create New'}
        </h3>
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm font-semibold">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field) => (
            <div key={field.name} className={field.fullWidth ? 'md:col-span-2' : ''}>
              <label className="text-sm font-bold text-slate-700">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  rows={4}
                  value={formData[field.name] ?? ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none"
                />
              ) : field.type === 'select' ? (
                <select
                  value={formData[field.name] ?? ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none"
                >
                  <option value="">Select...</option>
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              ) : field.type === 'checkbox' ? (
                <div className="mt-2">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      checked={Boolean(formData[field.name])}
                      onChange={(e) => handleChange(field.name, e.target.checked)}
                      className="rounded"
                    />
                    {field.checkboxLabel || 'Enabled'}
                  </label>
                </div>
              ) : field.type === 'image' ? (
                <div className="space-y-3 mt-1">
                  <input
                    type="url"
                    value={formData[field.name] ?? ''}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder="Paste image URL"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleChange(`${field.name}__file`, e.target.files?.[0] || null)}
                    className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
                  />
                  {formData[field.name] && (
                    <p className="text-xs text-slate-500 break-all">Using URL: {formData[field.name]}</p>
                  )}
                  {formData[`${field.name}__file`] && (
                    <p className="text-xs text-slate-500">Selected file: {formData[`${field.name}__file`]?.name}</p>
                  )}
                </div>
              ) : (
                <input
                  type={field.type || 'text'}
                  value={formData[field.name] ?? ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none"
                />
              )}
            </div>
          ))}

          <div className="md:col-span-2 flex items-center gap-3 mt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all"
            >
              <Save size={16} />
              {saving ? 'Saving...' : 'Save'}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all"
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900">All Items</h3>
          <span className="text-sm text-slate-500">{items.length} total</span>
        </div>

        {loading ? (
          <div className="p-10 text-center">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            <p className="mt-3 text-slate-600">Loading...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
                <tr>
                  {columns.map((col) => (
                    <th key={col.key} className="px-6 py-3 font-bold">{col.label}</th>
                  ))}
                  <th className="px-6 py-3 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-t border-slate-100 hover:bg-slate-50">
                    {columns.map((col) => (
                      <td key={col.key} className="px-6 py-4 text-sm text-slate-700">
                        {col.render ? col.render(item) : item[col.key]}
                      </td>
                    ))}
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-bold hover:bg-blue-100"
                        >
                          <Edit size={14} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold hover:bg-red-100"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCrud;
