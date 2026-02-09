
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { ALL_TEAM } from '../constants';
import { DataManager } from '../utils/dataManager';
import { TeamMember, TeamCategory } from '../types';

const Team: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  
  useEffect(() => {
    // Initial load from managed data (which defaults to ALL_TEAM)
    setMembers(DataManager.getTeam());
    
    const handleUpdate = () => setMembers(DataManager.getTeam());
    window.addEventListener('data-updated', handleUpdate);
    return () => window.removeEventListener('data-updated', handleUpdate);
  }, []);

  const categories: { id: TeamCategory; label: string; desc: string }[] = [
    { id: 'leadership', label: 'Leadership', desc: 'The strategic visionaries driving NorthDemy forward.' },
    { id: 'board', label: 'Board of Trustees', desc: 'Providing oversight and institutional integrity.' },
    { id: 'training', label: 'Training Team', desc: 'Industry experts delivering world-class curriculum.' },
    { id: 'incubation', label: 'Incubation Team', desc: 'Mentors and venture leads scaling the next unicorns.' }
  ];

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="group bg-white p-6 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="relative mb-6 rounded-[32px] overflow-hidden aspect-square shadow-xl group-hover:shadow-2xl transition-all">
         <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
         <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/30 transition-all duration-500"></div>
         
         {/* Social Overlay */}
         <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 translate-y-20 group-hover:translate-y-0 transition-all duration-500 delay-100">
            {member.socials?.linkedin && (
              <a href={member.socials.linkedin} target="_blank" className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                <Linkedin size={18} />
              </a>
            )}
            {member.socials?.twitter && (
              <a href={member.socials.twitter} target="_blank" className="w-10 h-10 rounded-xl bg-white text-blue-400 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all shadow-lg">
                <Twitter size={18} />
              </a>
            )}
            {member.socials?.facebook && (
              <a href={member.socials.facebook} target="_blank" className="w-10 h-10 rounded-xl bg-white text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all shadow-lg">
                <Facebook size={18} />
              </a>
            )}
            {member.socials?.instagram && (
              <a href={member.socials.instagram} target="_blank" className="w-10 h-10 rounded-xl bg-white text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-lg">
                <Instagram size={18} />
              </a>
            )}
         </div>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
        <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px]">{member.role}</p>
        {member.bio && <p className="text-slate-500 text-sm pt-2 line-clamp-3 leading-relaxed">{member.bio}</p>}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      {/* Header */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">Our <span className="text-blue-600">Ecosystem</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed">Meet the diverse team of specialists, mentors, and trustees dedicated to building Africa's digital future.</p>
        </div>
      </section>

      {/* Categories */}
      <div className="container mx-auto px-4 mt-20 space-y-32">
        {categories.map((cat) => {
          const categoryMembers = members.filter(m => m.category === cat.id);
          if (categoryMembers.length === 0) return null;

          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-32">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-l-4 border-blue-600 pl-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">{cat.label}</h2>
                  <p className="text-slate-500 font-medium max-w-xl">{cat.desc}</p>
                </div>
                <div className="text-blue-600 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                   {categoryMembers.length} Members <ArrowRight size={16}/>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categoryMembers.map(member => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <section className="container mx-auto px-4 mt-40">
        <div className="bg-slate-900 rounded-[48px] p-12 text-center text-white">
           <h2 className="text-3xl font-black mb-6">Want to join the mission?</h2>
           <p className="text-slate-400 mb-8 max-w-xl mx-auto">We are always looking for passionate mentors, instructors, and leaders to join our global network.</p>
           <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all">Apply to Join</Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
