"use client";

import { Search, LifeBuoy } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export function HelpHero() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get('q') || '';

  const updateSearch = (query: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

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
          <div className="absolute inset-y-0 left-4 md:left-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 md:h-6 md:w-6 text-[#64748B] group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="How can we help you today?" 
            value={currentQuery}
            onChange={(e) => updateSearch(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-2xl py-4 md:py-5 pl-12 md:pl-14 pr-28 md:pr-32 text-base md:text-lg text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all shadow-xl shadow-slate-200/50"
          />
          <button className="absolute right-2 md:right-3 top-2 md:top-3 bottom-2 md:bottom-3 bg-primary text-white px-5 md:px-6 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md text-sm md:text-base">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
