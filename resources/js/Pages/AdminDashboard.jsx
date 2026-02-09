
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Briefcase, 
  Users, 
  UserSquare2, 
  FileText, 
  LogOut, 
  Plus, 
  Trash2,
  CheckCircle2
} from 'lucide-react';
import { DataManager } from '../utils/dataManager';

type Tab = 'services' | 'programs' | 'blog' | 'team' | 'board';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('services');
  const [items, setItems] = useState<any[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  // Form states
  const [formData, setFormData] = useState<any>({});

  const loadData = () => {
    switch(activeTab) {
      case 'services': setItems(DataManager.getServices()); break;
      case 'programs': setItems(DataManager.getPrograms()); break;
      case 'blog': setItems(DataManager.getBlog()); break;
      case 'team': setItems(DataManager.getTeam()); break;
      case 'board': setItems(DataManager.getBoard()); break;
    }
  };

  useEffect(() => {
    loadData();
    setFormData({});
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/');
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    switch(activeTab) {
      case 'services': DataManager.addService(formData); break;
      case 'programs': DataManager.addProgram(formData); break;
      case 'blog': DataManager.addBlogPost(formData); break;
      case 'team': DataManager.addTeamMember(formData); break;
      case 'board': DataManager.addBoardMember(formData); break;
    }
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    loadData();
    setFormData({});
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const keyMap: Record<Tab, any> = { services: 'SERVICES', programs: 'PROGRAMS', blog: 'BLOG', team: 'TEAM', board: 'BOARD' };
      DataManager.deleteItem(keyMap[activeTab], id);
      loadData();
    }
  };

  const renderForm = () => {
    const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-sm";
    const labelClass = "text-xs font-bold text-slate-500 uppercase tracking-widest ml-1";

    return (
      <form onSubmit={handleAdd} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Plus size={20} className="text-blue-600" />
          Add New {activeTab.slice(0, -1)}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className={labelClass}>Title / Name</label>
            <input 
              required
              className={inputClass} 
              value={formData.title || formData.name || ''} 
              onChange={e => setFormData({...formData, title: e.target.value, name: e.target.value})}
            />
          </div>

          {(activeTab === 'team' || activeTab === 'board' || activeTab === 'services' || activeTab === 'programs') && (
            <div className="space-y-1">
              <label className={labelClass}>{activeTab === 'programs' ? 'Category' : 'Role / Icon Name'}</label>
              <input 
                required
                className={inputClass} 
                value={formData.role || formData.category || formData.icon || ''} 
                onChange={e => setFormData({...formData, role: e.target.value, category: e.target.value, icon: e.target.value})}
              />
            </div>
          )}

          <div className="space-y-1 md:col-span-2">
            <label className={labelClass}>Image URL</label>
            <input 
              className={inputClass} 
              value={formData.image || ''} 
              onChange={e => setFormData({...formData, image: e.target.value})}
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className={labelClass}>{activeTab === 'blog' ? 'Excerpt' : 'Description / Bio'}</label>
            <textarea 
              required
              rows={3} 
              className={inputClass}
              value={formData.description || formData.bio || formData.excerpt || ''}
              onChange={e => setFormData({...formData, description: e.target.value, bio: e.target.value, excerpt: e.target.value})}
            />
          </div>
        </div>

        <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
          Save Item
        </button>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 bg-slate-900 text-white lg:min-h-screen p-6 flex flex-col">
        <div className="flex items-center space-x-3 mb-12">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="font-black text-xl">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Admin Portal</span>
        </div>

        <nav className="space-y-2 flex-grow">
          {[
            { id: 'services', label: 'Services', icon: LayoutDashboard },
            { id: 'programs', label: 'Programs', icon: BookOpen },
            { id: 'blog', label: 'Blog Posts', icon: FileText },
            { id: 'team', label: 'Team', icon: Users },
            { id: 'board', label: 'Board Members', icon: UserSquare2 },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <tab.icon size={20} />
              <span className="font-bold">{tab.label}</span>
            </button>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-12 flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all font-bold"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 lg:p-12 overflow-y-auto max-h-screen">
        <div className="max-w-5xl mx-auto space-y-12">
          <header className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black text-slate-900 capitalize tracking-tight">Manage {activeTab}</h1>
              <p className="text-slate-500 font-medium">Add, update or remove items from your website.</p>
            </div>
            {isSuccess && (
              <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 font-bold animate-bounce">
                <CheckCircle2 size={18} />
                <span>Success!</span>
              </div>
            )}
          </header>

          {renderForm()}

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 px-1">Existing {activeTab}</h3>
            <div className="grid grid-cols-1 gap-4">
              {items.map((item, idx) => (
                <div key={item.id || idx} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-6 shadow-sm group">
                  <div className="w-16 h-16 rounded-xl bg-slate-50 overflow-hidden shrink-0 flex items-center justify-center text-slate-400 border border-slate-100">
                    {item.image ? (
                      <img src={item.image} className="w-full h-full object-cover" />
                    ) : (
                      <LayoutDashboard size={24} />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-900">{item.title || item.name}</h4>
                    <p className="text-sm text-slate-500 line-clamp-1">{item.description || item.bio || item.excerpt}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="p-3 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
