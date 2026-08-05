import { Search } from 'lucide-react';

const CATEGORIES = [
  "All Posts", "AI in Education", "Smart Classrooms", "Attendance", "Student Success", "Faculty", "Campus Technology"
];

export function BlogHero() {
  return (
    <section className="pt-32 pb-16 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#0F172A]">
          Insights for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Smarter Campuses</span>
        </h1>
        <p className="text-lg md:text-xl text-[#64748B] mb-10 max-w-3xl mx-auto">
          Stay updated with the latest trends in AI-powered education, smart classrooms, digital attendance, campus technology, and the future of learning.
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-12 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#64748B] group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-white border border-slate-200 rounded-full py-4 pl-12 pr-6 text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-xl shadow-slate-200/50"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {CATEGORIES.map((cat, i) => (
            <button key={i} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white text-[#64748B] border border-slate-200 hover:bg-slate-50 hover:text-[#0F172A] shadow-sm'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
