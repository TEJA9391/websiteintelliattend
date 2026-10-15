"use client";

import { useState, useEffect, useRef } from "react";

import ReactMarkdown from "react-markdown";
import { X, Send, Bot, User, Mic, MicOff, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generateResponse, BotContext } from "@/lib/bot-logic";
import { useMounted } from "@/hooks/useMounted";

const INITIAL_QUICK_REPLIES = [
  "What is IntelliAttend?",
  "SmartBoard",
  "Pricing",
  "Book a Demo"
];

export function ChatWidget() {
  const [isTyping, setIsTyping] = useState(false);
  const mounted = useMounted();
  const [isOpen, setIsOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<Array<{id: string, role: string, content: string}>>([
    { id: "system-1", role: "assistant", content: "Hi! I'm IntelliAttend's AI Assistant. How can I help you today?" }
  ]);
  const [quickReplies, setQuickReplies] = useState<string[]>(INITIAL_QUICK_REPLIES);
  const [botContext, setBotContext] = useState<BotContext>({ lastIntent: null, lastEntity: null, history: [] });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  
  const append = async (msg: { role: string, content: string }) => {
    setMessages(prev => [...prev, { ...msg, id: `msg-${prev.length}-${msg.role}` }]);
    setIsLoading(true);
    
    // Simulate network delay for natural feel
    setTimeout(async () => {
      try {
        const response = await generateResponse(msg.content, botContext);
        setMessages(prev => [
          ...prev, 
          { id: (Date.now() + 1).toString(), role: "assistant", content: response.text }
        ]);
        setBotContext(response.nextContext);
        setQuickReplies(response.quickReplies);
      } catch (error) {
        setMessages(prev => [
          ...prev, 
          { id: (Date.now() + 1).toString(), role: "assistant", content: "I encountered an error. Please try again." }
        ]);
      } finally {
        setIsLoading(false);
      }
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    append({ role: 'user', content: input });
    setInput("");
  };

  // Listen for the custom event to open chat globally
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  // Auto-scroll to bottom of messages and auto-focus
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isLoading, isOpen]);

  const handleClearChat = () => {
    setMessages([
      { id: Date.now().toString(), role: "assistant", content: "Chat cleared! What's on your mind?" }
    ]);
    setBotContext({ lastIntent: null, lastEntity: null, history: [] });
    setQuickReplies(INITIAL_QUICK_REPLIES);
  };

  const handleQuickReply = (reply: string) => {
    append({ role: 'user', content: reply });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.15, type: "spring", bounce: 0.3 }}
        className="fixed z-50 bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col overscroll-contain bottom-0 right-0 left-0 w-full h-[100dvh] rounded-none sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-sm sm:h-[550px] sm:rounded-3xl sm:border sm:border-white/40"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-4 flex items-center justify-between text-white border-b border-slate-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/10 shadow-inner">
              <Bot className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight tracking-tight">IntelliAttend AI</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 relative z-10">
            <button 
              onClick={handleClearChat}
              title="Clear Chat"
              className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div ref={scrollContainerRef} data-lenis-prevent="true" className="flex-1 overflow-y-auto overscroll-none p-5 bg-slate-50/50 flex flex-col gap-4 relative [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
          <div className="text-center text-[10px] font-bold tracking-wider text-slate-400 uppercase mt-2 mb-4">
            Today at {mounted ? new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : "..."}
          </div>
          {messages.map((msg) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={msg.id} 
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm border ${msg.role === "user" ? "bg-white border-slate-200 text-slate-600" : "bg-gradient-to-br from-teal-400 to-emerald-500 border-transparent text-white"}`}>
                  {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className={`px-5 py-3.5 rounded-2xl text-[15px] shadow-sm ${msg.role === "user" ? "bg-slate-900 text-white rounded-tr-sm" : "bg-white text-slate-800 border border-slate-200/60 rounded-tl-sm"}`}>
                    <div className="prose prose-sm prose-p:leading-relaxed prose-a:text-teal-600 prose-a:font-semibold hover:prose-a:text-teal-700 prose-strong:text-slate-900 prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-ul:my-2 prose-li:my-0.5 max-w-none">
                      <ReactMarkdown>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-teal-400 to-emerald-500 text-white shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="px-5 py-4 rounded-2xl bg-white border border-slate-200/60 rounded-tl-sm shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick Replies */}
        {!isLoading && messages[messages.length - 1]?.role !== "user" && quickReplies.length > 0 && (
          <div data-lenis-prevent="true" className="px-5 pb-3 pt-2 bg-white flex gap-2 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-t border-slate-100">
            {quickReplies.map((reply, i) => (
              <button
                key={i}
                onClick={() => handleQuickReply(reply)}
                className="text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-all shrink-0 shadow-sm"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 flex items-center gap-2">
          <input 
            ref={inputRef}
            type="text" 
            value={input || ""}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-5 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-inner"
          />
          <button 
            type="submit"
            disabled={!(input || "").trim() || isLoading}
            className="bg-slate-900 text-white p-3 rounded-full hover:bg-teal-600 disabled:opacity-50 disabled:hover:bg-slate-900 transition-colors shrink-0 shadow-md group"
          >
            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}
