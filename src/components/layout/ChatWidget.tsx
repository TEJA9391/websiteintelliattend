"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
  isHtml?: boolean;
};

// Simulated Knowledge Base for Advanced AI
const KNOWLEDGE_BASE = [
  {
    keywords: ["pricing", "cost", "price", "how much", "plans", "subscription"],
    response: "Our pricing is tailored to the size of your institution. We offer Starter, Professional, and Enterprise tiers. Please visit our <a href='/#pricing' class='text-teal-600 underline font-bold'>Pricing page</a> for details, or contact sales.",
    score: 0
  },
  {
    keywords: ["smartboard", "board", "display", "interactive", "screen", "present"],
    response: "IntelliAttend integrates seamlessly with modern SmartBoards! Faculty can share presentations, annotate in real-time, and sync everything to the cloud automatically.",
    score: 0
  },
  {
    keywords: ["attendance", "absent", "present", "roll", "register", "tracking"],
    response: "Our digital attendance system uses smart AI algorithms and optionally RFID/Bluetooth to record attendance in seconds with 99.9% accuracy. No more paper registers!",
    score: 0
  },
  {
    keywords: ["faculty", "teacher", "professor", "educator"],
    response: "Faculty get a dedicated portal to manage classes, take attendance with one tap, grade assignments, and communicate with students directly.",
    score: 0
  },
  {
    keywords: ["student", "pupil", "learner"],
    response: "Students get a mobile-friendly app to check their real-time attendance, view timetables, submit assignments, and receive instant push notifications for class changes.",
    score: 0
  },
  {
    keywords: ["admin", "administration", "report", "analytics", "data"],
    response: "Administrators have access to a powerful dashboard with predictive analytics. You can track campus-wide attendance trends, manage permissions, and export compliance reports instantly.",
    score: 0
  },
  {
    keywords: ["support", "help", "contact", "issue", "bug", "problem", "error"],
    response: "I can help with basic questions, but for technical issues, please visit our <a href='/support' class='text-teal-600 underline font-bold'>Help Center</a> or email support@intelliattend.ai.",
    score: 0
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "morning", "afternoon"],
    response: "Hello there! I'm the IntelliAttend AI assistant. I can answer questions about our features, pricing, or support. What would you like to know?",
    score: 0
  },
  {
    keywords: ["demo", "try", "book", "meeting", "sales"],
    response: "We'd love to show you around! You can book a live demonstration of the platform with one of our product experts. <a href='/book-demo' class='text-teal-600 underline font-bold'>Click here to book a demo.</a>",
    score: 0
  }
];

// Advanced scoring algorithm to find the best response
const getBotResponse = (input: string): { text: string, isHtml: boolean } => {
  const queryWords = input.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(" ");
  
  let bestMatch = null;
  let highestScore = 0;

  KNOWLEDGE_BASE.forEach(entry => {
    let currentScore = 0;
    queryWords.forEach(word => {
      if (word.length > 2 && entry.keywords.includes(word)) {
        currentScore += 2; // Direct match
      } else if (word.length > 3 && entry.keywords.some(kw => kw.includes(word) || word.includes(kw))) {
        currentScore += 1; // Partial match
      }
    });

    if (currentScore > highestScore) {
      highestScore = currentScore;
      bestMatch = entry;
    }
  });

  if (bestMatch && highestScore > 0) {
    return { text: (bestMatch as any).response, isHtml: true };
  }

  return { 
    text: "That's a great question! IntelliAttend is a comprehensive platform designed to streamline all aspects of campus management. To give you the best answer, I'd recommend checking our <a href='/support' class='text-teal-600 underline font-bold'>Help Center</a> or speaking with an expert.", 
    isHtml: true 
  };
};

const QUICK_REPLIES = [
  "How much does it cost?",
  "Tell me about SmartBoards",
  "How does attendance work?",
  "Book a Demo"
];

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

  const handleSendMessage = (textOrEvent: React.FormEvent | string) => {
    let textToSubmit = "";
    if (typeof textOrEvent === "string") {
      textToSubmit = textOrEvent;
    } else {
      textOrEvent.preventDefault();
      textToSubmit = inputValue;
    }

    if (!textToSubmit.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: textToSubmit.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate network delay and AI processing
    setTimeout(() => {
      const response = getBotResponse(userMessage.text);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: response.text,
        isHtml: response.isHtml
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800); // Random delay for realism
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
          <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-slate-200 text-slate-600" : "bg-teal-100 text-teal-600"}`}>
                {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`px-4 py-2.5 rounded-2xl text-sm ${msg.role === "user" ? "bg-primary text-white rounded-tr-sm" : "bg-white text-slate-700 border border-slate-200 rounded-tl-sm shadow-sm"}`}>
                {msg.isHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: msg.text }} className="leading-relaxed" />
                ) : (
                  msg.text
                )}
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
              <div className="px-4 py-3 rounded-2xl bg-white border border-slate-200 rounded-tl-sm shadow-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {messages[messages.length - 1].role === "bot" && !isTyping && (
        <div className="px-4 pb-2 pt-1 bg-slate-50 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {QUICK_REPLIES.map((reply, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(reply)}
              className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1.5 hover:bg-teal-100 hover:border-teal-200 transition-colors shrink-0"
            >
              {reply}
            </button>
          ))}
        </div>
      )}

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
