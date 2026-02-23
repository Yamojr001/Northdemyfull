import React, { useState, useEffect } from 'react';
import { Clock, BarChart, Tag, ArrowRight, Loader } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/programs');
      if (!response.ok) throw new Error('Failed to fetch programs');
      const data = await response.json();
      setPrograms(data);
    } catch (err) {
      setError('Failed to load programs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="py-32 px-4 flex justify-center items-center min-h-96">
          <div className="text-center">
            <Loader size={48} className="text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-slate-600">Loading programs...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white py-20 lg:py-32">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">World-Class <span className="text-blue-600">Training Programs</span></h1>
          <p className="text-lg text-slate-600">Master the most in-demand skills in the digital economy with our expert-led, industry-certified curriculum.</p>
        </div>

        {error && (
          <div className="text-center py-12">
            <p className="text-red-600 font-semibold">{error}</p>
            <button 
              onClick={fetchPrograms}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        )}

        {!error && programs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No programs available at the moment.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              {program.image_url && (
                <div className="aspect-video relative overflow-hidden">
                  <img src={program.image_url} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {program.category && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      {program.category}
                    </div>
                  )}
                </div>
              )}
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">{program.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                  {program.duration && (
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-blue-500" />
                      <span>{program.duration}</span>
                    </div>
                  )}
                  {program.level && (
                    <div className="flex items-center space-x-2">
                      <BarChart size={16} className="text-blue-500" />
                      <span>{program.level}</span>
                    </div>
                  )}
                </div>
                <p className="text-slate-600">{program.short_description || program.description}</p>
                {program.price && (
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-2xl font-black text-blue-600">${program.price}</span>
                  </div>
                )}
                <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                  <span className="text-blue-600 font-bold">Apply Now</span>
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 p-10 lg:p-20 bg-slate-900 rounded-[40px] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl lg:text-5xl font-black mb-6">Need a Custom Training?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">We offer bespoke corporate training solutions tailored to your organization's specific needs and goals.</p>
          <button className="px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all">
            Inquire About Corporate Training
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Programs;