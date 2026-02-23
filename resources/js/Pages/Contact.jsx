import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Let's Build the <br /> <span className="text-blue-600">Future Together</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Have a question about our programs? Looking to partner with NorthDemy? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-8">
               <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 rounded-[24px] bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-100 group-hover:shadow-blue-200">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-500 font-medium">For general inquiries and support</p>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-blue-600 font-bold text-xl mt-1 block hover:underline">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
               </div>

               <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 rounded-[24px] bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-lg shadow-emerald-100 group-hover:shadow-emerald-200">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-500 font-medium">Mon-Fri from 9am to 5pm</p>
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-emerald-600 font-bold text-xl mt-1 block hover:underline">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
               </div>

               <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 rounded-[24px] bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg shadow-purple-100 group-hover:shadow-purple-200">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h4>
                    <p className="text-slate-500 font-medium">Headquarters in Abuja</p>
                    <p className="text-slate-800 font-bold text-lg mt-1 max-w-sm">
                      {COMPANY_DETAILS.address}
                    </p>
                  </div>
               </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-[40px] text-white flex items-center justify-between">
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Support Chat</div>
                    <div className="text-slate-400 text-sm">Response in &lt; 2 hours</div>
                  </div>
               </div>
               <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-blue-600 hover:text-white transition-all">
                  Chat Now
               </button>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
             <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Send a Message</h3>
                
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
                    <p className="text-green-800 font-semibold">✓ Thank you! Your message has been sent successfully.</p>
                  </div>
                )}
                
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                    <p className="text-red-800 font-semibold">✗ {error}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                         <input 
                           type="text" 
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Musa Abdullahi" 
                           required
                           className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white outline-none transition-all" 
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                         <input 
                           type="email" 
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="musa@example.com" 
                           required
                           className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white outline-none transition-all" 
                         />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white outline-none transition-all" 
                      />
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white outline-none transition-all" 
                      />
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                      <textarea 
                        rows={4} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you today?" 
                        required
                        minLength="10"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white outline-none transition-all resize-none">
                      </textarea>
                   </div>

                   <button 
                     type="submit"
                     disabled={loading}
                     className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center space-x-3 hover:bg-blue-700 disabled:bg-gray-400 transition-all shadow-xl shadow-blue-200 group">
                      <span>{loading ? 'Sending...' : 'Send Message'}</span>
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                   
                   <p className="text-center text-slate-500 text-sm">
                     By clicking send, you agree to our <span className="text-blue-600 hover:underline">Privacy Policy</span>.
                   </p>
                </form>
             </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
