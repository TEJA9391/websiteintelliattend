"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </h1>
          <p className="text-lg text-[#64748B]">
            Have questions about IntelliAttend? Our team is here to help you transform your campus.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#0F172A]">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Our Office</h4>
                  <p className="text-[#64748B]">The Malla Reddy group of institutions in Maisammaguda is located at Maisammaguda, Dhulapally (Post via Kompally), Gundlapochampally Village, Medchal-Malkajgiri District, Hyderabad, Telangana, 500100.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Phone</h4>
                  <p className="text-[#64748B]">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Email</h4>
                  <p className="text-[#64748B]">hello@intelliattend.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 text-[#0F172A]">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0F172A]">First Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-[#F8FAFC] focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0F172A]">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-[#F8FAFC] focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0F172A]">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-[#F8FAFC] focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0F172A]">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-[#F8FAFC] focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
              </div>
              <Button type="button" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
