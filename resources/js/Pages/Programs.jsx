
import React from 'react';
import { Clock, BarChart, Tag, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <div className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">World-Class <span className="text-blue-600">Training Programs</span></h1>
          <p className="text-lg text-slate-600">Master the most in-demand skills in the digital economy with our expert-led, industry-certified curriculum.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {program.category}
                </div>
              </div>
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">{program.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-blue-500" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart size={16} className="text-blue-500" />
                    <span>{program.level}</span>
                  </div>
                </div>
                <p className="text-slate-600">Comprehensive curriculum designed by industry experts to take you from basics to professional proficiency.</p>
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
    </div>
  );
};

export default Programs;
