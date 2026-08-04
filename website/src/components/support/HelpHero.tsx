import { Search, LifeBuoy } from 'lucide-react';

export function HelpHero() {
  return (
    <section className="pt-24 pb-16 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <div className="w-16 h-16 bg-blue-100 text-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-200 shadow-sm">
          <LifeBuoy className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
          We&apos;re Here to Help
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Find answers, troubleshooting guides, and expert support whenever you need it.
        </p>
        
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-slate-400 group-focus-within:text-slate-500 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="How can we help you today?" 
            className="w-full bg-white border border-slate-300 rounded-2xl py-5 pl-14 pr-6 text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-xl shadow-slate-200/50"
          />
          <button className="absolute right-3 top-3 bottom-3 bg-blue-600 text-white px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
