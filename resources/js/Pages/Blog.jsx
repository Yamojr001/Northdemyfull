
import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">Insights & <span className="text-blue-600">News</span></h1>
          <p className="text-xl text-slate-600">
            Discover the latest trends in tech talent, startup innovation, and digital safety from the experts at NorthDemy.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <div className="group relative bg-slate-900 rounded-[40px] overflow-hidden flex flex-col lg:flex-row h-full lg:h-[500px]">
             <div className="lg:w-1/2 overflow-hidden h-64 lg:h-full">
               <img src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
             </div>
             <div className="lg:w-1/2 p-12 flex flex-col justify-center space-y-6">
               <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-widest">
                 Featured Article
               </div>
               <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                 {BLOG_POSTS[0].title}
               </h2>
               <p className="text-slate-400 text-lg">
                 {BLOG_POSTS[0].excerpt}
               </p>
               <div className="flex items-center space-x-6 text-slate-500 text-sm">
                 <div className="flex items-center space-x-2">
                   <Calendar size={16} />
                   <span>{BLOG_POSTS[0].date}</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <User size={16} />
                   <span>{BLOG_POSTS[0].author}</span>
                 </div>
               </div>
               <button className="px-8 py-4 rounded-xl bg-white text-slate-900 font-bold w-fit hover:bg-blue-600 hover:text-white transition-all">
                 Read Full Article
               </button>
             </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative mb-6 rounded-[32px] overflow-hidden aspect-[4/3] shadow-lg">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-slate-900 text-xs font-bold uppercase flex items-center space-x-2 shadow-sm">
                  <Tag size={12} className="text-blue-600" />
                  <span>{post.category}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-slate-500 text-sm font-medium">
                   <span>{post.date}</span>
                   <span>•</span>
                   <span>5 min read</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-2 text-blue-600 font-bold pt-2">
                   <span>Read More</span>
                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
          {/* Mock extra cards */}
          {[1, 2, 3].map(i => (
             <div key={i} className="group cursor-pointer opacity-80">
                <div className="relative mb-6 rounded-[32px] overflow-hidden aspect-[4/3] bg-slate-100 flex items-center justify-center">
                   <img src={`https://picsum.photos/seed/blog${i+3}/800/600`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-4">
                   <div className="flex items-center space-x-4 text-slate-500 text-sm font-medium">
                      <span>June {10+i}, 2024</span>
                      <span>•</span>
                      <span>4 min read</span>
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                     Upcoming Innovations in West African Tech
                   </h3>
                   <p className="text-slate-600 line-clamp-2">
                     How regional cooperation is driving a new wave of digital literacy and economic growth.
                   </p>
                </div>
             </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <button className="px-12 py-5 rounded-2xl border-2 border-slate-100 font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-200 transition-all">
             Load More Articles
           </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
