import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export function FeaturedArticle() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[2rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row gap-8 items-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500 cursor-pointer">
          
          {/* Image Side */}
          <div className="w-full lg:w-[55%] aspect-video bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl overflow-hidden relative border border-slate-100 flex items-center justify-center">
             <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10"></div>
             {/* Abstract visual for featured article */}
             <div className="text-[120px] filter drop-shadow-2xl transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700">ðŸ¤–</div>
             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase text-slate-500 shadow-sm z-20 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> Featured Article
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center pr-4 lg:pr-8 pb-4 lg:pb-0">
            <div className="flex items-center gap-4 text-sm font-bold text-slate-500 mb-6">
              <span className="bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full border border-indigo-100">AI in Education</span>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 min read</div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 group-hover:text-slate-500 transition-colors tracking-tight leading-tight">
              How AI Is Transforming Modern Campus Management
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              Discover how artificial intelligence is helping universities automate attendance, improve classroom engagement, and streamline academic operations.
            </p>
            <div className="flex items-center gap-2 text-slate-500 font-extrabold group-hover:gap-4 transition-all uppercase tracking-wide text-sm">
              Read Full Article <ArrowRight className="w-5 h-5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
