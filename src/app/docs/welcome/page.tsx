"use client";

import { useState } from "react";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function WelcomeDocPage() {
  const [feedbackState, setFeedbackState] = useState<null | 'submitted'>(null);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link 
          href="/docs" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8 group"
        >
          <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-slate-300 transition-colors shadow-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          Back to Documentation
        </Link>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 shadow-inner">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm font-black tracking-widest uppercase text-teal-600 mb-1">Getting Started</div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Welcome to IntelliAttend</h1>
            </div>
          </div>

          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-teal-600">
            <p className="lead text-xl text-slate-600">
              Welcome to the future of educational administration. IntelliAttend is a comprehensive, AI-powered platform designed to seamlessly integrate attendance tracking, classroom management, and academic reporting into one frictionless experience.
            </p>

            <div className="my-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 mt-0">What you can achieve</h3>
              <ul className="space-y-3 list-none pl-0">
                {["Automate daily attendance taking with a 99.9% accuracy rate", "Share course materials directly to connected SmartBoards", "Give students real-time access to their academic standing", "Provide administrators with predictive analytics to support at-risk students"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>How It Works</h2>
            <p>
              IntelliAttend connects the three main pillars of an educational institution: <strong>Faculty</strong>, <strong>Students</strong>, and <strong>Administration</strong>. By providing dedicated apps and dashboards for each group, the platform ensures that data flows instantly and securely.
            </p>
            <p>
              When a faculty member marks a student absent via the mobile app or SmartBoard interface, the student&apos;s app is instantly updated, and the administrative dashboard registers the change for compliance reporting. There is no manual syncing required.
            </p>

            <h2>Next Steps</h2>
            <p>
              To get the most out of IntelliAttend, we recommend exploring the following guides based on your role:
            </p>
            <ul>
              <li><strong>For Faculty:</strong> Learn how to connect your app to the classroom SmartBoard.</li>
              <li><strong>For Students:</strong> Find out how to customize your notification preferences.</li>
              <li><strong>For Admins:</strong> Explore the comprehensive reporting dashboard.</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
              <span>Last updated: August 2026</span>
              
              {feedbackState === 'submitted' ? (
                <div className="flex items-center gap-2 text-slate-700 animate-in fade-in zoom-in duration-150">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="font-medium">Thanks for your feedback.</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="font-medium text-slate-700">Helpful?</span>
                  <button 
                    onClick={() => setFeedbackState('submitted')}
                    className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 cursor-pointer font-medium"
                  >
                    Yes
                  </button>
                  <button 
                    onClick={() => setFeedbackState('submitted')}
                    className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 cursor-pointer font-medium"
                  >
                    No
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
