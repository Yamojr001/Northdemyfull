import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, Code, ShieldCheck, Rocket, GraduationCap, TrendingUp, Users, CheckCircle, Zap } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/services');
      if (!response.ok) throw new Error('Failed to fetch services');
      const data = await response.json();
      setServices(data);
    } catch (err) {
      setError('Failed to load services');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const iconMap = {
    'GraduationCap': GraduationCap,
    'Rocket': Rocket,
    'ShieldCheck': ShieldCheck,
    'Code': Code,
    'TrendingUp': TrendingUp,
    'Users': Users,
    'CheckCircle': CheckCircle,
    'Zap': Zap,
  };

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName] || Code;
    return Icon;
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Our <span className="text-blue-400">Services</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Comprehensive solutions designed to accelerate your digital transformation and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {loading && (
            <div className="flex justify-center items-center py-32">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-32">
              <p className="text-red-600 text-lg mb-4">{error}</p>
              <button
                onClick={fetchServices}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && services.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = getIcon(service.icon);
                return (
                  <Link
                    key={service.id}
                    href={`/service/${service.id}`}
                    className="group bg-slate-50 border border-slate-200 rounded-[32px] p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-500 cursor-pointer"
                  >
                    <div className="mb-6 inline-block p-4 bg-blue-100 rounded-2xl group-hover:bg-blue-600 transition-all">
                      <Icon size={32} className="text-blue-600 group-hover:text-white transition-all" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-all">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {!loading && !error && services.length === 0 && (
            <div className="text-center py-24">
              <p className="text-slate-500 text-lg">No services available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Why Choose <span className="text-blue-600">NorthDemy</span>
            </h2>
            <p className="text-xl text-slate-600">
              Over a decade of proven excellence and thousands of satisfied clients across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: 'Proven Track Record', desc: '500+ successful projects completed' },
              { icon: Zap, title: 'Fast Implementation', desc: 'Quick turnaround without compromising quality' },
              { icon: Users, title: 'Expert Team', desc: 'Industry veterans with 10+ years experience' },
              { icon: TrendingUp, title: 'Measurable Results', desc: 'Guaranteed ROI and performance metrics' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-[24px] p-8 text-center hover:shadow-lg transition-all">
                  <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4">
                    <Icon size={28} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-[40px] p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Transform Your Business?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
            >
              Get in Touch Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
