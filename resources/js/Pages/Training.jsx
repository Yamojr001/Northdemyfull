import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Clock, BarChart, Users, ArrowRight, BookOpen } from 'lucide-react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Training = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrainingPrograms();
  }, []);

  const fetchTrainingPrograms = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/training');
      setPrograms(response.data);
    } catch (err) {
      console.error('Error fetching training programs:', err);
      setError('Failed to load training programs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-[73px]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600">Loading training programs...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="pt-[73px] bg-white">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-7xl font-black mb-8">Professional <br /> Training Programs</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Master in-demand skills with our expert-led, industry-certified courses designed for working professionals</p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            {programs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program) => (
                  <div key={program.id} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                      {program.image_url ? (
                        <img src={program.image_url} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen size={48} className="text-blue-400" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        {program.level}
                      </div>
                    </div>
                    <div className="p-8 space-y-6">
                      <h3 className="text-2xl font-bold text-slate-900">{program.title}</h3>
                      <p className="text-slate-600 line-clamp-2">{program.short_description || program.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                        {program.duration && (
                          <div className="flex items-center space-x-2">
                            <Clock size={16} className="text-blue-500" />
                            <span>{program.duration}</span>
                          </div>
                        )}
                        {program.format && (
                          <div className="flex items-center space-x-2">
                            <BarChart size={16} className="text-blue-500" />
                            <span className="capitalize">{program.format}</span>
                          </div>
                        )}
                        {program.max_participants && (
                          <div className="flex items-center space-x-2">
                            <Users size={16} className="text-blue-500" />
                            <span>{program.max_participants} seats</span>
                          </div>
                        )}
                      </div>
                      {program.price && (
                        <div className="pt-4 border-t border-slate-100">
                          <p className="text-blue-600 font-bold text-lg">${program.price.toLocaleString()}</p>
                        </div>
                      )}
                      <Link href={`/programs/training/${program.id}`} className="flex items-center justify-between border-t border-slate-50 pt-4 group-hover:text-blue-600 transition-colors">
                        <span className="font-bold">Learn More</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                {error ? (
                  <>
                    <p className="text-red-600 mb-4">{error}</p>
                    <button 
                      onClick={fetchTrainingPrograms}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </>
                ) : (
                  <p className="text-slate-400 text-lg">No training programs available at this time.</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Upskill?</h2>
            <p className="text-slate-300 mb-8">Enroll in one of our programs and start your journey to professional excellence today.</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg">
              Enroll Now
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Training;
