"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, ClipboardCheck, MapPin, BarChart, Smartphone } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6">
            Powerful Features for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Smart Campus</span>
          </h1>
          <p className="text-lg text-[#64748B]">
            Discover all the tools IntelliAttend provides to streamline your academic operations, from smart attendance to advanced analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {[
            {
              icon: ClipboardCheck,
              title: "Digital Attendance",
              desc: "Initiate secure, time-sensitive attendance sessions. Prevent proxy attendance with robust identity verification."
            },
            {
              icon: MapPin,
              title: "GPS Verification",
              desc: "Ensure students are physically in the classroom by enforcing a geo-fence around the classroom coordinates."
            },
            {
              icon: Smartphone,
              title: "Face Authentication Ready",
              desc: "Leverage on-device biometric hardware for high-security classrooms and exams."
            },
            {
              icon: BarChart,
              title: "Real-time Analytics",
              desc: "Monitor attendance trends, identify at-risk students, and generate comprehensive reports instantly."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 flex gap-6 items-start"
            >
              <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                <feature.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
