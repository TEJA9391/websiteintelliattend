"use client";

import { MessageCircle, Mail, Building2, Users2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CONTACTS = [
  {
    title: "Live Chat",
    desc: "Average response: < 2 minutes",
    icon: <MessageCircle className="w-8 h-8 text-slate-500" />,
    action: "Chat with Support →",
    isWidgetTrigger: true,
    badge: "Fastest"
  },
  {
    title: "Email Support",
    desc: "support@intelliattend.com",
    icon: <Mail className="w-8 h-8 text-emerald-500" />,
    action: "Submit a Ticket →",
    href: "/support/email",
    badge: "24/7"
  },
  {
    title: "Enterprise Support",
    desc: "Dedicated onboarding and technical assistance.",
    icon: <Building2 className="w-8 h-8 text-teal-500" />,
    action: "Talk to Enterprise Team →",
    href: "/enterprise-support",
    badge: "Priority"
  },
  {
    title: "Community Forum",
    desc: "Ask questions and share best practices.",
    icon: <Users2 className="w-8 h-8 text-rose-500" />,
    action: "Explore Community →",
    href: "/community"
  }
];

export function HelpContact() {
  const handleOpenChat = () => {
    window.dispatchEvent(new Event("open-chat"));
  };

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Contact Support</h2>
          <p className="text-lg text-[#64748B]">Still need help? Our support specialists are ready to assist.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CONTACTS.map((contact, idx) => (
            <div key={idx} className="apple-card p-6 flex flex-col items-center text-center relative">
              {contact.badge && (
                <div className="absolute -top-3 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                  {contact.badge}
                </div>
              )}
              <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-center justify-center mb-4">
                {contact.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{contact.title}</h3>
              <p className="text-sm text-[#64748B] mb-6 flex-1">{contact.desc}</p>
              {contact.isWidgetTrigger ? (
                <button 
                  onClick={handleOpenChat}
                  className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {contact.action}
                </button>
              ) : (
                <Link 
                  href={contact.href || "#"}
                  className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {contact.action}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#0F172A] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to transform your campus?</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto relative z-10">
            Join hundreds of educational institutions already using IntelliAttend to manage their academic operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
             <Link href="/contact" className="bg-white text-[#0F172A] font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-white/90 transition-colors cursor-pointer text-center">
               Contact Sales
             </Link>
             <button 
               onClick={handleOpenChat}
               className="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-md hover:bg-primary/90 transition-colors cursor-pointer"
             >
               Chat with Support →
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
