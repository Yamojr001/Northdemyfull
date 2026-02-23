import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Quote, Users, Handshake, Award, TrendingUp, Globe, CheckCircle2 } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [partnersRes, testimonialsRes] = await Promise.all([
        fetch('/api/partners'),
        fetch('/api/testimonials')
      ]);
      
      if (!partnersRes.ok) throw new Error('Failed to fetch partners');
      if (!testimonialsRes.ok) throw new Error('Failed to fetch testimonials');
      
      const partnersData = await partnersRes.json();
      const testimonialsData = await testimonialsRes.json();
      
      setPartners(partnersData);
      setTestimonials(testimonialsData);
    } catch (err) {
      setError('Failed to load data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { icon: Users, value: '50+', label: 'Strategic Partners' },
    { icon: Globe, value: '15+', label: 'Countries Reached' },
    { icon: Award, value: '200+', label: 'Joint Projects' },
    { icon: TrendingUp, value: '₦10B+', label: 'Combined Impact' }
  ];

  const benefits = [
    { icon: Handshake, title: 'Co-Innovation', desc: 'Collaborate on cutting-edge technology solutions' },
    { icon: Users, title: 'Talent Access', desc: 'Connect with top-tier African tech talent' },
    { icon: Globe, title: 'Market Expansion', desc: 'Access emerging markets across Africa' },
    { icon: Award, title: 'Brand Recognition', desc: 'Joint marketing and visibility opportunities' },
    { icon: TrendingUp, title: 'Shared Growth', desc: 'Mutual success through strategic alignment' },
    { icon: CheckCircle2, title: 'CSR Impact', desc: 'Measurable social and economic impact' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Handshake size={20} />
              <span className="font-bold text-sm">Building Together</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Our <span className="text-yellow-300">Partners</span> & Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Collaborating with leading organizations worldwide to empower Africa's digital transformation through technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      {!loading && !error && partners.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Trusted by <span className="text-blue-600">Industry Leaders</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We partner with leading technology companies, governments, and institutions to drive innovation and impact.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <img 
                    src={partner.logo_url} 
                    alt={partner.name} 
                    className="max-w-full max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    title={partner.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Why <span className="text-blue-600">Partner</span> With Us?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join a network of innovators committed to building Africa's digital future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-slate-50 rounded-3xl p-8 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 flex items-center justify-center mb-6 transition-all">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-white mb-3 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 group-hover:text-blue-100 leading-relaxed transition-colors">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {!loading && !error && testimonials.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Quote size={20} />
                <span className="font-bold text-sm">Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                What Our <span className="text-yellow-300">Partners</span> Say
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Hear from the organizations and leaders we've empowered through collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col"
                >
                  <Quote className="text-blue-300 mb-6" size={48} />
                  <p className="text-white text-base leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonial.author}</h4>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[48px] p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <Handshake className="mx-auto mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Partner With Us?</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Let's collaborate to create innovative solutions and drive meaningful impact across Africa. Join our ecosystem of partners and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-yellow-300 hover:text-slate-900 transition-all shadow-xl"
                >
                  Become a Partner
                </Link>
                <a 
                  href="mailto:partnerships@northdemy.org" 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
                >
                  Email Partnerships Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-slate-600">Loading partners and testimonials...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Partners;
