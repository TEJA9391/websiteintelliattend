"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Users2, ShieldCheck, Database, 
  Settings, Network, BookOpen, Star, Sparkles, Check, CheckCircle2, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const INCLUDED_SERVICES = [
  { name: "Dedicated Account Manager", icon: Users2 },
  { name: "Campus Onboarding", icon: Building2 },
  { name: "Faculty Training", icon: BookOpen },
  { name: "Student Rollout", icon: Users2 },
  { name: "Data Migration", icon: Database },
  { name: "SmartBoard Deployment", icon: Settings },
  { name: "API Integration", icon: Network },
  { name: "Security Consultation", icon: ShieldCheck },
  { name: "Priority Support", icon: Star },
  { name: "Quarterly Reviews", icon: Sparkles },
  { name: "Custom Features", icon: Settings }
];

const ENTERPRISE_BENEFITS = [
  { title: "99.9% SLA", desc: "Guaranteed uptime for mission-critical campus operations." },
  { title: "24/7 Priority Support", desc: "Skip the queue with a direct hotline to our tier-3 engineering team." },
  { title: "Dedicated Success Manager", desc: "A named expert who understands your unique institution." },
  { title: "Architecture Consultation", desc: "We help you design the perfect local and cloud hybrid setup." },
  { title: "Custom Integrations", desc: "We'll build custom bridges to your existing legacy ERP systems." },
  { title: "Training Sessions", desc: "Unlimited virtual and on-site training for your entire faculty." }
];

export default function EnterpriseSupportPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 bg-center"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20 backdrop-blur-md"
              >
                <Building2 className="w-4 h-4 text-emerald-400" />
                IntelliAttend Enterprise
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
              >
                Dedicated Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Success Team</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/70 leading-relaxed mb-8"
              >
                Personalized onboarding, technical consulting, deployment assistance, and long-term success strategies tailored specifically for large institutions.
              </motion.p>
            </div>

            {/* Enterprise Form */}
            <motion.div 
              id="enterprise-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-2xl relative scroll-mt-24"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-5"
                  >
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Request Enterprise Support</h3>
                    <p className="text-slate-500 text-sm mb-6">Talk to our enterprise experts to build your custom campus rollout plan.</p>
                    
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-[#0F172A]">Institution Name</label>
                      <input id="institution-name" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-[#0F172A]">Total Students</label>
                        <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 appearance-none">
                          <option value="">Select...</option>
                          <option>1,000 - 5,000</option>
                          <option>5,000 - 15,000</option>
                          <option>15,000 - 50,000</option>
                          <option>50,000+</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-[#0F172A]">Total Faculty</label>
                        <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 appearance-none">
                          <option value="">Select...</option>
                          <option>100 - 500</option>
                          <option>500 - 1,000</option>
                          <option>1,000 - 5,000</option>
                          <option>5,000+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-[#0F172A]">Country</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-[#0F172A]">Message / Goals</label>
                      <textarea required rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-slate-900"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#0F172A] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-[#1E293B] hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Request Consultation"
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center flex flex-col items-center justify-center min-h-[500px]"
                  >
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3">Request Received</h2>
                    <p className="text-slate-600 mb-6">
                      Thank you! An Enterprise Success Manager will contact you within 24 hours to schedule your architecture consultation.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              Enterprise Benefits
            </h2>
            <p className="text-lg text-slate-500">
              When you partner with IntelliAttend at the Enterprise tier, you unlock a suite of white-glove services designed for massive scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ENTERPRISE_BENEFITS.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                  <Check className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
                What&apos;s included in Enterprise?
              </h2>
              <p className="text-lg text-slate-500">
                A comprehensive suite of services ensuring your campus rollout is seamless from day one through year ten.
              </p>
            </div>
            <button 
              onClick={() => {
                const formElement = document.getElementById('enterprise-form');
                const inputElement = document.getElementById('institution-name');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => inputElement?.focus(), 800);
                }
              }}
              className="text-primary font-bold hover:gap-2 gap-1 flex items-center transition-all whitespace-nowrap cursor-pointer"
            >
              Get started <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {INCLUDED_SERVICES.map((service, i) => (
              <div 
                key={i}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <service.icon className="w-5 h-5 text-slate-500" />
                </div>
                <span className="font-semibold text-slate-700 text-sm">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
