"use client";

import { useState } from 'react';
import { Download, Mail, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';

const TOPICS = [
  "Artificial Intelligence", "Digital Attendance", "SmartBoard Technology", 
  "Faculty Productivity", "Student Engagement", "Campus Analytics", 
  "Cloud Education", "EdTech Innovation"
];

const RESOURCES = [
  "Digital Campus Transformation Guide",
  "Smart Classroom Implementation Checklist",
  "University Attendance Best Practices",
  "AI in Education Whitepaper",
  "Faculty Productivity Handbook"
];

export function BlogSidebar() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');
  };

  return (
    <div className="space-y-8">
      {/* Popular Topics */}
      <div className="apple-card p-8">
        <h3 className="text-lg font-extrabold text-[#0F172A] mb-5 tracking-tight">Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((topic, i) => (
            <span key={i} className="px-3 py-1.5 bg-[#F8FAFC] border border-slate-100 rounded-lg text-[11px] font-bold text-[#64748B] hover:bg-primary hover:text-white hover:border-primary cursor-pointer transition-all uppercase tracking-wide">
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Free Resources */}
      <div className="bg-[#0F172A] rounded-[32px] p-8 text-white relative overflow-hidden transition-transform duration-150 ease-out hover:scale-[1.02] hover:shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
        <h3 className="text-lg font-extrabold mb-5 flex items-center gap-2 relative z-10">
          <Download className="w-5 h-5 text-primary" /> Free Downloads
        </h3>
        <div className="space-y-4 relative z-10">
          {RESOURCES.map((res, i) => (
            <div key={i} className="flex gap-3 group cursor-pointer items-start">
              <div className="mt-1 text-primary group-hover:text-primary transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors leading-snug">{res}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[32px] p-8 text-white relative overflow-hidden transition-transform duration-150 ease-out hover:scale-[1.02] hover:shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <Mail className="w-8 h-8 mb-5 text-white/80 relative z-10" />
        <h3 className="text-xl font-extrabold mb-3 tracking-tight relative z-10">Stay Ahead of Education Innovation</h3>
        <p className="text-sm text-white/80 mb-6 font-medium leading-relaxed relative z-10">
          Get the latest insights on AI, smart classrooms, campus management, and educational technology delivered directly to your inbox.
        </p>
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-4 relative z-10 text-center animate-in fade-in zoom-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-white mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">You&apos;re In!</h4>
            <p className="text-sm text-white/80">Thank you for subscribing.</p>
          </div>
        ) : (
          <form className="flex flex-col gap-3 relative z-10" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..." 
              required
              disabled={isSubmitting}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all disabled:opacity-50"
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full bg-white text-primary font-extrabold py-3 rounded-xl hover:bg-white/90 transition-colors shadow-lg mt-1 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Subscribing...</>
              ) : (
                "Subscribe Now"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
