
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { NavLinks } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'unset'; // Reset overflow when route changes
  }, [location]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    // Prevent scrolling background when menu is open
    document.body.style.overflow = nextState ? 'hidden' : 'unset';
  };

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group z-[110]">
            <img 
              src="https://prep-ai.xyz/ogasaid/nd5.jpg" 
              alt="NorthDemy Logo" 
              className="w-32 sm:w-40 h-12 sm:h-14 object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.children ? (
                  <button
                    className={`flex items-center space-x-1 text-[15px] font-bold transition-colors ${
                      location.pathname.startsWith(link.path) ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-[15px] font-bold transition-colors ${
                      location.pathname === link.path ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white shadow-2xl rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 z-[110]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-slate-100"></div>
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={`block px-6 py-2.5 text-sm font-semibold transition-colors ${
                          location.pathname === child.path ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/programs" className="px-6 py-2.5 rounded-xl border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all">
              Apply Now
            </Link>
            <Link to="/contact" className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
              Partner
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-[110] p-2.5 text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-[105] transition-all duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="h-full flex flex-col pt-24 pb-10 px-6 overflow-y-auto">
          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-1">
            {NavLinks.map((link) => (
              <div key={link.name} className="border-b border-slate-50 last:border-none">
                <div 
                  className="flex justify-between items-center py-4 cursor-pointer"
                  onClick={() => {
                    if (link.children) {
                      setActiveDropdown(activeDropdown === link.name ? null : link.name);
                    }
                  }}
                >
                  <Link 
                    to={link.path} 
                    className={`text-xl font-extrabold transition-colors ${
                      location.pathname === link.path ? 'text-blue-600' : 'text-slate-900'
                    }`}
                    onClick={(e) => {
                      if (link.children) e.stopPropagation();
                    }}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180 text-blue-600' : 'text-slate-400'
                      }`} 
                    />
                  )}
                </div>
                
                {link.children && (
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeDropdown === link.name ? 'max-height-[500px] mb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="pl-4 border-l-2 border-blue-100 flex flex-col space-y-3 py-2 bg-slate-50/50 rounded-r-xl">
                      {link.children.map((child) => (
                        <Link 
                          key={child.name} 
                          to={child.path} 
                          className={`text-[15px] font-bold transition-colors ${
                            location.pathname === child.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="mt-8 space-y-4">
            <Link 
              to="/programs" 
              className="flex items-center justify-center space-x-3 w-full py-4 bg-blue-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all"
            >
              <span>Apply Now</span>
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center justify-center w-full py-4 border-2 border-slate-200 text-slate-900 font-black text-lg rounded-2xl hover:bg-slate-50 transition-all"
            >
              Partner With Us
            </Link>
          </div>

          {/* Social Links placeholder or additional info */}
          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm font-medium">Empowering Africa's Tech Ecosystem</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
