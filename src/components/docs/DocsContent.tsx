"use client";

import { ArrowRight, BookOpen, MonitorSmartphone, Users, GraduationCap, Building2, LogIn, LayoutDashboard, BadgeCheck, FolderOpen, FileBarChart } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PLATFORM_OVERVIEW = [
  {
    title: "Faculty",
    icon: <GraduationCap className="w-6 h-6 text-slate-500" />,
    desc: "Manage attendance, schedules, classroom resources, SmartBoard content, and teaching activities from one intuitive dashboard."
  },
  {
    title: "Students",
    icon: <Users className="w-6 h-6 text-emerald-500" />,
    desc: "Access attendance records, assignments, timetables, learning resources, and important campus notifications."
  },
  {
    title: "SmartBoard",
    icon: <MonitorSmartphone className="w-6 h-6 text-teal-500" />,
    desc: "Share presentations, lecture notes, announcements, and classroom content instantly with connected SmartBoards."
  },
  {
    title: "Administration",
    icon: <Building2 className="w-6 h-6 text-rose-500" />,
    desc: "Monitor campus operations, faculty performance, attendance reports, and institutional analytics from a centralized dashboard."
  }
];

const QUICK_GUIDES = [
  { icon: <LogIn className="w-6 h-6 text-slate-700 group-hover:text-slate-500 transition-colors" />, title: "Create Your Account", desc: "Learn how to sign in and access IntelliAttend." },
  { icon: <LayoutDashboard className="w-6 h-6 text-slate-700 group-hover:text-slate-500 transition-colors" />, title: "Navigate the Dashboard", desc: "Understand the main sections of the platform." },
  { icon: <BadgeCheck className="w-6 h-6 text-slate-700 group-hover:text-slate-500 transition-colors" />, title: "Take Attendance", desc: "Quickly record attendance using digital tools." },
  { icon: <FolderOpen className="w-6 h-6 text-slate-700 group-hover:text-slate-500 transition-colors" />, title: "Manage Learning Resources", desc: "Upload and organize course materials for students." },
  { icon: <FileBarChart className="w-6 h-6 text-slate-700 group-hover:text-slate-500 transition-colors" />, title: "View Reports", desc: "Access attendance summaries and performance insights." }
];

const FAQS = [
  { q: "What is IntelliAttend?", a: "IntelliAttend is a digital platform that helps institutions manage attendance, classrooms, faculty, students, and academic resources." },
  { q: "Who can use IntelliAttend?", a: "Faculty members, students, department administrators, and educational institutions." },
  { q: "Does IntelliAttend support SmartBoards?", a: "Yes. Faculty can share classroom content directly with connected SmartBoards." },
  { q: "Is my data secure?", a: "Yes. IntelliAttend uses secure authentication and encrypted communication to protect institutional data." }
];

export function DocsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const filteredOverview = PLATFORM_OVERVIEW.filter(item => 
    item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
  );

  const filteredGuides = QUICK_GUIDES.filter(guide => 
    guide.title.toLowerCase().includes(query) || guide.desc.toLowerCase().includes(query)
  );

  const filteredFaqs = FAQS.filter(faq => 
    faq.q.toLowerCase().includes(query) || faq.a.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-4xl mx-auto space-y-20">
      
      {/* Getting Started */}
      <section>
        <h2 className="text-sm font-extrabold text-slate-500 mb-3 uppercase tracking-wider">Getting Started</h2>
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-slate-500">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Welcome to IntelliAttend</h3>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            IntelliAttend is an AI-powered campus management platform designed to simplify attendance, classroom management, SmartBoard integration, and academic workflows for educational institutions.
          </p>
          <Link href="/docs/welcome" className="inline-flex text-slate-500 font-bold items-center gap-2 hover:gap-3 transition-all hover:text-teal-600">
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Platform Overview */}
      <section>
        <h2 className="text-sm font-extrabold text-slate-400 mb-6 uppercase tracking-wider">Platform Overview</h2>
        {filteredOverview.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredOverview.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic">No overview items match your search.</p>
        )}
      </section>

      {/* Quick Guides */}
      <section>
        <h2 className="text-sm font-extrabold text-slate-400 mb-6 uppercase tracking-wider">Quick Guides</h2>
        {filteredGuides.length > 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
            {filteredGuides.map((guide, idx) => (
              <div key={idx} className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="mt-1">{guide.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-500 transition-colors">{guide.title}</h3>
                  <p className="text-slate-600 mt-1">{guide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic">No guides match your search.</p>
        )}
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-sm font-extrabold text-slate-400 mb-6 uppercase tracking-wider">Frequently Asked Questions</h2>
        {filteredFaqs.length > 0 ? (
          <div className="space-y-6">
            {filteredFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic">No FAQs match your search.</p>
        )}
      </section>

      {/* CTA */}
      <section className="bg-teal-600 w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden pt-24 pb-20 md:pt-32 md:pb-24 mt-20 text-center text-white">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] z-0">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
          <p className="text-teal-100 mb-8 max-w-md mx-auto text-lg">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link href="/support" className="inline-flex items-center gap-2 bg-white text-teal-600 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-slate-50 transition-all hover:gap-3">
            Visit the Help Center <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
