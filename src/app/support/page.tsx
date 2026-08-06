// Navigation handled by layout.tsx
import { Suspense } from 'react';
import { HelpHero } from "@/components/support/HelpHero";
import { HelpTopics } from "@/components/support/HelpTopics";
import { HelpContact } from "@/components/support/HelpContact";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100 selection:text-slate-500">
      <Suspense fallback={<div className="pt-24 pb-16 bg-[#F8FAFC] min-h-[300px]"></div>}>
        <HelpHero />
      </Suspense>
      <Suspense fallback={<div className="py-16 bg-white min-h-[500px]"></div>}>
        <HelpTopics />
      </Suspense>
      <HelpContact />
    </div>
  );
}
