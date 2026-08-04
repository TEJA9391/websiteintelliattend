import { Clock, ArrowRight } from 'lucide-react';

const ARTICLES = [
  { category: "AI in Education", title: "5 Ways AI Is Revolutionizing Higher Education", desc: "Explore how AI enhances learning experiences, automates repetitive tasks, and empowers educators with data-driven insights.", read: "5 min" },
  { category: "Smart Classrooms", title: "Building the Classroom of the Future with SmartBoard Technology", desc: "Learn how connected SmartBoards improve collaboration, increase engagement, and simplify classroom management.", read: "4 min" },
  { category: "Attendance", title: "Why Digital Attendance Is Replacing Traditional Registers", desc: "See how automated digital attendance systems improve accuracy, reduce administrative work, and provide real-time reporting.", read: "7 min" },
  { category: "Faculty", title: "Helping Faculty Spend More Time Teaching", desc: "Discover how digital workflows reduce paperwork and enable educators to focus on delivering better learning experiences.", read: "6 min" },
  { category: "Students", title: "How Students Benefit from Connected Learning Platforms", desc: "Understand how instant access to schedules, assignments, attendance, and notifications improves academic success.", read: "5 min" },
  { category: "Campus Technology", title: "The Rise of Smart Campuses", desc: "Explore how cloud platforms, IoT, AI, and digital infrastructure are shaping the next generation of educational institutions.", read: "8 min" }
];

export function LatestArticles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ARTICLES.map((article, i) => (
        <div key={i} className="bg-white rounded-[1.5rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col h-full relative overflow-hidden">
          
          
          
          <div className="text-[11px] font-black tracking-widest uppercase text-slate-500 mb-3 z-10">{article.category}</div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-slate-500 transition-colors leading-tight z-10">
            {article.title}
          </h3>
          <p className="text-sm font-medium text-slate-500 mb-8 flex-1 z-10 leading-relaxed">
            {article.desc}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 z-10">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <Clock className="w-4 h-4" /> {article.read} read
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          
          {/* Subtle gradient hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}
