"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

// Simulated AI Logic
const getBotResponse = (input: string): string => {
  const query = input.toLowerCase();
  
  if (query.includes("pricing") || query.includes("cost") || query.includes("price")) {
    return "Our pricing is tailored to the size of your institution. We offer Starter, Professional, and Enterprise tiers. Please visit our Pricing page for more details, or I can connect you with sales!";
  }
  
  if (query.includes("smartboard") || query.includes("board")) {
    return "IntelliAttend integrates seamlessly with modern SmartBoards! Faculty can share presentations, annotate in real-time, and sync everything to the cloud automatically.";
  }
  
  if (query.includes("attendance") || query.includes("absent")) {
    return "Our digital attendance system uses smart AI algorithms and optionally RFID/Bluetooth to record attendance in seconds with 99.9% accuracy. No more paper registers!";
  }

  if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
    return "Hello there! I'm the IntelliAttend AI assistant. How can I help you transform your campus today?";
  }

  return "That's a great question! IntelliAttend is a comprehensive platform designed to streamline all aspects of campus management. To give you the best answer, I'd recommend checking our Support Help Center or speaking with one of our experts.";
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", text: "Hi! I'm IntelliAttend's advanced AI assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Listen for the custom event to open chat globally
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate network delay and AI processing
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: getBotResponse(userMessage.text),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-5">
      {/* Header */}
      <div className="bg-primary px-4 py-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 p-1.5 rounded-lg">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm leading-tight">IntelliAttend AI</h3>
            <span className="text-xs text-white/70 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Online
            </span>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg) => (
          <div key={msg.id} className={\`flex \${msg.role === "user" ? "justify-end" : "justify-start"}\`}>
            <div className={\`flex gap-2 max-w-[85%] \${msg.role === "user" ? "flex-row-reverse" : ""}\`}>
              <div className={\`w-8 h-8 rounded-full flex items-center justify-center shrink-0 \${msg.role === "user" ? "bg-slate-200 text-slate-600" : "bg-teal-100 text-teal-600"}\`}>
                {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={\`px-4 py-2.5 rounded-2xl text-sm \${msg.role === "user" ? "bg-primary text-white rounded-tr-sm" : "bg-white text-slate-700 border border-slate-200 rounded-tl-sm"}\`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-2 max-w-[85%]">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-teal-100 text-teal-600">
                <Bot className="w-4 h-4" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-white border border-slate-200 rounded-tl-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button 
          type="submit"
          disabled={!inputValue.trim() || isTyping}
          className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
