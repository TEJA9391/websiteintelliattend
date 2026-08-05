import { Search, LifeBuoy } from 'lucide-react';

export function HelpHero() {
  return (
    <section className="pt-24 pb-16 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 shadow-sm">
          <LifeBuoy className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#0F172A]">
          We&apos;re Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Help</span>
        </h1>
        <p className="text-lg md:text-xl text-[#64748B] mb-10 max-w-2xl mx-auto">
          Find answers, troubleshooting guides, and expert support whenever you need it.
        </p>
        
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-[#64748B] group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="How can we help you today?" 
            className="w-full bg-white border border-slate-300 rounded-2xl py-5 pl-14 pr-6 text-lg text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all shadow-xl shadow-slate-200/50"
          />
          <button className="absolute right-3 top-3 bottom-3 bg-primary text-white px-6 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
