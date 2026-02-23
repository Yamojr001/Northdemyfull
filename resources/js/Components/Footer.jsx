
import React from 'react';
import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Send } from 'lucide-react';
import { COMPANY_DETAILS, FooterMenuSections, SocialLinks } from '../constants';

const Footer = () => {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size={18} />;
      case 'Twitter':
        return <Twitter size={18} />;
      case 'Facebook':
        return <Facebook size={18} />;
      case 'Instagram':
        return <Instagram size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-slate-800 mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-slate-400">Get the latest news and insights from {COMPANY_DETAILS.name}</p>
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
              <span className="text-2xl font-extrabold text-white tracking-tight">{COMPANY_DETAILS.name}</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {COMPANY_DETAILS.description}
            </p>
            <div className="flex space-x-4">
              {SocialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {FooterMenuSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link href={link.path} className="hover:text-blue-500 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          <p>© 2025 {COMPANY_DETAILS.name} Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
