import React, { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <Head title="Admin Access" />

            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl text-white mb-6 shadow-xl shadow-blue-200">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900">Admin Access</h1>
                    <p className="text-slate-500 mt-2 font-medium">Secure login for NorthDemy management</p>
                </div>

                <div className="bg-white p-10 rounded-[32px] shadow-2xl shadow-slate-200 border border-slate-100">
                    <form onSubmit={submit} className="space-y-6">
                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input 
                                    type="email" 
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="admin@northdemy.com" 
                                    className="w-full pl-12 pr-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-blue-500 outline-none transition-all"
                                    autoComplete="username"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input 
                                    type="password" 
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••" 
                                    className="w-full pl-12 pr-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-blue-500 outline-none transition-all"
                                    autoComplete="current-password"
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1 font-bold">{errors.password}</p>}
                        </div>

                        <button 
                            disabled={processing}
                            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-50"
                        >
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
}