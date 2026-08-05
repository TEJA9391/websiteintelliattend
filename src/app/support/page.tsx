// Navigation handled by layout.tsx
import { HelpHero } from "@/components/support/HelpHero";
import { HelpTopics } from "@/components/support/HelpTopics";
import { HelpContact } from "@/components/support/HelpContact";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100 selection:text-slate-500">
      <HelpHero />
      <HelpTopics />
      <HelpContact />
    </div>
  );
}
