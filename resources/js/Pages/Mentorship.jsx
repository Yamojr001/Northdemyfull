import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Users, Heart, BookOpen, ArrowRight, Award, Target } from 'lucide-react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Mentorship = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMentorshipPrograms();
  }, []);

  const fetchMentorshipPrograms = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/mentorship');
      setPrograms(response.data);
    } catch (err) {
      console.error('Error fetching mentorship programs:', err);
      setError('Failed to load mentorship programs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pt-[73px] bg-white">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-7xl font-black mb-8">Personalized <br /> Mentorship Programs</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">Learn directly from industry experts and accelerate your professional growth through one-on-one guidance and personalized coaching.</p>
          </div>
        </section>

        {/* Why Mentorship */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Why Choose Our Mentorship?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Expert Mentors", desc: "Learn from industry leaders with 10+ years of experience" },
                { icon: Target, title: "Personalized Plans", desc: "Customized coaching tailored to your specific goals" },
                { icon: Heart, title: "Dedicated Support", desc: "Regular check-ins and continuous guidance throughout" }
              ].map((item, i) => (
                <div key={i} className="text-center p-8 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all">
                  <item.icon size={40} className="text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Available Mentors</h2>
            {loading ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-slate-600 mt-4">Loading mentors...</p>
              </div>
            ) : programs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program) => (
                  <div key={program.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group">
                    {program.mentor_image ? (
                      <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                        <img src={program.mentor_image} alt={program.mentor_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    ) : (
                      <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                        <Users size={48} className="text-purple-400" />
                      </div>
                    )}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{program.mentor_name || program.title}</h3>
                        {program.mentor_title && <p className="text-purple-600 font-semibold">{program.mentor_title}</p>}
                      </div>
                      <p className="text-slate-600 text-sm line-clamp-2">{program.short_description || program.description}</p>
                      <div className="space-y-2 pt-2">
                        {program.duration && <p className="text-sm text-slate-500"><strong>Duration:</strong> {program.duration}</p>}
                        {program.participants_limit && <p className="text-sm text-slate-500"><strong>Spots:</strong> {program.participants_limit} available</p>}
                        {program.level && <p className="text-sm text-slate-500"><strong>Level:</strong> {program.level}</p>}
                      </div>
                      <Link href={`/programs/mentorship/${program.id}`} className="inline-flex items-center space-x-2 text-purple-600 font-bold hover:space-x-4 transition-all pt-2">
                        <span>Learn More</span>
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                {error ? (
                  <>
                    <p className="text-red-600 mb-4">{error}</p>
                    <button 
                      onClick={fetchMentorshipPrograms}
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </>
                ) : (
                  <p className="text-slate-400 text-lg">No mentorship programs available at this time.</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Transform Your Career</h2>
            <p className="text-purple-100 mb-8 text-lg">Get matched with the perfect mentor and accelerate your journey to success.</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all shadow-lg">
              Request Mentorship
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Mentorship;
