import React, { useState, useEffect } from 'react';
import { Link, useRoute } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, Code, ShieldCheck, Rocket, GraduationCap, TrendingUp, Users, CheckCircle, Zap, Clock, Users as UsersIcon, Zap as ZapIcon } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ServiceDetail = ({ id }) => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/services/${id}`);
      if (!response.ok) throw new Error('Service not found');
      const data = await response.json();
      setService(data);
    } catch (err) {
      setError('Failed to load service details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const iconMap = {
    'GraduationCap': GraduationCap,
    'Rocket': Rocket,
    'ShieldCheck': ShieldCheck,
    'Code': Code,
    'TrendingUp': TrendingUp,
    'Users': Users,
    'CheckCircle': CheckCircle,
    'Zap': Zap,
  };

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName] || Code;
    return Icon;
  };

  // Service details based on service type
  const getServiceDetails = () => {
    if (!service) return null;

    const details = {
      '1': { // Talent Development
        benefits: [
          'Hands-on practical training with industry experts',
          'Comprehensive curriculum covering latest technologies',
          'Career placement assistance',
          'Lifelong alumni network access',
          'Flexible learning schedules',
          'Affordable pricing options',
        ],
        features: [
          { icon: Clock, title: 'Flexible Duration', desc: '4-14 weeks depending on program' },
          { icon: UsersIcon, title: 'Small Cohorts', desc: 'Personalized attention from mentors' },
          { icon: ZapIcon, title: 'Live Projects', desc: 'Work on real-world applications' },
        ],
        cta: 'Explore Training Programs',
        ctaLink: '/programs/training',
      },
      '2': { // Startup Incubation
        benefits: [
          'Access to seed funding opportunities',
          'Mentorship from successful entrepreneurs',
          'Business planning and strategy support',
          'Networking with investors and peers',
          'Office space and infrastructure',
          'Market research and customer validation',
        ],
        features: [
          { icon: Rocket, title: 'Fast Track', desc: 'Launch your startup in 3-6 months' },
          { icon: Users, title: 'Investor Network', desc: 'Connect with VCs and angel investors' },
          { icon: TrendingUp, title: 'Growth Support', desc: 'Marketing, sales, and ops guidance' },
        ],
        cta: 'Join Incubation Program',
        ctaLink: '/programs/incubation',
      },
      '3': { // Cybersecurity
        benefits: [
          'Enterprise-grade security infrastructure',
          ' 24/7 threat monitoring and response',
          'Compliance and regulatory guidance',
          'Incident response planning',
          'Security awareness training',
          'Penetration testing and audits',
        ],
        features: [
          { icon: ShieldCheck, title: 'Full Protection', desc: 'Multi-layer defense systems' },
          { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock monitoring' },
          { icon: CheckCircle, title: 'Compliance', desc: 'ISO 27001 & industry standards' },
        ],
        cta: 'Schedule Security Audit',
        ctaLink: '/contact',
      },
      '4': { // Enterprise Systems
        benefits: [
          'Custom software development',
          'Legacy system modernization',
          'API integration services',
          'Mobile and web applications',
          'Database optimization',
          'Scalable architecture design',
        ],
        features: [
          { icon: Code, title: 'Full-Stack Dev', desc: 'Frontend, backend, and DevOps' },
          { icon: TrendingUp, title: 'Performance', desc: 'Optimized for speed and reliability' },
          { icon: Users, title: 'Support', desc: '3-year maintenance and support' },
        ],
        cta: 'Request Development Quote',
        ctaLink: '/contact',
      },
      '5': { // Digital Transformation
        benefits: [
          'Digital strategy development',
          'Process automation',
          'Cloud migration planning',
          'Change management support',
          'Staff training and upskilling',
          'Performance metrics and analytics',
        ],
        features: [
          { icon: TrendingUp, title: 'Strategy', desc: 'Tailored digital roadmap' },
          { icon: Zap, title: 'Quick Wins', desc: 'Immediate improvements visible' },
          { icon: CheckCircle, title: 'Proven', desc: 'Methodology from 100+ projects' },
        ],
        cta: 'Start Digital Transformation',
        ctaLink: '/contact',
      },
      '6': { // Consulting
        benefits: [
          'Technology strategy consulting',
          'Organizational restructuring',
          'Risk assessment and management',
          'Vendor evaluation and selection',
          'Cost optimization strategies',
          'Digital leadership coaching',
        ],
        features: [
          { icon: Users, title: 'Expert Advisors', desc: 'C-level and technical consultants' },
          { icon: Clock, title: 'Flexible', desc: 'Project-based or retainer options' },
          { icon: CheckCircle, title: 'Results-Driven', desc: 'Clear KPIs and deliverables' },
        ],
        cta: 'Book Consultation',
        ctaLink: '/contact',
      },
    };

    return details[String(service.id)] || details['1'];
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-8">{error || 'The service you are looking for does not exist.'}</p>
          <Link href="/services" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const details = getServiceDetails();
  const Icon = getIcon(service.icon);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-all">
            <ArrowLeft size={18} className="mr-2" />
            Back to Services
          </Link>
          
          <div className="flex items-start gap-8 mb-8">
            <div className="p-6 bg-blue-500/20 rounded-3xl hidden md:block">
              <Icon size={48} className="text-blue-400" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                {service.title}
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-slate-900 mb-8">Key Benefits</h2>
              <ul className="space-y-4 mb-16">
                {details.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Features Grid */}
              <h2 className="text-3xl font-black text-slate-900 mb-8">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {details.features.map((feature, idx) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={idx} className="bg-slate-50 rounded-[24px] p-6 hover:shadow-lg transition-all">
                      <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4">
                        <FeatureIcon size={24} className="text-blue-600" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - CTA Card */}
            <div>
              <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-[32px] p-8 sticky top-24 border border-slate-200">
                <div className="mb-6">
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">NEXT STEP</p>
                  <h3 className="text-2xl font-black text-slate-900">{details.cta}</h3>
                </div>
                
                <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                  Get started today and transform your business with our expert solutions.
                </p>

                <Link
                  href={details.ctaLink}
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all mb-4"
                >
                  Get Started <ArrowRight size={18} />
                </Link>

                <a
                  href={`mailto:info@northdemy.com?subject=Interested in ${service.title}`}
                  className="w-full inline-flex justify-center items-center px-6 py-3 border-2 border-slate-300 text-slate-900 font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  Contact Sales
                </a>

                <div className="mt-8 pt-8 border-t border-slate-300">
                  <p className="text-xs text-slate-500 mb-4">QUICK INFO</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-bold text-slate-700 uppercase">Service ID</p>
                      <p className="text-sm text-slate-600">#{service.id}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700 uppercase">Status</p>
                      <p className="text-sm text-green-600 font-bold">Available Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-2xl mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-6">
            Other <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600">
            Explore our complete range of solutions to meet all your business needs.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
          >
            View All Services <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
