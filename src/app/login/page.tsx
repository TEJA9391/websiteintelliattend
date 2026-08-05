"use client";

import { GraduationCap, Users, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ROLES = [
  {
    id: "faculty",
    title: "Faculty Portal",
    desc: "Manage classes, attendance, and SmartBoard.",
    icon: <GraduationCap className="w-5 h-5 text-teal-600" />,
    href: "/login/faculty", 
    bg: "bg-teal-50",
    hoverBorder: "hover:border-teal-500",
    hoverBg: "hover:bg-teal-50/50"
  },
  {
    id: "student",
    title: "Student Portal",
    desc: "View schedules, attendance, and resources.",
    icon: <Users className="w-5 h-5 text-emerald-600" />,
    href: "/login/student",
    bg: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-500",
    hoverBg: "hover:bg-emerald-50/50"
  },
  {
    id: "admin",
    title: "Administrator Portal",
    desc: "Manage campus operations and analytics.",
    icon: <Shield className="w-5 h-5 text-violet-600" />,
    href: "/login/admin",
    bg: "bg-violet-50",
    hoverBorder: "hover:border-violet-500",
    hoverBg: "hover:bg-violet-50/50"
  }
];

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 relative overflow-hidden selection:bg-teal-100 selection:text-teal-900">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-teal-100/50 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Auth Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
          
          <div className="p-8 text-center border-b border-slate-100">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Welcome back
            </h1>
            <p className="text-sm text-slate-500">
              Select your portal to securely sign in.
            </p>
          </div>

          <div className="p-6 space-y-4 bg-slate-50/50">
            {ROLES.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (idx * 0.05) }}
              >
                <Link 
                  href={role.href}
                  className={`flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-white cursor-pointer transition-all duration-200 group shadow-sm hover:shadow-md ${role.hoverBorder}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${role.bg}`}>
                    {role.icon}
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{role.title}</h3>
                    <p className="text-[13px] text-slate-500 mt-0.5 leading-snug pr-4">{role.desc}</p>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-teal-200 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            New to IntelliAttend?{' '}
            <Link href="/get-started" className="text-teal-600 font-semibold hover:text-teal-700 hover:underline transition-colors">
              Request access
            </Link>
          </p>
        </div>
      </motion.div>

    </div>
  );
}
