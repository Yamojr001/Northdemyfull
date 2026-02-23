import React, { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import logoImg from '@/asset/logo.jpg';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Award, 
  FileText, 
  Handshake,
  UserCircle,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Bell,
  Search,
  Mail,
  Newspaper
} from 'lucide-react';

const AdminLayout = ({ children, title = 'Dashboard' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { url } = usePage();

  const isActive = (path) => {
    if (path === '/admin') return url === '/admin';
    return url.startsWith(path);
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Team Members', path: '/admin/team-members' },
    { icon: Briefcase, label: 'Projects', path: '/admin/projects' },
    { icon: Award, label: 'Programs', path: '/admin/programs' },
    { icon: Handshake, label: 'Partners', path: '/admin/partners' },
    { icon: FileText, label: 'Testimonials', path: '/admin/testimonials' },
    { icon: Mail, label: 'Contact Messages', path: '/admin/contacts' },
    { icon: Newspaper, label: 'Newsletter', path: '/admin/newsletter' },
    { icon: UserCircle, label: 'Users', path: '/admin/users' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.visit('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 z-40 h-screen transition-all duration-300 ${
        sidebarOpen ? 'w-72' : 'w-20'
      } hidden lg:block`}>
        <div className="h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col shadow-2xl">
          {/* Logo */}
          <div className="p-6 border-b border-slate-700/50">
            <div className="flex items-center justify-between">
              {sidebarOpen && (
                <div className="flex items-center space-x-3">
                  <img 
                    src={logoImg} 
                    alt="NorthDemy" 
                    className="w-10 h-10 rounded-xl object-contain bg-white/10 p-1"
                  />
                  <div>
                    <h1 className="font-black text-lg">NorthDemy</h1>
                    <p className="text-xs text-slate-400">Admin Portal</p>
                  </div>
                </div>
              )}
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group ${
                  isActive(item.path) 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50' 
                    : 'hover:bg-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <item.icon size={20} className="shrink-0" />
                {sidebarOpen && (
                  <>
                    <span className="font-semibold flex-1">{item.label}</span>
                    <ChevronRight size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                      isActive(item.path) ? 'opacity-100' : ''
                    }`} />
                  </>
                )}
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-slate-700/50">
            <div className={`flex items-center ${sidebarOpen ? 'space-x-3' : 'justify-center'} p-3 rounded-xl bg-white/5`}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shrink-0">
                A
              </div>
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate">Admin User</p>
                  <p className="text-xs text-slate-400 truncate">admin@northdemy.org</p>
                </div>
              )}
            </div>
            {sidebarOpen && (
              <button 
                onClick={handleLogout}
                className="mt-3 w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors font-semibold"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity ${
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setMobileMenuOpen(false)}>
        <aside className={`fixed top-0 left-0 w-80 h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white transform transition-transform ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`} onClick={(e) => e.stopPropagation()}>
          <div className="h-full flex flex-col">
            {/* Mobile Header */}
            <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src={logoImg} 
                  alt="NorthDemy" 
                  className="w-10 h-10 rounded-xl object-contain bg-white/10 p-1"
                />
                <div>
                  <h1 className="font-black text-lg">NorthDemy</h1>
                  <p className="text-xs text-slate-400">Admin Portal</p>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
                <X size={20} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                    isActive(item.path) 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-semibold">{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile User Profile */}
            <div className="p-4 border-t border-slate-700/50">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-bold text-sm">Admin User</p>
                  <p className="text-xs text-slate-400">admin@northdemy.org</p>
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors font-semibold"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
          <div className="px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
                >
                  <Menu size={24} />
                </button>
                <div>
                  <h1 className="text-2xl font-black text-slate-900">{title}</h1>
                  <p className="text-sm text-slate-500">Welcome back, Admin</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {/* Search */}
                <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-xl">
                  <Search size={18} className="text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-transparent border-none outline-none text-sm w-48"
                  />
                </div>

                {/* Notifications */}
                <button className="relative p-2 hover:bg-slate-100 rounded-xl transition-colors">
                  <Bell size={20} className="text-slate-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Profile (Mobile) */}
                <div className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-xl cursor-pointer lg:hidden">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                    A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-8">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <p>© 2026 NorthDemy. All rights reserved.</p>
            <p>Version 1.0.0</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdminLayout;
