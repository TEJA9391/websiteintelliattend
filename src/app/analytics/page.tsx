"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { BarChart3, TrendingUp, PieChart } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6">
            Actionable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Insights</span>
          </h1>
          <p className="text-lg text-[#64748B]">
            Make data-driven decisions with real-time analytics and comprehensive reporting tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <BarChart3 className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2 text-[#0F172A]">Department Trends</h3>
            <p className="text-[#64748B] text-sm">Compare attendance and engagement across different departments.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <TrendingUp className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2 text-[#0F172A]">Student Progression</h3>
            <p className="text-[#64748B] text-sm">Track individual student performance and identify at-risk individuals early.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <PieChart className="h-10 w-10 text-accent mb-4" />
            <h3 className="font-bold text-lg mb-2 text-[#0F172A]">Resource Utilization</h3>
            <p className="text-[#64748B] text-sm">Analyze how classroom resources and SmartBoards are being utilized.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
