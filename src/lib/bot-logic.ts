export interface BotContext {
  lastIntent: string | null;
  lastEntity: string | null;
  history: Array<{ role: string; content: string }>;
}

export interface BotResponse {
  text: string;
  quickReplies: string[];
  nextContext: BotContext;
}

// --- NORMALIZATION & DICTIONARIES ---

const TYPO_MAP: Record<string, string> = {
  "smartbord": "smartboard",
  "faculity": "faculty",
  "studnt": "student",
  "attendence": "attendance",
  "attandance": "attendance",
  "atendance": "attendance",
  "notifcation": "notification",
  "prcing": "pricing",
  "documntation": "documentation",
  "suport": "support",
  "signin": "login",
  "log in": "login",
  "abt": "about",
  "pls": "please",
  "plz": "please",
  "u": "you",
  "ur": "your",
  "wht": "what"
};

const PROFANITY_LIST = ["shit", "fuck", "bitch", "crap", "damn", "wtf", "stupid", "suck", "sucks", "hell"];

// --- INTENT KNOWLEDGE BASE ---

interface IntentDef {
  id: string;
  entities: string[];
  keywords: string[];
  phrases: string[];
  response: string;
  quickReplies: string[];
}

const INTENTS: IntentDef[] = [
  {
    id: "GREETING",
    entities: [],
    keywords: ["hi", "hello", "hey", "greetings", "howdy", "morning", "afternoon"],
    phrases: ["how are you", "what is up", "who are you", "what are you"],
    response: "Hello! I'm the IntelliAttend AI Assistant. I can help with our SmartBoards, faculty tools, student apps, attendance, pricing, security, integrations, and support. What would you like to know?",
    quickReplies: ["What is IntelliAttend?", "SmartBoard", "Pricing", "Book a Demo"]
  },
  {
    id: "CORE_PLATFORM",
    entities: ["intelliattend", "platform"],
    keywords: ["intelliattend", "platform", "software", "system", "website"],
    phrases: ["what is this", "what do you do", "what is intelliattend", "how does this work"],
    response: "**IntelliAttend** is a smart campus management platform that connects faculty, students, SmartBoards, attendance, and academic workflows in one system.\n\nWe provide:\n- Automated Attendance\n- SmartBoard Integration\n- Dedicated Faculty/Student Apps\n- Real-time Analytics",
    quickReplies: ["SmartBoard Features", "Faculty App", "Pricing"]
  },
  {
    id: "ATTENDANCE",
    entities: ["attendance"],
    keywords: ["attendance", "register", "roll", "present", "absent", "percentage"],
    phrases: ["how attendance works", "how do you track attendance", "can teacher mark attendance", "mark present", "check my attendance"],
    response: "**Attendance Tracking** in IntelliAttend is highly flexible:\n\n- **Faculty** can take attendance with one tap or let the system do it automatically.\n- **Students** can track their own attendance percentage in real-time via the Student App.\n- **Admins** get detailed, automated reports across the whole campus.",
    quickReplies: ["Faculty App", "Student App", "SmartBoard"]
  },
  {
    id: "SMARTBOARD",
    entities: ["smartboard", "hardware"],
    keywords: ["smartboard", "board", "screen", "display", "projector", "interactive", "hardware"],
    phrases: ["what is smartboard", "how does smartboard work", "push presentation", "cast screen"],
    response: "The **IntelliAttend SmartBoard** brings interactivity to the classroom:\n\n- **Faculty** can push presentations directly to it and annotate in digital ink.\n- **Students** can cast their screens for group work.\n- It automatically logs attendance via proximity beacons and saves all notes to the cloud.",
    quickReplies: ["Faculty + SmartBoard", "How does attendance work?", "Book a Demo"]
  },
  {
    id: "FACULTY",
    entities: ["faculty", "teacher", "professor"],
    keywords: ["faculty", "teacher", "professor", "teach", "educator"],
    phrases: ["what can faculty do", "can teachers use it", "teacher attendance system"],
    response: "The **Faculty Portal & App** gives educators their time back.\n\nFaculty can:\n- Manage classes and grading.\n- Mark attendance instantly.\n- Push presentations to the classroom SmartBoard.\n- Message students and track analytics.",
    quickReplies: ["Student App", "SmartBoard", "Attendance"]
  },
  {
    id: "STUDENT",
    entities: ["student", "pupil", "learner"],
    keywords: ["student", "pupil", "learner", "grades"],
    phrases: ["what can students do", "student app features", "can students see that", "my college"],
    response: "The **Student App** acts as a digital compass for campus life.\n\nStudents can:\n- Check their attendance and grades in real-time.\n- View their digital timetable and schedule.\n- Receive push notifications for class changes or announcements.\n- Access saved SmartBoard notes.",
    quickReplies: ["Faculty App", "Attendance", "Pricing"]
  },
  {
    id: "PRICING",
    entities: ["pricing", "cost"],
    keywords: ["price", "pricing", "cost", "pay", "billing", "subscription", "expensive", "cheap", "tiers"],
    phrases: ["how much is it", "show me pricing", "what do you offer", "starter", "professional", "enterprise"],
    response: "IntelliAttend offers three main plans depending on your institution's size:\n\n- **Starter**: Basic attendance & reporting (Best for small schools).\n- **Professional**: Full app access + SmartBoard sync.\n- **Enterprise**: Custom integrations, SLA, and dedicated support.\n\nYou can view the full comparison on our [Join Page](/join).",
    quickReplies: ["Compare Plans", "Enterprise", "Book a Demo", "Contact Sales"]
  },
  {
    id: "SECURITY",
    entities: ["security", "privacy"],
    keywords: ["security", "privacy", "data", "safe", "encryption", "gdpr", "ferpa", "iso", "compliance"],
    phrases: ["is it secure", "is my data safe", "how do you protect"],
    response: "Data security is our top priority. We offer:\n\n- **End-to-End Encryption** for academic records.\n- **Full Compliance**: GDPR, FERPA, and ISO 27001.\n- **Role-Based Access Control (RBAC)** to ensure only authorized personnel see sensitive data.",
    quickReplies: ["Tech & API", "Enterprise", "Contact Support"]
  },
  {
    id: "TECH_API",
    entities: ["api", "tech", "integration"],
    keywords: ["api", "tech", "integration", "erp", "database", "webhook", "developer", "canvas", "blackboard"],
    phrases: ["do you support api", "does it integrate", "custom integration"],
    response: "For IT and developers, IntelliAttend is highly extensible:\n\n- **RESTful APIs & Webhooks** for full programmatic control.\n- **ERP Bridges** for systems like Canvas, Blackboard, and proprietary databases.\n- **SSO** (SAML/OAuth2) is standard for secure logins.",
    quickReplies: ["Documentation", "Security", "Contact Sales"]
  },
  {
    id: "SOLUTIONS_K12_UNI",
    entities: ["university", "k12", "enterprise"],
    keywords: ["university", "college", "school", "k12", "kindergarten", "district", "campus"],
    phrases: ["does it work for universities", "what about k12", "who is it for"],
    response: "IntelliAttend scales to fit any educational institution:\n\n- **Universities/Colleges**: Handles massive lecture halls, deep ERP integrations, and complex schedules.\n- **K-12 Schools**: Focuses on parent portals, strict attendance compliance, and simplified interfaces.",
    quickReplies: ["SmartBoard", "Pricing", "Book a Demo"]
  },
  {
    id: "DEMO_CONTACT",
    entities: ["demo", "contact", "support"],
    keywords: ["demo", "contact", "support", "help", "ticket", "human", "agent"],
    phrases: ["book a demo", "get a demo", "i want a demo", "contact support", "where is support"],
    response: "We would love to help you further!\n\n- **To see it in action**: [Book a Demo](/contact)\n- **For technical help**: [Contact Support](/support/email)\n- **For large deployments**: [Enterprise Support](/enterprise-support)",
    quickReplies: ["Pricing", "Documentation", "Explore Features"]
  },
  {
    id: "LOGIN_ISSUES",
    entities: ["login", "account"],
    keywords: ["login", "signin", "password", "account"],
    phrases: ["i cant login", "login isnt working", "forgot password"],
    response: "I can help with login issues. If you've forgotten your password, you can reset it on the [Login Page](/login).\n\nIf the issue persists, please [Contact Support](/support/email) so we can manually assist you.",
    quickReplies: ["Contact Support", "Documentation"]
  },
  {
    id: "DOCUMENTATION",
    entities: ["documentation", "docs"],
    keywords: ["documentation", "docs", "guide", "manual"],
    phrases: ["show documentation", "where are the docs", "how to use"],
    response: "You can find all our technical guides, API references, and user manuals in our [Documentation](/docs).",
    quickReplies: ["Tech & API", "Contact Support"]
  }
];

