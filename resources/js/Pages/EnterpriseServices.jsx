import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle, Cloud, Layers, Zap, TrendingUp, Cpu, Database, Globe } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const EnterpriseSolutions = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full border border-purple-300">
                <span className="text-sm font-semibold text-purple-700">ENTERPRISE INFRASTRUCTURE</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Enterprise-Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Solutions</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Build robust, scalable infrastructure that powers your business growth. From cloud deployment to custom software development, we deliver enterprise-grade solutions engineered for performance and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Start Your Project <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl border-2 border-purple-600 hover:bg-purple-50 transition-all">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex-1 relative">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent rounded-3xl border-2 border-purple-200 flex items-center justify-center">
                  <div className="text-center">
                    <Cloud className="w-24 h-24 text-purple-600 mx-auto mb-4 opacity-80" />
                    <p className="text-slate-600 font-semibold">Scalable Cloud Infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Our Enterprise Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cloud Infrastructure',
                desc: 'Deploy and manage cloud infrastructure on AWS, Azure, or Google Cloud. We optimize for performance, cost, and reliability with enterprise-grade SLAs.',
                icon: <Cloud className="w-8 h-8" />,
                features: ['Multi-cloud Strategy', 'Migration Services', 'Cost Optimization', 'Disaster Recovery']
              },
              {
                title: 'Enterprise Software',
                desc: 'Custom software solutions built specifically for your business needs. From custom CRM to ERP systems, we deliver scalable applications.',
                icon: <Layers className="w-8 h-8" />,
                features: ['Custom Development', 'Legacy Modernization', 'API Integration', 'Microservices']
              },
              {
                title: 'Integration Services',
                desc: 'Connect your disparate systems seamlessly. We specialize in complex integrations across SAP, Salesforce, Oracle, and custom applications.',
                icon: <Zap className="w-8 h-8" />,
                features: ['System Integration', 'Data Migration', 'API Development', 'Real-time Sync']
              },
              {
                title: 'Database Solutions',
                desc: 'Optimize your data infrastructure. From SQL optimization to NoSQL implementations, we design databases for performance and scalability.',
                icon: <Database className="w-8 h-8" />,
                features: ['Database Design', 'Performance Tuning', 'Replication & Backup', 'Data Warehousing']
              },
              {
                title: 'DevOps & Automation',
                desc: 'Streamline your development and operations with modern DevOps practices. CI/CD pipelines, infrastructure-as-code, and continuous monitoring.',
                icon: <Cpu className="w-8 h-8" />,
                features: ['CI/CD Pipelines', 'Infrastructure-as-Code', 'Container Orchestration', 'Monitoring & Logging']
              },
              {
                title: 'Performance Optimization',
                desc: 'Maximize application and system performance. We identify bottlenecks, optimize code, and ensure your infrastructure runs efficiently.',
                icon: <TrendingUp className="w-8 h-8" />,
                features: ['Load Testing', 'Code Optimization', 'Caching Strategies', 'Scalability Planning']
              }
            ].map((service, idx) => (
              <div key={idx} className={`p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-200 hover:shadow-lg transition-all`}>
                <div className={`w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={16} className="text-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black mb-12 text-center">Technologies We Master</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'Cloud Platforms', items: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'] },
              { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra'] },
              { category: 'Enterprise Systems', items: ['SAP', 'Salesforce', 'Oracle', 'Microsoft Dynamics'] },
              { category: 'DevOps Tools', items: ['Docker', 'Jenkins', 'GitLab', 'Terraform'] }
            ].map((tech, idx) => (
              <div key={idx} className="p-6 border border-slate-700 rounded-2xl hover:border-purple-500 transition-all">
                <h3 className="text-lg font-bold mb-4 text-purple-400">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, iidx) => (
                    <li key={iidx} className="text-slate-300 flex items-center gap-2">
                      <CheckCircle size={16} className="text-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Our Enterprise Delivery Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Assessment', desc: 'Evaluate your requirements and current systems' },
              { step: 2, title: 'Design', desc: 'Architecture and technical solution design' },
              { step: 3, title: 'Build', desc: 'Development and deployment with quality assurance' },
              { step: 4, title: 'Optimize', desc: 'Performance tuning and ongoing support' }
            ].map((phase, idx) => (
              <div key={idx}>
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-black text-white">
                    {phase.step}
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute left-20 top-8 w-12 h-0.5 bg-gradient-to-r from-purple-600 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-slate-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Our Enterprise Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { metric: '100+', label: 'Enterprise Deployments' },
              { metric: '99.99%', label: 'Uptime SLA Guaranteed' },
              { metric: '$500M+', label: 'Client ROI Generated' },
              { metric: '50+', label: 'Fortune 500 Partners' },
              { metric: '2M+', label: 'Transactions Per Second' },
              { metric: '15yrs', label: 'Enterprise Experience' }
            ].map((result, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-2xl border border-purple-200 hover:shadow-lg transition-all">
                <p className="text-4xl font-black text-purple-600 mb-2">{result.metric}</p>
                <p className="text-slate-600 font-semibold">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Why Choose Our Enterprise Solutions?</h2>

          <div className="space-y-6">
            {[
              'Proven expertise with 100+ enterprise deployments across diverse industries',
              'Enterprise-grade SLAs with 99.99% uptime guarantees',
              'Scalable architecture designed for millions of transactions',
              'Dedicated enterprise support team available 24/7',
              'Seamless integration with your existing systems',
              'Cost optimization ensuring maximum ROI on technology investments'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Scale Your Enterprise?</h2>
            <p className="text-white/90 mb-8 text-lg">Let's build the technology foundation for your future growth</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                Start Your Project <ArrowRight size={20} />
              </Link>
              <button className="px-8 py-4 bg-purple-700 text-white font-bold rounded-xl hover:bg-purple-800 transition-all border border-white/30">
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

export default EnterpriseSolutions;
