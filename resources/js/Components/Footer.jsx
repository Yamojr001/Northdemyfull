
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Send, Lock, } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-slate-800 mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-slate-400">Get the latest news and insights from NorthDemy</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md bg-slate-900 rounded-xl p-1 border border-slate-800">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent px-4 py-2 w-full outline-none text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all">
              <span>Subscribe</span>
              <Send size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">NorthDemy</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              NorthDemy Limited is a technology and security solutions company delivering enterprise software, cybersecurity, network infrastructure, and innovation programs for governments, security agencies, and private sector organizations while building Africa’s next generation of world class tech talent.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Team', 'Partners', 'Careers'].map(link => (
                <li key={link}><Link to="#" className="hover:text-blue-500 transition-colors">{link}</Link></li>
              ))}
              {/*<li><Link to="/admin/login" className="flex items-center space-x-2 text-slate-500 hover:text-blue-500 transition-colors mt-4 text-xs font-semibold uppercase tracking-widest"><Lock size={12}/> <span>Admin Login</span></Link></li>*/}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {['Consulting', 'Training', 'Incubation', 'Digital Safety'].map(link => (
                <li key={link}><Link to="#" className="hover:text-blue-500 transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              {['Blog', 'Success Stories', 'FAQs', 'Contact'].map(link => (
                <li key={link}><Link to="#" className="hover:text-blue-500 transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-slate-800">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Mail size={18} />
            </div>
            <span className="text-slate-400">{COMPANY_DETAILS.email}</span>
          </div>
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Phone size={18} />
            </div>
            <span className="text-slate-400">{COMPANY_DETAILS.phone}</span>
          </div>
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <MapPin size={18} />
            </div>
            <span className="text-slate-400 text-sm">{COMPANY_DETAILS.address}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2025 NorthDemy Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
