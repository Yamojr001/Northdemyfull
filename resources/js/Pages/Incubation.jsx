import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Rocket, TrendingUp, DollarSign, ArrowRight, Target, Lightbulb } from 'lucide-react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Incubation = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const steps = [
    { icon: Lightbulb, title: "Discovery", desc: "Refining the vision and validating the core market hypothesis." },
    { icon: Target, title: "Validation", desc: "MVP development and initial product-market fit testing." },
    { icon: Rocket, title: "Acceleration", desc: "Rapid growth phase with focused mentorship and technical support." },
    { icon: DollarSign, title: "Fundraising", desc: "Connecting with our network of local and international investors." }
  ];

  useEffect(() => {
    fetchIncubationPrograms();
  }, []);

  const fetchIncubationPrograms = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/incubation');
      setPrograms(response.data);
    } catch (err) {
      console.error('Error fetching incubation programs:', err);
      setError('Failed to load incubation programs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pt-[73px] bg-white">
        {/* Hero */}
        <section className="py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">NorthDemy <br /> Incubation Hub</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">From an idea on a napkin to a world-changing enterprise. We provide the capital, mentorship, and network you need to scale.</p>
          </div>
        </section>

        {/* Process */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Incubation Process</h2>
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

        {/* Programs */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Active Incubation Programs</h2>
            {loading ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-slate-600 mt-4">Loading programs...</p>
              </div>
            ) : programs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map((program) => (
                  <div key={program.id} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 flex-1">{program.title}</h3>
                      {program.funding_available && (
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                          ${program.funding_available.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 mb-6 line-clamp-2">{program.short_description || program.description}</p>
                    <div className="space-y-3 mb-6">
                      {program.duration && <p className="text-sm text-slate-500"><strong>Duration:</strong> {program.duration}</p>}
                      {program.batch_size && <p className="text-sm text-slate-500"><strong>Batch Size:</strong> {program.batch_size} startups</p>}
                      {program.level && <p className="text-sm text-slate-500"><strong>Level:</strong> {program.level}</p>}
                    </div>
                    <Link href={`/programs/incubation/${program.id}`} className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:space-x-4 transition-all">
                      <span>View Details</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                {error ? (
                  <>
                    <p className="text-red-600 mb-4">{error}</p>
                    <button 
                      onClick={fetchIncubationPrograms}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </>
                ) : (
                  <p className="text-slate-400 text-lg">No incubation programs available at this time.</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Have a Great Idea?</h2>
            <p className="text-slate-600 mb-8 text-lg">Apply to our incubation program and let us help you turn your vision into reality with funding, mentorship, and a supportive ecosystem.</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg">
              Apply Now
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Incubation;
