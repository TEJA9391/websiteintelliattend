import type { Metadata } from "next";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | IntelliAttend",
  description: "Join the IntelliAttend team and help build the future of campus management technology.",
};

const openings = [
  { title: "Senior Full-Stack Engineer", location: "Remote", type: "Full-time", department: "Engineering" },
  { title: "AI/ML Engineer", location: "Remote", type: "Full-time", department: "Engineering" },
  { title: "Product Designer", location: "Remote", type: "Full-time", department: "Design" },
  { title: "Customer Success Manager", location: "Remote", type: "Full-time", department: "Customer Success" },
  { title: "Marketing Specialist", location: "Remote", type: "Full-time", department: "Marketing" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Our Team</span>
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Help us build the future of campus management. We&apos;re looking for passionate people who want to make education better through technology.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12 text-center">Why IntelliAttend?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-[#64748B]">Remote-first culture with flexible hours</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-primary mb-2">Unlimited</div>
              <p className="text-[#64748B]">PTO and learning & development budget</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-primary mb-2">Mission</div>
              <p className="text-[#64748B]">Work that matters for education worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12 text-center">Open Positions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-colors cursor-pointer">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[#64748B]">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Apply <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
