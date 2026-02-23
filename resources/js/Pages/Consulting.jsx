import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle, Users, Zap, TrendingUp, BarChart3, Lightbulb, Layers, Shield } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Consulting = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full border border-blue-300">
                <span className="text-sm font-semibold text-blue-700">STRATEGIC CONSULTING</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Transformation</span> Experts
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We guide organizations through complex digital transformation journeys with strategic planning, expert guidance, and proven methodologies. From assessment to implementation, we're your trusted partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Schedule Consultation <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all">
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex-1 relative">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-3xl border-2 border-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <Lightbulb className="w-24 h-24 text-blue-600 mx-auto mb-4 opacity-80" />
                    <p className="text-slate-600 font-semibold">Strategy-Driven Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Our Consulting Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Digital Strategy',
                desc: 'Develop comprehensive roadmaps aligned with your business goals. We analyze market trends, competitive landscape, and organizational capabilities to create actionable strategies.',
                icon: <Lightbulb className="w-8 h-8" />,
                color: 'blue'
              },
              {
                title: 'Digital Assessment',
                desc: 'Evaluate your current digital maturity. We conduct thorough assessments of your technology infrastructure, processes, and workforce capabilities.',
                icon: <BarChart3 className="w-8 h-8" />,
                color: 'cyan'
              },
              {
                title: 'Change Management',
                desc: 'Navigate organizational transformation smoothly. We help manage change through stakeholder engagement, training programs, and cultural alignment.',
                icon: <Users className="w-8 h-8" />,
                color: 'purple'
              },
              {
                title: 'Implementation Support',
                desc: 'Execute your digital initiatives successfully. From vendor selection to deployment, we provide expert guidance and hands-on support throughout.',
                icon: <Zap className="w-8 h-8" />,
                color: 'orange'
              },
              {
                title: 'Process Optimization',
                desc: 'Streamline your operations with best practices. We identify inefficiencies and implement process improvements to boost productivity and reduce costs.',
                icon: <TrendingUp className="w-8 h-8" />,
                color: 'green'
              },
              {
                title: 'Technology Advisory',
                desc: 'Leverage the right technologies for your needs. We provide expert recommendations on tools, platforms, and solutions tailored to your requirements.',
                icon: <Layers className="w-8 h-8" />,
                color: 'indigo'
              }
            ].map((service, idx) => (
              <div key={idx} className={`p-8 bg-gradient-to-br from-${service.color}-50 to-${service.color}-100/50 rounded-3xl border border-${service.color}-200 hover:shadow-lg transition-all`}>
                <div className={`w-14 h-14 rounded-2xl bg-${service.color}-600 text-white flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black mb-12 text-center">Our Consulting Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Discovery', desc: 'Deep dive into your business, goals, and challenges' },
              { step: 2, title: 'Analysis', desc: 'Evaluate current state and identify opportunities' },
              { step: 3, title: 'Strategy', desc: 'Develop comprehensive roadmap and action plan' },
              { step: 4, title: 'Execution', desc: 'Implement with ongoing support and monitoring' }
            ].map((phase, idx) => (
              <div key={idx}>
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-2xl font-black">
                    {phase.step}
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute left-20 top-8 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                <p className="text-slate-400">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Results You Can Expect</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { metric: '40%', label: 'Average Efficiency Gain' },
              { metric: '50%+', label: 'Cost Reduction Potential' },
              { metric: '6mo', label: 'Faster Time-to-Market' },
              { metric: '95%', label: 'Client Satisfaction Rate' },
              { metric: '300+', label: 'Projects Delivered' },
              { metric: '500+', label: 'Companies Transformed' }
            ].map((result, idx) => (
              <div key={idx} className="text-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                <p className="text-4xl font-black text-blue-600 mb-2">{result.metric}</p>
                <p className="text-slate-600 font-semibold">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Why Choose Our Consulting?</h2>

          <div className="space-y-6">
            {[
              'Industry experts with 15+ years of experience across Fortune 500 companies',
              'Proven methodologies and frameworks developed through 300+ successful projects',
              'Hands-on approach with dedicated teams embedded in your organization',
              'Risk mitigation strategies and comprehensive change management',
              'Measurable results with clear ROI and performance metrics',
              'Ongoing support and partnership beyond project completion'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready for Your Digital Transformation?</h2>
            <p className="text-white/90 mb-8 text-lg">Schedule a free consultation with our experts today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                Book Consultation <ArrowRight size={20} />
              </Link>
              <button className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all border border-white/30">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;
