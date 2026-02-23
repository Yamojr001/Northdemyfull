import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle, AlertTriangle, Lock, Zap, Eye, Shield, Server, BarChart3 } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const DigitalSafety = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full border border-green-300">
                <span className="text-sm font-semibold text-green-700">CYBERSECURITY SOLUTIONS</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Digital Assets</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                In an era of sophisticated cyber threats, we provide comprehensive security solutions. Our advanced threat detection, compliance management, and rapid incident response keep your organization secure 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Get Security Assessment <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl border-2 border-green-600 hover:bg-green-50 transition-all">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex-1 relative">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl opacity-20 blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 to-transparent rounded-3xl border-2 border-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-green-600 mx-auto mb-4 opacity-80" />
                    <p className="text-slate-600 font-semibold">Enterprise-Grade Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Comprehensive Security Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Threat Detection & Response',
                desc: 'Advanced AI-powered threat monitoring with real-time detection. Our SOC operates 24/7 to identify and neutralize threats before they impact your business.',
                icon: <Eye className="w-8 h-8" />,
                features: ['24/7 Monitoring', 'AI-Powered Detection', 'Rapid Response', 'Threat Intelligence']
              },
              {
                title: 'Compliance Management',
                desc: 'Achieve and maintain regulatory compliance. We help you meet GDPR, ISO 27001, SOC 2, and other critical security standards.',
                icon: <BarChart3 className="w-8 h-8" />,
                features: ['Audit Support', 'Policy Development', 'Compliance Mapping', 'Regular Updates']
              },
              {
                title: 'Infrastructure Security',
                desc: 'Secure your entire IT infrastructure. From firewalls to intrusion prevention, we implement multi-layered defense mechanisms.',
                icon: <Server className="w-8 h-8" />,
                features: ['Firewall Management', 'Intrusion Detection', 'Network Segmentation', 'Access Control']
              },
              {
                title: 'Security Training',
                desc: 'Educate your team on security best practices. Human error is the leading cause of breaches; we build a security-aware culture.',
                icon: <Zap className="w-8 h-8" />,
                features: ['Phishing Simulations', 'Staff Training', 'Awareness Programs', 'Best Practices']
              },
              {
                title: 'Incident Response',
                desc: 'Rapid response to security incidents. Our expert team minimizes damage and recovers your systems quickly.',
                icon: <AlertTriangle className="w-8 h-8" />,
                features: ['24/7 Response', 'Forensic Analysis', 'Recovery Planning', 'Root Cause Analysis']
              },
              {
                title: 'Vulnerability Management',
                desc: 'Proactive identification and remediation of vulnerabilities. Regular assessments keep your systems secure.',
                icon: <Lock className="w-8 h-8" />,
                features: ['Penetration Testing', 'Vulnerability Scanning', 'Patch Management', 'Risk Assessment']
              }
            ].map((service, idx) => (
              <div key={idx} className={`p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-200 hover:shadow-lg transition-all`}>
                <div className={`w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={16} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black mb-12 text-center">The Threat Landscape We Protect Against</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { threat: 'Ransomware', impact: 'Encrypts critical data', protection: 'Real-time Detection & Backup' },
              { threat: 'Phishing', impact: 'Compromises credentials', protection: 'Email Security & Training' },
              { threat: 'DDoS Attacks', impact: 'Service disruption', protection: 'Traffic Mitigation' },
              { threat: 'Data Breach', impact: 'Information theft', protection: 'Access Control & Encryption' },
              { threat: 'Insider Threats', impact: 'Unauthorized access', protection: 'User Monitoring & Audits' },
              { threat: 'Malware', impact: 'System compromise', protection: 'Endpoint Protection & Scanning' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-slate-700 rounded-2xl hover:border-green-500 transition-all">
                <h3 className="text-lg font-bold mb-2 text-green-400">{item.threat}</h3>
                <p className="text-slate-300 mb-3">{item.impact}</p>
                <p className="text-sm text-slate-400">✓ {item.protection}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Security Standards & Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { cert: 'ISO 27001', desc: 'Information security management system certification' },
              { cert: 'SOC 2 Type II', desc: 'Service organization controls audit report' },
              { cert: 'GDPR Compliant', desc: 'General Data Protection Regulation compliance' },
              { cert: 'HIPAA Ready', desc: 'Healthcare data protection standards' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border-2 border-green-300 text-center">
                <p className="text-3xl font-black text-green-600 mb-2">{item.cert}</p>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Why Choose NorthDemy for Security?</h2>

          <div className="space-y-6">
            {[
              'Advanced AI and machine learning-powered threat detection',
              '24/7/365 Security Operations Center with expert analysts',
              'Sub-minute incident response times',
              'Comprehensive coverage across all attack vectors',
              'Proven track record with 500+ organizations protected',
              'Compliance expertise across multiple regulatory frameworks'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Secure Your Organization Today</h2>
            <p className="text-white/90 mb-8 text-lg">Get a free security assessment from our experts</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                Request Assessment <ArrowRight size={20} />
              </Link>
              <button className="px-8 py-4 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-all border border-white/30">
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

export default DigitalSafety;
