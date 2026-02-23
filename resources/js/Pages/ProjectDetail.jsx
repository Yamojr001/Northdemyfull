import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, ExternalLink, Download, Users, Calendar, DollarSign, Target, TrendingUp, Loader } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ProjectDetail = ({ slug }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProject();
  }, [slug]);

  const fetchProject = async () => {
    try {
      setLoading(true);
      // Fetch by slug from projects list
      const response = await fetch('/api/projects');
      if (!response.ok) throw new Error('Failed to fetch projects');
      const projects = await response.json();
      const found = projects.find(p => p.slug === slug);
      if (!found) throw new Error('Project not found');
      setProject(found);
    } catch (err) {
      setError('Failed to load project details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 px-4 flex justify-center items-center min-h-96">
          <div className="text-center">
            <Loader size={48} className="text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-slate-600">Loading project...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <p className="text-red-600 text-lg mb-8">{error || 'Project not found'}</p>
            <Link href="/projects" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getProjectTypeBg = (type) => {
    const colors = {
      web: 'from-blue-600 to-cyan-600',
      mobile: 'from-green-600 to-emerald-600',
      enterprise: 'from-purple-600 to-pink-600',
      hybrid: 'from-orange-600 to-red-600',
      consulting: 'from-indigo-600 to-blue-600'
    };
    return colors[type] || colors.web;
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section with Project Image */}
      {project.image && (
        <section className={`pt-32 pb-20 px-4 bg-gradient-to-br ${getProjectTypeBg(project.project_type)}`}>
          <div className="container mx-auto max-w-5xl">
            <Link href="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-all">
              <ArrowLeft size={20} /> Back to Projects
            </Link>
            
            <div className="mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full border border-white/40">
                <span className="text-sm font-semibold text-white uppercase">{project.project_type} Solution</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">{project.title}</h1>
              <p className="text-xl text-white/90 max-w-2xl">{project.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="text-white/70 text-sm mb-1">Client</p>
                <p className="text-lg font-bold text-white">{project.client_name}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="text-white/70 text-sm mb-1">Industry</p>
                <p className="text-lg font-bold text-white">{project.industry}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="text-white/70 text-sm mb-1">Completion</p>
                <p className="text-lg font-bold text-white">
                  {project.completion_date ? new Date(project.completion_date).toLocaleDateString() : 'Active'}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-black text-slate-900 mb-6">Project Overview</h2>
                <p className="text-slate-700 leading-relaxed text-lg">{project.overview}</p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-black text-slate-900 mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-black text-slate-900 mb-6">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-semibold text-sm hover:bg-slate-200 transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcomes */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-black text-slate-900 mb-6">Project Outcomes</h2>
                  <div className="space-y-4">
                    {project.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                        <TrendingUp className="text-green-600 flex-shrink-0 mt-1" size={24} />
                        <p className="text-slate-700 text-lg font-semibold">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Stats Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-8 mb-8 sticky top-32">
                <h3 className="text-lg font-bold mb-6">Project Details</h3>
                
                <div className="space-y-4 mb-8">
                  {project.team_size && (
                    <div className="flex items-center gap-4 pb-4 border-b border-slate-700">
                      <Users className="text-blue-400" size={20} />
                      <div>
                        <p className="text-slate-400 text-sm">Team Size</p>
                        <p className="font-bold">{project.team_size} experts</p>
                      </div>
                    </div>
                  )}
                  
                  {project.budget_range && (
                    <div className="flex items-center gap-4 pb-4 border-b border-slate-700">
                      <DollarSign className="text-green-400" size={20} />
                      <div>
                        <p className="text-slate-400 text-sm">Investment</p>
                        <p className="font-bold">₦{project.budget_range}K+</p>
                      </div>
                    </div>
                  )}
                  
                  {project.completion_date && (
                    <div className="flex items-center gap-4 pb-4 border-b border-slate-700">
                      <Calendar className="text-purple-400" size={20} />
                      <div>
                        <p className="text-slate-400 text-sm">Completed</p>
                        <p className="font-bold">{new Date(project.completion_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4">
                    <Target className="text-orange-400" size={20} />
                    <div>
                      <p className="text-slate-400 text-sm">Project Type</p>
                      <p className="font-bold capitalize">{project.project_type}</p>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="space-y-3">
                  {project.website_url && (
                    <a 
                      href={project.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold"
                    >
                      Visit Website <ExternalLink size={16} />
                    </a>
                  )}
                  
                  {project.app_store_url && (
                    <a 
                      href={project.app_store_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all font-semibold text-sm"
                    >
                      App Store <ExternalLink size={14} />
                    </a>
                  )}
                  
                  {project.google_play_url && (
                    <a 
                      href={project.google_play_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all font-semibold text-sm"
                    >
                      Google Play <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Contact CTA */}
              <Link 
                href="/contact"
                className="w-full block text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Discuss Similar Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects CTA */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Ready for Your Next Project?</h2>
          <p className="text-slate-600 mb-8 text-lg">Let's create something extraordinary together</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
              View All Projects
            </Link>
            <Link href="/enterprise" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
