
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('admin_token', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials. Hint: use admin/admin');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl text-white mb-6 shadow-xl shadow-blue-200">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-900">Admin Access</h1>
          <p className="text-slate-500 mt-2 font-medium">Secure login for NorthDemy management</p>
        </div>

        <div className="bg-white p-10 rounded-[32px] shadow-2xl shadow-slate-200 border border-slate-100">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold border border-red-100">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin" 
                  className="w-full pl-12 pr-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
              <span>Enter Dashboard</span>
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
        
        <p className="text-center mt-8 text-slate-400 text-sm">
          Protected by NorthDemy Digital Safety Systems
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
