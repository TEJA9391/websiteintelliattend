"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, EyeOff, Eye, ArrowRight, UserPlus } from "lucide-react";
import Image from "next/image";
import { AnimatedMap } from "@/components/auth/AnimatedMap";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push(`/portal/${role}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4 md:p-8">
      <Link href="/login" className="absolute top-8 left-8 inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors z-50 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-sm">
        <ArrowLeft className="w-4 h-4" /> Back to login
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-5xl h-[650px] overflow-hidden rounded-3xl flex bg-white shadow-2xl shadow-slate-200/50 border border-slate-100"
      >
        {/* Left side - Map & Logo Animation */}
        <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-slate-900 flex-col items-center justify-center p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-600/20"></div>
          
          <AnimatedMap />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="mb-8 relative"
            >
              <Image src="/images/logo.png" alt="IntelliAttend Logo" width={112} height={112} className="w-28 h-28 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-4xl font-bold mb-4 text-center text-white tracking-tight"
            >
              IntelliAttend
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg text-center text-slate-300 max-w-sm leading-relaxed"
            >
              Join the intelligent campus platform. Connect with your institution seamlessly.
            </motion.p>
          </div>
        </div>
        
        {/* Right side - Registration Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-white relative">
          
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 shadow-sm">
            <UserPlus className="w-5 h-5 text-indigo-600" />
          </div>

          <h1 className="text-2xl font-bold mb-1 text-slate-900 tracking-tight">Create an account</h1>
          <p className="text-sm text-slate-500 mb-5 font-medium">Get started with your campus portal</p>
          
          <button 
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-xl py-2 hover:bg-slate-50 transition-colors text-slate-700 text-sm font-bold shadow-sm mb-4"
            onClick={() => console.log("Google sign-in")}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fillOpacity=".54" />
              <path fill="#4285F4" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#34A853" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#FBBC05" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              <path fill="#EA4335" d="M1 1h22v22H1z" fillOpacity="0" />
            </svg>
            <span>Sign up with Google</span>
          </button>
          
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-slate-400 font-medium">or continue with email</span>
            </div>
          </div>
          
          <form onSubmit={handleRegister} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors placeholder:text-slate-400 text-sm font-medium"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">
                Institution Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@institution.edu"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors placeholder:text-slate-400 text-sm font-medium"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-bold text-slate-700 mb-1">
                Account Type
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors text-sm font-medium text-slate-700"
              >
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="admin">Administrator</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors placeholder:text-slate-400 text-sm font-medium"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 hover:text-slate-600 transition-colors"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="pt-2 relative"
            >
              <button
                type="submit"
                disabled={loading}
                className={`w-full relative overflow-hidden text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:-translate-y-0.5'}`}
              >
                <span className="flex items-center justify-center relative z-10">
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Create Account'}
                  {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                </span>
                {isHovered && !loading && (
                  <motion.span
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"
                    style={{ filter: "blur(8px)" }}
                  />
                )}
              </button>
            </motion.div>

            <div className="text-center mt-4 text-xs text-slate-500">
              Already have an account?{' '}
              <Link href="/login" className="font-bold text-indigo-600 hover:underline">
                Sign in
              </Link>
            </div>
            
          </form>
        </div>
      </motion.div>
    </div>
  );
}
