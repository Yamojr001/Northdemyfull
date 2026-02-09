
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Users, Briefcase, Globe2, ShieldCheck, GraduationCap, Rocket, Code, TrendingUp, Mail, Phone, Quote } from 'lucide-react';
import { TESTIMONIALS, PARTNERS } from '../constants';
import { DataManager } from '../utils/dataManager';

const Home: React.FC = () => {
  const [services, setServices] = useState(DataManager.getServices());

  useEffect(() => {
    const handleUpdate = () => setServices(DataManager.getServices());
    window.addEventListener('data-updated', handleUpdate);
    return () => window.removeEventListener('data-updated', handleUpdate);
  }, []);

  return (
    <div className="overflow-hidden">
       {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-left space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm">
                <Star size={16} fill="currentColor" />
                <span>Your Partner in Digital Safety and Growth</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                Building Africa’s <br />
                <span className="text-blue-600">Secure </span> <br />
                Digital Future
              </h1>
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                NorthDemy is a leading technology innovation, talent incubation, and digital security organization delivering world class training, enterprise systems, and mission critical solutions. We partner with governments, security agencies, and private enterprises to build skilled talent, deploy secure digital infrastructure, and address complex national and global challenges through advanced technology.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold flex items-center space-x-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                  <span>Apply Now</span>
                  <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 rounded-xl border-2 border-slate-100 text-slate-800 font-bold hover:bg-slate-50 transition-all">
                  Partner With Us
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-10">
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">500+</div>
                  <div className="text-slate-500 font-medium text-sm">Trained Talents</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">50+</div>
                  <div className="text-slate-500 font-medium text-sm">Startups Incubated</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">25+</div>
                  <div className="text-slate-500 font-medium text-sm">Global Partners</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Blue circle background */}
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse scale-110"></div>
                
                {/* Main ND circle */}
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-80 shadow-2xl shadow-blue-400/50 flex flex-col items-center justify-center text-center p-12">
                  <h2 className="text-7xl font-black text-white mb-2">ND</h2>
                  <p className="text-white/80 font-medium tracking-widest uppercase">Innovation Hub</p>
                </div>
                
                {/* Top Right Box - Talent Pipeline */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">Talent Pipeline</div>
                    <div className="text-slate-500 text-xs">Global Network</div>
                  </div>
                </div>
                
                {/* Bottom Left Box - Startup Funding */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">Startup Funding</div>
                    <div className="text-blue-600 font-semibold text-xs">Investor Ready</div>
                  </div>
                </div>
                
                {/* Bottom Right Box - Digital Safety */}
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">Digital Safety</div>
                    <div className="text-blue-600 font-semibold text-xs">Certified Programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Trusted By Marquee */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/30 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Trusted by Global Ecosystem Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {PARTNERS.map((p, i) => (
              <span key={i} className="text-2xl font-black text-slate-300 select-none hover:text-blue-600 transition-colors">{p.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm">What We Do</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Comprehensive Solutions for <br />
              <span className="text-blue-600">Digital Growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComp = {
                GraduationCap, Rocket, ShieldCheck, Code, TrendingUp, Users
              }[service.icon as string] || Code;
              
              return (
                <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all group flex flex-col items-start h-full">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-900 mb-8 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComp size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <Link to={service.link || `/services/${service.id}`} className="flex items-center space-x-2 text-blue-600 font-bold hover:space-x-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-blue-400 font-bold tracking-widest uppercase text-sm">Success Stories</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hear From Our <br /> <span className="text-blue-400">Global Community</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">We measure our success by the growth of our talents and the impact of the startups we've supported.</p>
              <div className="flex gap-4">
                <Link to="/about" className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-400 hover:text-white transition-all">Read Case Studies</Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-sm">
                  <Quote size={32} className="text-blue-400 mb-4 opacity-50" />
                  <p className="text-xl italic text-slate-300 leading-relaxed mb-8">"{t.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover border-2 border-blue-400" />
                    <div>
                      <div className="font-bold text-white">{t.author}</div>
                      <div className="text-blue-400 text-sm">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="bg-blue-600 rounded-[48px] p-12 lg:p-24 text-center text-white relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <h2 className="text-4xl lg:text-6xl font-black mb-8 relative z-10">Ready to transform <br /> your future?</h2>
               <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <Link to="/programs" className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-2xl">Start Training</Link>
                  <Link to="/incubation" className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-white hover:text-blue-600 transition-all shadow-2xl">Incubate Startup</Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;