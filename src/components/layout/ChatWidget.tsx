"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";
import { X, Send, Bot, User, Mic, MicOff, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const QUICK_REPLIES = [
  "How much does it cost?",
  "Tell me about SmartBoards",
  "How does attendance work?",
  "Book a Demo"
];

// Type declaration for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Vercel AI SDK Hook
  const { messages, input, handleInputChange, handleSubmit, setMessages, isLoading, setInput } = useChat({
    api: '/api/chat',
    initialMessages: [
      { id: "system-1", role: "assistant", content: "Hi! I'm IntelliAttend's Enterprise AI Assistant. How can I help you today?" }
    ]
  });

  // Listen for the custom event to open chat globally
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  // Auto-scroll to bottom of messages and auto-focus
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isLoading, isOpen]);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event: any) => {
          let interimTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              setInput(event.results[i][0].transcript);
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }
        };

        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => setIsListening(false);
        recognitionRef.current = recognition;
      }
    }
  }, [setInput]);

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleClearChat = () => {
    setMessages([
      { id: Date.now().toString(), role: "assistant", content: "Chat cleared! What's on your mind?" }
    ]);
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
    // Give state a moment to update before submitting
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} } as React.FormEvent<HTMLFormElement>;
      handleSubmit(fakeEvent);
    }, 50);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
        className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden flex flex-col h-[550px]"
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
              <span className="text-[11px] text-teal-300/80 font-medium flex items-center gap-1.5 uppercase tracking-wider mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span> Enterprise Mode
              </span>
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

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-slate-50/50 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {messages.map((msg) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={msg.id} 
              className={\`flex \${msg.role === "user" ? "justify-end" : "justify-start"}\`}
            >
              <div className={\`flex gap-3 max-w-[85%] \${msg.role === "user" ? "flex-row-reverse" : ""}\`}>
                <div className={\`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm border \${msg.role === "user" ? "bg-white border-slate-200 text-slate-600" : "bg-gradient-to-br from-teal-400 to-emerald-500 border-transparent text-white"}\`}>
                  {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className={\`px-5 py-3.5 rounded-2xl text-[15px] shadow-sm \${msg.role === "user" ? "bg-slate-900 text-white rounded-tr-sm" : "bg-white text-slate-800 border border-slate-200/60 rounded-tl-sm"}\`}>
                    <ReactMarkdown 
                      className="prose prose-sm prose-p:leading-relaxed prose-a:text-teal-600 prose-a:font-semibold hover:prose-a:text-teal-700 prose-strong:text-slate-900 prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-ul:my-2 prose-li:my-0.5 max-w-none"
                    >
                      {msg.content}
                    </ReactMarkdown>
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
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {!isLoading && messages[messages.length - 1]?.role !== "user" && (
          <div className="px-5 pb-3 pt-2 bg-white flex gap-2 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-t border-slate-100">
            {QUICK_REPLIES.map((reply, i) => (
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
          <button 
            type="button"
            onClick={toggleListen}
            className={\`p-2.5 rounded-full transition-all shrink-0 \${isListening ? 'bg-rose-100 text-rose-500 animate-pulse' : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'}\`}
          >
            {isListening ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          </button>
          
          <input 
            ref={inputRef}
            type="text" 
            value={input}
            onChange={handleInputChange}
            placeholder={isListening ? "Listening..." : "Ask me anything..."}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-5 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-inner"
          />
          <button 
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-slate-900 text-white p-3 rounded-full hover:bg-teal-600 disabled:opacity-50 disabled:hover:bg-slate-900 transition-colors shrink-0 shadow-md group"
          >
            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}