// --- NLP ENGINE ---

function normalizeInput(input: string): string {
  let cleaned = input.toLowerCase().replace(/[^\w\s-]/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Handle typo replacements
  for (const [typo, correction] of Object.entries(TYPO_MAP)) {
    const regex = new RegExp(`\\b${typo}\\b`, 'g');
    cleaned = cleaned.replace(regex, correction);
  }
  
  return cleaned;
}

function detectProfanity(input: string): boolean {
  const words = input.split(' ');
  return words.some(word => PROFANITY_LIST.includes(word));
}

function extractEntities(normalizedInput: string): string[] {
  const foundEntities: string[] = [];
  const words = normalizedInput.split(' ');
  for (const intent of INTENTS) {
    for (const entity of intent.entities) {
      if (words.includes(entity) && !foundEntities.includes(entity)) {
        foundEntities.push(entity);
      }
    }
  }
  return foundEntities;
}

function scoreIntent(normalizedInput: string, intent: IntentDef, context: BotContext, detectedEntities: string[]): number {
  let score = 0;
  const words = normalizedInput.split(' ');

  // Exact phrase match (+10)
  for (const phrase of intent.phrases) {
    if (normalizedInput.includes(phrase)) score += 10;
  }

  // Keyword match (+5)
  for (const keyword of intent.keywords) {
    if (words.includes(keyword)) score += 5;
  }
  
  // Entity match (+5)
  for (const entity of intent.entities) {
    if (detectedEntities.includes(entity)) score += 5;
  }
  
  // Context match (+8)
  if (context.lastEntity && intent.entities.includes(context.lastEntity)) {
    // Boost if user uses a pronoun like "it", "that", "they" and the intent matches the last entity
    if (words.includes("it") || words.includes("that") || words.includes("this") || words.includes("they")) {
      score += 8;
    }
  }
  
  if (context.lastIntent === intent.id) {
    score += 6; // Continued conversation on the same topic
  }

  return score;
}

export async function generateResponse(userInput: string, context: BotContext): Promise<BotResponse> {
  const isProfane = detectProfanity(userInput.toLowerCase());
  const normalizedInput = normalizeInput(userInput);
  const detectedEntities = extractEntities(normalizedInput);
  
  // Handle empty input gracefully
  if (!normalizedInput.trim()) {
    return {
      text: "Did you need help with something? I'm here to answer any questions about IntelliAttend.",
      quickReplies: ["What is IntelliAttend?", "Pricing", "Contact Support"],
      nextContext: context
    };
  }

  // Score all intents
  const scoredIntents = INTENTS.map(intent => ({
    intent,
    score: scoreIntent(normalizedInput, intent, context, detectedEntities)
  })).sort((a, b) => b.score - a.score);

  // Multi-intent handling: If multiple intents have high scores (> 10), we combine them.
  const topIntents = scoredIntents.filter(s => s.score >= 10);
  
  let responseText = "";
  let quickReplies: string[] = [];
  let nextIntent: string | null = context.lastIntent;
  let nextEntity: string | null = detectedEntities.length > 0 ? detectedEntities[0] : context.lastEntity;

  if (topIntents.length > 0) {
    if (isProfane) {
      responseText = "I understand you might be frustrated. Let me help you with that.\n\n";
    }
    
    if (topIntents.length > 1) {
      // Handle up to 2 intents for multi-intent questions
      responseText += topIntents.slice(0, 2).map(s => s.intent.response).join("\n\n---\n\n");
      quickReplies = Array.from(new Set([...topIntents[0].intent.quickReplies, ...topIntents[1].intent.quickReplies])).slice(0, 4);
    } else {
      responseText += topIntents[0].intent.response;
      quickReplies = topIntents[0].intent.quickReplies;
    }
    
    nextIntent = topIntents[0].intent.id;
  } else {
    // Intelligent Fallback (score < 10)
    if (isProfane) {
      responseText = "I'm a professional AI assistant, and while I understand frustration, I can best help if we focus on IntelliAttend's features. How can I assist you with our platform?";
    } else {
      // Check if it's completely unrelated (like "what is the capital of japan") vs a short unknown query
      if (normalizedInput.includes("capital") || normalizedInput.includes("weather") || normalizedInput.includes("who is")) {
        responseText = "I specialize strictly in IntelliAttend's academic platform, so I don't have information on that. If you'd like, I can help with anything related to our software!";
      } else {
        responseText = "I can help with IntelliAttend's SmartBoards, faculty tools, student apps, attendance, pricing, security, integrations, demos, and support. What would you like to know?";
      }
    }
    quickReplies = ["SmartBoard", "Faculty App", "Pricing", "Book a Demo"];
  }

  // Handle specific explicit action phrases (Navigation)
  if (normalizedInput.includes("take me to pricing") || normalizedInput.includes("open pricing")) {
    responseText = "Certainly! Here is the link to our [Join Page](/join). " + responseText;
  } else if (normalizedInput.includes("open documentation") || normalizedInput.includes("show documentation")) {
    responseText = "Right away! You can access the [Documentation here](/docs).";
  }

  // Handle Comparisons (e.g. Starter vs Professional)
  if (normalizedInput.includes("vs") || normalizedInput.includes("compare")) {
    if (normalizedInput.includes("starter") && normalizedInput.includes("professional")) {
      responseText = "Here is a quick comparison:\n\n| Feature | Starter | Professional |\n|---|---|---|\n| Core Attendance | Yes | Yes |\n| SmartBoard Sync | No | Yes |\n| API Access | No | Yes |\n\n[Compare all plans](/join).";
    } else if (normalizedInput.includes("faculty") && normalizedInput.includes("student")) {
      responseText = "**Faculty App vs Student App**\n\n- **Faculty**: Used for grading, taking attendance, and pushing content to SmartBoards.\n- **Student**: Used for checking grades, viewing timetables, and receiving notifications.";
    }
  }

  return {
    text: responseText,
    quickReplies,
    nextContext: {
      lastIntent: nextIntent,
      lastEntity: nextEntity,
      history: [...context.history, { role: "user", content: userInput }, { role: "assistant", content: responseText }].slice(-6) // keep last 6 turns
    }
  };
}
