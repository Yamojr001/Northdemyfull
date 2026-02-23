import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, Filter, Search, Loader } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      if (!response.ok) throw new Error('Failed to fetch projects');
      const data = await response.json();
      
      // Parse outcomes if they're stored as JSON strings
      const parsedData = data.map(project => {
        let outcomes = [];
        let technologies = [];
        
        // Parse outcomes safely
        try {
          if (typeof project.outcomes === 'string') {
            outcomes = JSON.parse(project.outcomes || '[]');
          } else if (Array.isArray(project.outcomes)) {
            outcomes = project.outcomes;
          }
        } catch (e) {
          console.warn('Failed to parse outcomes for project:', project.id, e);
          outcomes = [];
        }
        
        // Parse technologies safely
        try {
          if (typeof project.technologies === 'string') {
            technologies = JSON.parse(project.technologies || '[]');
          } else if (Array.isArray(project.technologies)) {
            technologies = project.technologies;
          }
        } catch (e) {
          console.warn('Failed to parse technologies for project:', project.id, e);
          technologies = [];
        }
        
        return {
          ...project,
          outcomes,
          technologies
        };
      });
      
      setProjects(parsedData);
      setFilteredProjects(parsedData);
    } catch (err) {
      setError('Failed to load projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = projects;

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(p => p.project_type === selectedType);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.industry.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedType, projects]);

  const projectTypes = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Solutions' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'enterprise', label: 'Enterprise Systems' },
    { value: 'hybrid', label: 'Hybrid Solutions' },
    { value: 'consulting', label: 'Consulting' }
  ];

  const typeColors = {
    web: 'from-blue-50 to-cyan-50',
    mobile: 'from-green-50 to-emerald-50',
    enterprise: 'from-purple-50 to-pink-50',
    hybrid: 'from-orange-50 to-red-50',
    consulting: 'from-indigo-50 to-blue-50',
    other: 'from-slate-50 to-slate-100'
  };

  const typeBadgeColors = {
    web: 'bg-blue-100 text-blue-700',
    mobile: 'bg-green-100 text-green-700',
    enterprise: 'bg-purple-100 text-purple-700',
    hybrid: 'bg-orange-100 text-orange-700',
    consulting: 'bg-indigo-100 text-indigo-700',
    other: 'bg-slate-100 text-slate-700'
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 px-4 flex justify-center items-center min-h-96">
          <div className="text-center">
            <Loader size={48} className="text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-slate-600">Loading projects...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/50">
            <span className="text-sm font-semibold text-blue-300">OUR PORTFOLIO</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Transforming Industries with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Innovation</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Discover how we've delivered enterprise-scale solutions impacting millions across healthcare, finance, government, and beyond.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 px-4 bg-slate-50 sticky top-20 z-10 border-b border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-4 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {projectTypes.map(type => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                    selectedType === type.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-500'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-slate-600 mt-4">
            Showing <span className="font-bold">{filteredProjects.length}</span> of <span className="font-bold">{projects.length}</span> projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-8">
              {error}
            </div>
          )}

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-600 text-lg">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.slug}`}>
                  <div className={`group h-full bg-gradient-to-br ${typeColors[project.project_type] || typeColors.other} rounded-3xl p-8 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}>
                    {/* Project Image */}
                    {project.image && (
                      <div className="relative h-48 -m-8 mb-4 rounded-t-3xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50"></div>
                      </div>
                    )}

                    {/* Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${typeBadgeColors[project.project_type] || typeBadgeColors.other}`}>
                        {project.project_type.charAt(0).toUpperCase() + project.project_type.slice(1)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-slate-900 mb-2">{project.title}</h3>

                    {/* Client & Industry */}
                    <div className="space-y-1 mb-4">
                      <p className="text-sm text-slate-600">
                        <span className="font-semibold">Client:</span> {project.client_name}
                      </p>
                      <p className="text-sm text-slate-600">
                        <span className="font-semibold">Industry:</span> {project.industry}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    {project.outcomes && Array.isArray(project.outcomes) && project.outcomes.length > 0 && (
                      <div className="mb-6 p-4 bg-white/60 rounded-xl">
                        <p className="text-xs font-bold text-slate-700 mb-2">KEY OUTCOMES:</p>
                        <ul className="space-y-1">
                          {project.outcomes.slice(0, 2).map((outcome, idx) => (
                            <li key={idx} className="text-xs text-slate-600">✓ {outcome}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 group-hover:border-slate-300 transition-all">
                      <span className="text-sm font-bold text-slate-900">View Case Study</span>
                      <ArrowRight size={20} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/90 mb-8 text-lg">Let's discuss how we can deliver enterprise solutions for your organization</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
