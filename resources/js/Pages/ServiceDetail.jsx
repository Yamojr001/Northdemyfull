
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
          <Link to="/" className="text-blue-600 font-bold underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center space-x-2 text-slate-500 hover:text-blue-600 font-bold mb-12 transition-colors">
          <ArrowLeft size={18} />
          <span>Back to Services</span>
        </Link>

        <div className="max-w-4xl">
          <div className="mb-12">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight">{service.title}</h1>
            <p className="text-2xl text-slate-600 leading-relaxed">{service.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-8">
               <h3 className="text-2xl font-bold text-slate-900">What's Included</h3>
               <ul className="space-y-4">
                 {[
                   "Dedicated support team available 24/7",
                   "Industry-standard tools and methodologies",
                   "Flexible engagement models",
                   "Performance analytics and reporting"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center space-x-4">
                     <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                       <CheckCircle2 size={16} />
                     </div>
                     <span className="text-slate-700 font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Start a Project</h3>
               <p className="text-slate-600 mb-8">Tell us about your needs and we'll get back to you with a tailored proposal within 24 hours.</p>
               <Link to="/contact" className="block w-full py-4 bg-blue-600 text-white text-center font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                 Request Consultation
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
