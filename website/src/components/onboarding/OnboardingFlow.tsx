"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, BookOpen, GraduationCap, Briefcase, CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const INST_TYPES = [
  { id: "uni", title: "University", icon: <Building className="w-8 h-8" /> },
  { id: "col", title: "College", icon: <GraduationCap className="w-8 h-8" /> },
  { id: "k12", title: "K-12 School", icon: <BookOpen className="w-8 h-8" /> },
  { id: "trn", title: "Training Institute", icon: <Briefcase className="w-8 h-8" /> },
];

const PLATFORM_NEEDS = [
  "Attendance Management",
  "SmartBoard Integration",
  "Faculty Portal",
  "Student Portal",
  "Campus Analytics",
  "Notifications"
];

export function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [instType, setInstType] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  
  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const toggleNeed = (need: string) => {
    setNeeds(prev => prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col min-h-[600px]">
      
      {/* Header / Progress bar */}
      <div className="bg-slate-50 border-b border-slate-100 p-6 md:p-8 flex justify-between items-center">
        {step > 1 && step < 5 ? (
          <button onClick={handleBack} className="text-slate-500 hover:text-slate-900 flex items-center gap-2 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        ) : (
          <div className="text-slate-500 font-medium">Get Started</div>
        )}
        
        {step < 5 && (
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className={`w-10 h-1.5 rounded-full transition-colors ${s <= step ? 'bg-blue-600' : 'bg-slate-200'}`} />
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 p-6 md:p-12 relative">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Institution Type */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Choose Your Institution Type</h2>
              <p className="text-slate-600 mb-10">Select the option that best describes your organization.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-auto">
                {INST_TYPES.map(type => (
                  <div 
                    key={type.id} 
                    onClick={() => setInstType(type.id)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center text-center gap-4 ${instType === type.id ? 'border-blue-600 bg-blue-50/50 text-slate-500' : 'border-slate-200 hover:border-blue-200 hover:bg-slate-50 text-slate-700'}`}
                  >
                    <div className={instType === type.id ? 'text-slate-500' : 'text-slate-400'}>{type.icon}</div>
                    <span className="font-bold">{type.title}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex justify-end">
                <button disabled={!instType} onClick={handleNext} className="bg-blue-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2 hover:bg-blue-700 shadow-md">
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Org Details */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Organization Details</h2>
              <p className="text-slate-600 mb-8">Tell us a bit about your institution.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-auto">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Institution Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="e.g. Stanford University" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Contact Person</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Work Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="jane@stanford.edu" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Number of Students</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors">
                    <option>Under 1,000</option>
                    <option>1,000 - 5,000</option>
                    <option>5,000 - 20,000</option>
                    <option>20,000+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Number of Faculty</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors">
                    <option>Under 100</option>
                    <option>100 - 500</option>
                    <option>500 - 2,000</option>
                    <option>2,000+</option>
                  </select>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button onClick={handleNext} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2 hover:bg-blue-700 shadow-md">
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Platform Needs */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Platform Needs</h2>
              <p className="text-slate-600 mb-8">What IntelliAttend features are you most interested in?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-auto">
                {PLATFORM_NEEDS.map(need => (
                  <div 
                    key={need}
                    onClick={() => toggleNeed(need)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 ${needs.includes(need) ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200 hover:border-blue-200'}`}
                  >
                    <div className={`w-6 h-6 rounded border flex items-center justify-center ${needs.includes(need) ? 'bg-blue-600 border-blue-600' : 'border-slate-300'}`}>
                      {needs.includes(need) && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className={`font-bold ${needs.includes(need) ? 'text-slate-500' : 'text-slate-700'}`}>{need}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-end">
                <button onClick={handleNext} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2 hover:bg-blue-700 shadow-md">
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Schedule Demo */}
          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Schedule a Demo</h2>
              <p className="text-slate-600 mb-8">Let&apos;s find a time to show you how IntelliAttend works.</p>
              
              <div className="space-y-6 mb-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Preferred Date</label>
                    <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Preferred Time</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors">
                      <option>Morning (9AM - 12PM)</option>
                      <option>Afternoon (12PM - 4PM)</option>
                      <option>Evening (4PM - 6PM)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Additional Requirements</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors resize-none" placeholder="Is there anything specific you'd like to see on the demo?"></textarea>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-end">
                <button onClick={handleNext} className="bg-slate-100 text-slate-700 font-bold py-3 px-8 rounded-xl transition-colors hover:bg-slate-200 text-center">
                  Contact Sales Instead
                </button>
                <button onClick={handleNext} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-colors hover:bg-blue-700 shadow-md text-center">
                  Request Demo
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Success */}
          {step === 5 && (
            <motion.div key="step5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Request Received!</h2>
              <p className="text-slate-600 mb-10 max-w-sm">
                Thank you for your interest in IntelliAttend. An enterprise account manager will be in touch with you shortly to confirm your demo schedule.
              </p>
              
              <Link href="/" className="bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors hover:bg-slate-800 shadow-md">
                Return to Home
              </Link>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
