import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import AdminCrud from '../../Components/AdminCrud';

const Testimonials = () => {
  const fields = [
    { name: 'quote', label: 'Quote', type: 'textarea', fullWidth: true },
    { name: 'author', label: 'Author' },
    { name: 'role', label: 'Role' },
    { name: 'image', label: 'Image', type: 'image' },
    { name: 'order', label: 'Order', type: 'number' },
    { name: 'is_active', label: 'Active', type: 'checkbox', checkboxLabel: 'Active' },
  ];

  const columns = [
    { key: 'author', label: 'Author' },
    { key: 'role', label: 'Role' },
    { key: 'order', label: 'Order' },
  ];

  return (
    <AdminLayout title="Testimonials">
      <AdminCrud
        title="Testimonials"
        description="Create, update, and delete testimonials for the website."
        endpoint="/api/admin/testimonials"
        fields={fields}
        columns={columns}
      />
    </AdminLayout>
  );
};

export default Testimonials;
