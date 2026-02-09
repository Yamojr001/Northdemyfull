
import React from 'react';
import { Rocket, Target, Lightbulb, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

const IncubationHub: React.FC = () => {
  const steps = [
    { icon: Lightbulb, title: "Discovery", desc: "Refining the vision and validating the core market hypothesis." },
    { icon: Target, title: "Validation", desc: "MVP development and initial product-market fit testing." },
    { icon: Rocket, title: "Acceleration", desc: "Rapid growth phase with focused mentorship and technical support." },
    { icon: DollarSign, title: "Fundraising", desc: "Connecting with our network of local and international investors." }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 mb-8 border border-white/20">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold uppercase tracking-widest">Enrollment Open for Q3 2024</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">NorthDemy <br /> <span className="opacity-80">Incubation Hub</span></h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">From an idea on a napkin to a world-changing enterprise. We provide the capital, mentorship, and network you need to scale.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative p-8 rounded-[32px] border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-black italic">
                   0{i+1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900">Why Founders <br /><span className="text-blue-600">Choose Us</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { title: "Equity Funding", desc: "Pre-seed and seed stage investment options." },
                   { title: "Technical Labs", desc: "Access to high-end dev tools and infrastructure." },
                   { title: "Legal Support", desc: "Company formation and IP protection assistance." },
                   { title: "Network", desc: "Connections to global accelerators like YC and Techstars." }
                 ].map((perk, i) => (
                   <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100">
                     <h4 className="font-bold text-slate-900 mb-2">{perk.title}</h4>
                     <p className="text-sm text-slate-600">{perk.desc}</p>
                   </div>
                 ))}
              </div>
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center space-x-2 shadow-xl shadow-blue-200">
                <span>Apply for Cohort 8</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative p-10 bg-white rounded-[40px] shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" alt="Incubation Hub" className="rounded-3xl w-full h-auto" />
                 <div className="absolute -bottom-10 -left-10 p-8 bg-blue-600 rounded-3xl text-white shadow-xl">
                    <div className="text-4xl font-black">85%</div>
                    <div className="text-sm uppercase tracking-widest opacity-80 font-bold">Follow-on Funding</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IncubationHub;
