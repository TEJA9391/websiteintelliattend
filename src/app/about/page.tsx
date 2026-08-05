import type { Metadata } from "next";
import { Building, Users, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | IntelliAttend",
  description: "Learn about IntelliAttend's mission to transform campus management with AI-powered attendance and smart learning solutions.",
};

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We're on a mission to make campus management effortless for institutions worldwide." },
  { icon: Users, title: "Student-First", desc: "Every feature we build starts with one question: how does this help students succeed?" },
  { icon: Heart, title: "Passionate Team", desc: "Our team of educators and engineers are obsessed with building the best campus tools." },
  { icon: Building, title: "Trusted by Many", desc: "Hundreds of institutions rely on IntelliAttend to manage their daily operations." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">IntelliAttend</span>
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            We&apos;re building the intelligent foundation for modern educational institutions. Our AI-powered platform helps universities, colleges, and schools manage attendance, schedules, and campus operations.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">Our Story</h2>
            <p className="text-lg text-[#64748B] mb-6">
              IntelliAttend was born from a simple observation: campus management shouldn&apos;t be complicated. Faculty spending hours on attendance, students missing important updates, administrators struggling with data — we knew there was a better way.
            </p>
            <p className="text-lg text-[#64748B]">
              Today, we serve hundreds of institutions worldwide, helping them automate attendance with AI, streamline communication, and focus on what matters most — education.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{value.title}</h3>
                <p className="text-[#64748B]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
