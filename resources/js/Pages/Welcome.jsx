import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <Head title="Welcome to NorthDemy" />
            
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl font-black text-slate-900 mb-6">NorthDemy</h1>
                <p className="text-xl text-slate-600 mb-8 font-medium">
                    Technology Innovation, Talent Incubation, and Digital Security Organization
                </p>
                
                <div className="flex gap-4 justify-center">
                    <Link
                        href={route('login')}
                        className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                    >
                        Admin Login
                    </Link>
                </div>
            </div>
            
            <footer className="mt-16 text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} NorthDemy Limited. All rights reserved.
            </footer>
        </div>
    );
}