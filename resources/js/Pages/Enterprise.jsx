import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, Award, BarChart3, Globe, Zap, Users, CheckCircle } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Enterprise = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/50">
            <span className="text-sm font-semibold text-blue-300">ENTERPRISE PORTFOLIO</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Enterprise Solutions That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Real Impact</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            From healthcare transformation to government infrastructure, we've delivered enterprise-scale solutions that impact millions of lives across Africa.
          </p>
          <Link href="/projects" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all shadow-lg">
            View Our Projects <ArrowRight size={20} className="inline ml-2" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '8+', label: 'Enterprise Projects', icon: <Award /> },
              { number: '₦10B+', label: 'Total Impact Value', icon: <BarChart3 /> },
              { number: '5M+', label: 'People Impacted', icon: <Users /> },
              { number: '99.9%', label: 'Average Uptime', icon: <Zap /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4 text-blue-600">
                  {React.cloneElement(stat.icon, { size: 32 })}
                </div>
                <p className="text-4xl font-black text-slate-900 mb-2">{stat.number}</p>
                <p className="text-slate-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Industries We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { industry: 'Healthcare', desc: 'Digital health platforms, telemedicine systems, patient management' },
              { industry: 'Agriculture', desc: 'Livestock management, farming technology, market systems' },
              { industry: 'Government', desc: 'Digital identity, compliance systems, public services' },
              { industry: 'Finance', desc: 'Payment systems, fintech platforms, transaction processing' },
              { industry: 'Manufacturing', desc: 'ERP systems, supply chain, quality control' },
              { industry: 'Education', desc: 'E-learning platforms, student management, collaboration tools' },
              { industry: 'Real Estate', desc: 'Property management, virtual tours, marketplace solutions' },
              { industry: 'Energy', desc: 'Renewable monitoring, IoT systems, analytics platforms' },
              { industry: 'Retail', desc: 'POS systems, inventory management, omnichannel commerce' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.industry}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black mb-12 text-center">Why Choose NorthDemy for Enterprise Solutions?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Proven Track Record',
                desc: 'Over 8 major enterprise deployments with measurable business impact and ROI'
              },
              {
                title: 'Enterprise Expertise',
                desc: '15+ years of experience with Fortune 500 patterns and best practices'
              },
              {
                title: 'Scalability Guaranteed',
                desc: 'Systems handling millions of users and transactions daily'
              },
              {
                title: 'Security First',
                desc: 'ISO 27001 certified, PCI DSS compliant, government-grade security'
              },
              {
                title: 'Mission-Critical Support',
                desc: '24/7/365 expert support with sub-minute incident response'
              },
              {
                title: 'Compliance Ready',
                desc: 'Built-in regulatory compliance for finance, healthcare, government sectors'
              },
              {
                title: 'Cost Optimization',
                desc: 'Enterprise solutions with transparent pricing and predictable costs'
              },
              {
                title: 'Local Expertise',
                desc: 'Deep understanding of African markets and business contexts'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 border-l-4 border-blue-500">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-slate-900 mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Explore our most impactful enterprise deliveries</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Bloom Health Initiative',
                industry: 'Healthcare',
                impact: '50,000+ patients served',
                image: 'https://prep-ai.xyz/ogasaid/bloom.jpg',
                link: '/projects/bloom-health-initiative'
              },
              {
                name: 'Jigawa Livestock App',
                industry: 'Agriculture',
                impact: '25,000+ farmers connected',
                image: 'https://prep-ai.xyz/ogasaid/jigawa.jpg',
                link: '/projects/jigawa-livestock-app'
              },
              {
                name: 'Enterprise ERP System',
                industry: 'Manufacturing',
                impact: '₦2.5B efficiency gains',
                image: 'https://prep-ai.xyz/ogasaid/erp.jpg',
                link: '/projects/enterprise-erp-system'
              },
              {
                name: 'FinTech Platform',
                industry: 'Finance',
                impact: '2M+ users, ₦15B daily volume',
                image: 'https://prep-ai.xyz/ogasaid/fintech.jpg',
                link: '/projects/fintech-platform'
              }
            ].map((project, idx) => (
              <Link key={idx} href={project.link}>
                <div className="group cursor-pointer overflow-hidden rounded-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-semibold text-blue-300 mb-1">{project.industry}</p>
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-sm text-slate-300">{project.impact}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                      View Project <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
              See All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Our Technology Stack</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: 'Cloud', techs: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'] },
              { category: 'Backend', techs: ['Python', 'Node.js', 'Java', 'Go', 'C#/.NET'] },
              { category: 'Frontend', techs: ['React', 'Vue.js', 'Angular', 'Next.js'] },
              { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'Oracle', 'Redis'] },
              { category: 'IoT & ML', techs: ['TensorFlow', 'MQTT', 'Kubernetes', 'Docker'] },
              { category: 'Security', techs: ['OAuth 2.0', 'Blockchain', 'HSM', 'TLS/SSL'] },
              { category: 'DevOps', techs: ['GitHub', 'GitLab', 'Jenkins', 'Terraform'] },
              { category: 'Mobile', techs: ['React Native', 'Flutter', 'iOS', 'Android'] }
            ].map((stack, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-3">{stack.category}</h3>
                <ul className="space-y-1">
                  {stack.techs.map((tech, tidx) => (
                    <li key={tidx} className="text-sm text-slate-600">{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Build Your Enterprise Solution?</h2>
            <p className="text-white/90 mb-8 text-lg">Let's transform your business with proven enterprise technology</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl">
                Schedule Consultation
              </Link>
              <Link href="/projects" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all border border-white/30">
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;
