
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-24">
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
                <form className="space-y-6">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                         <input type="text" placeholder="John" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                         <input type="text" placeholder="Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white outline-none transition-all" />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white outline-none transition-all" />
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white outline-none transition-all">
                         <option>Tech Training Inquiry</option>
                         <option>Startup Incubation Hub</option>
                         <option>Digital Safety Partnership</option>
                         <option>General Support</option>
                      </select>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                      <textarea rows={4} placeholder="How can we help you today?" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white outline-none transition-all resize-none"></textarea>
                   </div>

                   <button className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center space-x-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group">
                      <span>Send Message</span>
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
  );
};

export default Contact;
