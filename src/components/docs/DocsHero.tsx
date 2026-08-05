import { Search, Book } from 'lucide-react';

export function DocsHero() {
  return (
    <section className="pt-24 pb-12 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/50 border border-teal-200 text-slate-500 text-xs font-bold uppercase tracking-wider mb-6">
              <Book className="w-4 h-4" /> Documentation
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              IntelliAttend Documentation
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              Everything you need to understand IntelliAttend and get started with our intelligent campus management platform.
            </p>
            
            <div className="relative max-w-xl group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-slate-500 transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search guides..." 
                className="w-full bg-white border border-slate-300 rounded-xl py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-sm"
              />
            </div>
          </div>
          
          <div className="hidden md:block w-72 h-72 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full relative">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-2xl shadow-xl rotate-6 border border-slate-100 p-4">
                  <div className="w-full h-4 bg-slate-100 rounded-full mb-3"></div>
                  <div className="w-3/4 h-4 bg-slate-100 rounded-full mb-6"></div>
                  <div className="space-y-2">
                    <div className="w-full h-8 bg-teal-50 rounded border border-teal-100"></div>
                    <div className="w-full h-8 bg-teal-50 rounded border border-teal-100"></div>
                    <div className="w-full h-8 bg-teal-50 rounded border border-teal-100"></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
