"use client";

import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export const ARTICLES = [
  { slug: "how-ai-is-transforming-modern-campus-management", category: "AI in Education", title: "How AI Is Transforming Modern Campus Management", desc: "Discover how artificial intelligence is helping universities automate attendance, improve classroom engagement, and streamline academic operations.", read: "6 min" },
  { slug: "5-ways-ai-is-revolutionizing-higher-education", category: "AI in Education", title: "5 Ways AI Is Revolutionizing Higher Education", desc: "Explore how AI enhances learning experiences, automates repetitive tasks, and empowers educators with data-driven insights.", read: "5 min" },
  { slug: "building-the-classroom-of-the-future", category: "Smart Classrooms", title: "Building the Classroom of the Future with SmartBoard Technology", desc: "Learn how connected SmartBoards improve collaboration, increase engagement, and simplify classroom management.", read: "4 min" },
  { slug: "why-digital-attendance-is-replacing-traditional-registers", category: "Attendance", title: "Why Digital Attendance Is Replacing Traditional Registers", desc: "See how automated digital attendance systems improve accuracy, reduce administrative work, and provide real-time reporting.", read: "7 min" },
  { slug: "helping-faculty-spend-more-time-teaching", category: "Faculty", title: "Helping Faculty Spend More Time Teaching", desc: "Discover how digital workflows reduce paperwork and enable educators to focus on delivering better learning experiences.", read: "6 min" },
  { slug: "how-students-benefit-from-connected-learning-platforms", category: "Students", title: "How Students Benefit from Connected Learning Platforms", desc: "Understand how instant access to schedules, assignments, attendance, and notifications improves academic success.", read: "5 min" },
  { slug: "the-rise-of-smart-campuses", category: "Campus Technology", title: "The Rise of Smart Campuses", desc: "Explore how cloud platforms, IoT, AI, and digital infrastructure are shaping the next generation of educational institutions.", read: "8 min" }
];

export function LatestArticles() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const query = searchParams.get('q')?.toLowerCase();

  const filteredArticles = ARTICLES.filter((article) => {
    let matchesCategory = true;
    let matchesQuery = true;

    if (category && category !== 'All Posts') {
      matchesCategory = article.category === category;
    }

    if (query) {
      matchesQuery = article.title.toLowerCase().includes(query) || article.desc.toLowerCase().includes(query);
    }

    return matchesCategory && matchesQuery;
  });

  if (filteredArticles.length === 0) {
    return (
      <div className="py-12 text-center border border-slate-200 rounded-3xl bg-slate-50 border-dashed">
        <p className="text-slate-500 font-medium">No articles found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredArticles.map((article, i) => (
        <Link href={`/blog/${article.slug}`} key={i} className="apple-card p-8 group cursor-pointer flex flex-col h-full relative block">
          
          <div className="text-[11px] font-black tracking-widest uppercase text-[#64748B] mb-3 z-10">{article.category}</div>
          <h3 className="text-xl font-extrabold text-[#0F172A] mb-3 group-hover:text-primary transition-colors leading-tight z-10">
            {article.title}
          </h3>
          <p className="text-sm font-medium text-[#64748B] mb-8 flex-1 z-10 leading-relaxed">
            {article.desc}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 z-10">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#64748B]">
              <Clock className="w-4 h-4" /> {article.read} read
            </div>
            <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all uppercase tracking-wide text-[11px] lg:text-xs">
              Read Full Article <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          

        </Link>
      ))}
    </div>
  );
}
