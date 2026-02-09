
import React from 'react';
import { Building2, Globe, Users, Award, Shield } from 'lucide-react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our <span className="text-blue-600">Ecosystem Partners</span></h1>
          <p className="text-lg text-slate-600">We collaborate with global leaders, government agencies, and industry pioneers to build a secure and thriving digital future for Africa.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS.map((partner, i) => {
            const Icon = {
              Technical: Globe,
              Funding: Award,
              Innovation: Building2,
              Safety: Shield,
              Government: Users
            }[partner.category] || Building2;

            return (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon size={28} />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                  {partner.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{partner.name}</h3>
                <p className="text-slate-600 leading-relaxed">{partner.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-32 text-center space-y-8">
           <h2 className="text-3xl font-bold text-slate-900">Become a Partner</h2>
           <p className="text-slate-600 max-w-xl mx-auto">Join our mission to empower the next generation of tech leaders. Let's create impactful opportunities together.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">Strategic Partnership</button>
              <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all">Investor Relations</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
