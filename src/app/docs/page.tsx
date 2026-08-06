// Navigation handled by layout.tsx
import { Suspense } from 'react';
import { DocsHero } from "@/components/docs/DocsHero";
import { DocsContent } from "@/components/docs/DocsContent";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div className="pt-24 pb-12 bg-slate-50 min-h-[300px]"></div>}>
        <DocsHero />
      </Suspense>
      <div className="container mx-auto px-4 py-16">
        <Suspense fallback={<div className="max-w-4xl mx-auto space-y-20"><div className="animate-pulse bg-slate-100 h-[600px] rounded-3xl"></div></div>}>
          <DocsContent />
        </Suspense>
      </div>
    </div>
  );
}
