"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Bus, ClipboardCheck, ArrowRight, UserPlus, HeartPulse } from "lucide-react";
import Link from "next/link";

export default function SolutionsOverview() {
  const k12Features = [
    {
      icon: ShieldCheck,
      title: "Enhanced Campus Safety",
      desc: "Real-time automated alerts for absent or tardy students, ensuring every child is accounted for from the moment they step on campus.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: Users,
      title: "Parent & Guardian Portal",
      desc: "Give parents peace of mind with a dedicated mobile app to track attendance, report sick days, and receive instant school notifications.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: ClipboardCheck,
      title: "Homeroom Simplified",
      desc: "Teachers can complete morning attendance in under 5 seconds with bulk-actions, facial recognition, or single-tap submissions.",
      color: "text-violet-500",
      bg: "bg-violet-500/10"
    },
    {
      icon: Bus,
      title: "Bus & Transport Tracking",
      desc: "RFID or Bluetooth beacon integration to log exactly when and where students board and exit school transportation.",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      icon: HeartPulse,
      title: "Clinic & Early Dismissal",
      desc: "Seamlessly integrate nurse visits, early sign-outs, and parent pick-up authorizations directly into the daily attendance record.",
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    },
    {
      icon: UserPlus,
      title: "Substitute Teacher Access",
      desc: "Secure, temporary access links for substitute teachers to easily mark attendance without needing full administrative credentials.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Header */}
      <section className="pt-40 pb-20 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 mb-6 border border-primary/20 shadow-sm">
              Solutions Overview
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] mb-6">
              Tailored for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">K-12 Schools</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-[#64748B]">
              Discover how IntelliAttend scales and adapts to the unique operational needs, safety requirements, and parental expectations of K-12 education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* K-12 Specific Features Grid */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Built for the Modern School Day</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From the morning bus ride to the final bell, our platform eliminates administrative friction so teachers can focus on teaching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {k12Features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-primary/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">Ready to upgrade your school?</h3>
              <p className="text-slate-600 text-lg">Schedule a specialized K-12 demo with our education team.</p>
            </div>
            <Link 
              href="/demo" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:shadow-primary/30 whitespace-nowrap shrink-0"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
