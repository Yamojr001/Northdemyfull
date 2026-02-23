
import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Linkedin, Twitter, Mail, Instagram, Facebook, ArrowRight, Quote } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Team = () => {
  const [members, setMembers] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [membersRes, testimonialsRes] = await Promise.all([
        fetch('/api/team-members'),
        fetch('/api/testimonials')
      ]);
      
      if (!membersRes.ok) throw new Error('Failed to fetch team');
      if (!testimonialsRes.ok) throw new Error('Failed to fetch testimonials');
      
      const membersData = await membersRes.json();
      const testimonialsData = await testimonialsRes.json();
      
      setMembers(membersData);
      setTestimonials(testimonialsData);
    } catch (err) {
      setError('Failed to load data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'leadership', label: 'Leadership Team', desc: 'The executive leadership driving NorthDemy\'s vision and strategic direction.' },
    { id: 'team', label: 'Core Team', desc: 'Our talented engineers, designers, and specialists building innovative solutions.' },
    { id: 'board', label: 'Board of Directors', desc: 'Industry leaders providing strategic guidance and governance oversight.' },
    { id: 'trustee', label: 'Board of Trustees', desc: 'Distinguished trustees ensuring institutional integrity and long-term sustainability.' },
    { id: 'training', label: 'Training Team', desc: 'Expert trainers and educators empowering the next generation of tech talent.' },
    { id: 'incubation', label: 'Incubation Team', desc: 'Startup mentors and coaches helping entrepreneurs build and scale ventures.' }
  ];

  const TeamCard = ({ member }) => (
    <div className="group bg-white p-6 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="relative mb-6 rounded-[32px] overflow-hidden aspect-square shadow-xl group-hover:shadow-2xl transition-all">
         <img src={member.image_url} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
         <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/30 transition-all duration-500"></div>
         
         {/* Social Overlay */}
         <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 translate-y-20 group-hover:translate-y-0 transition-all duration-500 delay-100">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                <Linkedin size={18} />
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white text-blue-400 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all shadow-lg">
                <Twitter size={18} />
              </a>
            )}
            {member.facebook && (
              <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all shadow-lg">
                <Facebook size={18} />
              </a>
            )}
            {member.instagram && (
              <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-lg">
                <Instagram size={18} />
              </a>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-xl bg-white text-slate-600 flex items-center justify-center hover:bg-slate-600 hover:text-white transition-all shadow-lg">
                <Mail size={18} />
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
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">Our <span className="text-blue-600">Ecosystem</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed">Meet the diverse team of specialists, mentors, and trustees dedicated to building Africa's digital future.</p>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-slate-600">Loading team members...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* Categories */}
      {!loading && !error && (
        <div className="container mx-auto px-4 py-20 space-y-32">
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
      )}

      {/* Testimonials Section */}
      {!loading && !error && testimonials.length > 0 && (
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">What Our Clients Say</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">Hear from the organizations and individuals we have empowered through technology and training.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 6).map((testimonial) => (
                <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Quote className="text-blue-200 mb-4" size={40} />
                  <p className="text-white text-base leading-relaxed mb-6 line-clamp-4">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                    />
                    <div>
                      <h4 className="text-white font-bold">{testimonial.author}</h4>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-slate-900 rounded-[48px] p-12 text-center text-white">
           <h2 className="text-3xl font-black mb-6">Want to join the mission?</h2>
           <p className="text-slate-400 mb-8 max-w-xl mx-auto">We are always looking for passionate mentors, instructors, and leaders to join our global network.</p>
           <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all">Apply to Join</Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
