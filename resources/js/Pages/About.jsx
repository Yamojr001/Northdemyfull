
import React from 'react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Empowering Africa's <br /> <span className="text-blue-600">Digital Frontier</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            NorthDemy Limited is a premier tech talent incubation and funding center committed to developing world-class digital skills and safety across the continent.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[40px] bg-blue-600 text-white space-y-6 shadow-2xl shadow-blue-200">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-blue-50 text-lg leading-relaxed opacity-90">
                To bridge the digital divide by designing, implementing, and securing high impact digital solutions for individuals, enterprises, and governments.We deliver world class technology training, enterprise systems, cybersecurity services, and mission critical infrastructure, while nurturing talent and building resilient digital ecosystems that support sustainable national and global development.
              </p>
            </div>
            
            <div className="p-12 rounded-[40px] bg-slate-900 text-white space-y-6 shadow-2xl shadow-slate-200">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-slate-300 text-lg leading-relaxed opacity-90">
                To become Africa’s leading technology, security, and innovation ecosystem, globally recognized for delivering military grade digital solutions, producing elite tech talent, and partnering with governments, security agencies, and enterprises to solve complex national and international challenges.<br /> We envision a future where Africa not only innovates, but secures, governs, and leads confidently in a digital first world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-extrabold text-slate-900">Our Core Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">The principles that guide our work and drive our commitment to excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Innovation', desc: 'Constantly pushing boundaries and embracing new technologies.', icon: Award },
              { title: 'Inclusion', desc: 'Creating opportunities for everyone regardless of background.', icon: Award },
              { title: 'Security', desc: 'Prioritizing digital safety in everything we build.', icon: Award },
              { title: 'Excellence', desc: 'Delivering world-class standards in training and service.', icon: Award }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <img src="https://prep-ai.xyz/ogasaid/download.jpeg" alt="NorthDemy History" className="rounded-[40px] shadow-2xl" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">A Legacy of <span className="text-blue-600">Digital Transformation</span></h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded with a clear vision to address the digital skills gap in West Africa, NorthDemy has evolved from a small training center into a comprehensive incubation and funding ecosystem.
                </p>
                <p>
                  Over the past five years, we have successfully partnered with international organizations and government agencies to implement large-scale digital literacy and cybersecurity initiatives. Our graduates now work in top tech companies worldwide, and our incubated startups have collectively raised millions in seed funding.
                </p>
              </div>
              <div className="pt-6 space-y-4">
                 {[
                   'Over 500+ professionals trained and certified',
                   'Trusted partner for 10+ global organizations',
                   'Successfully launched 20+ tech startups',
                 ].map((item, i) => (
                   <div key={i} className="flex items-center space-x-3 text-slate-900 font-bold">
                     <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                     <span>{item}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
