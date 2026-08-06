export function generateMockResponse(userInput: string): string {
  const input = userInput.toLowerCase();
  
  // Greetings & Small Talk
  if (input.match(/\b(hi|hello|hey|greetings|howdy|morning|afternoon|evening)\b/)) {
    return "Hello there! I'm the IntelliAttend AI Assistant. I know everything about our platform. How can I help you today?";
  }
  if (input.match(/\b(how are you|how do you do)\b/)) {
    return "I'm doing great, thank you for asking! Ready to answer any questions you have about IntelliAttend.";
  }
  if (input.match(/\b(thank you|thanks|thx|appreciate it)\b/)) {
    return "You're very welcome! Let me know if you need anything else.";
  }
  if (input.match(/\b(who are you|what are you)\b/)) {
    return "I am the IntelliAttend AI Assistant. I run completely locally on this website to help you navigate our features, pricing, and support—no external APIs required! 😉";
  }
  
  // Core Product / What is it?
  if (input.match(/\b(what is intelliattend|what do you do|about this website|what is this project)\b/)) {
    return "**IntelliAttend** is a next-generation academic management platform. We provide:\n\n1. AI-powered attendance tracking\n2. SmartBoard integration for classrooms\n3. Dedicated apps for Students, Faculty, and Admins\n4. Real-time campus analytics\n\nWhat specific area would you like to know more about?";
  }

  // Pricing & Billing
  if (input.match(/\b(price|pricing|cost|how much|pay|billing|tiers|subscription)\b/)) {
    return "We offer three main pricing tiers tailored to your institution's size:\n\n- **Starter**: Perfect for small schools. Core attendance & basic reporting.\n- **Professional**: Our most popular plan. Includes SmartBoard sync and API access.\n- **Enterprise**: Built for massive universities. 99.9% SLA, custom ERP integrations, and dedicated support.\n\nCheck out the [Pricing Page](/#pricing) for full details.";
  }

  // Faculty Features
  if (input.match(/\b(faculty|teacher|professor|teach|grading|staff)\b/)) {
    return "The **Faculty Portal** is designed to save teachers time. Features include:\n- **One-Tap Attendance**: Mark present/absent instantly.\n- **SmartBoard Sync**: Push presentations directly to student devices.\n- **Automated Reports**: Generate end-of-semester grade and attendance reports effortlessly.";
  }

  // Student Features
  if (input.match(/\b(student|pupil|learner|app)\b/)) {
    return "The **Student App** keeps learners engaged and informed:\n- Real-time attendance tracking (know exactly where you stand).\n- Instant push notifications for class changes or announcements.\n- Digital timetable and assignment syncing directly from faculty.";
  }

  // SmartBoard & Hardware
  if (input.match(/\b(smartboard|board|hardware|screen|projector|interactive)\b/)) {
    return "**SmartBoard Integration** is one of our killer features! \n\nFaculty can seamlessly connect their tablet to the classroom SmartBoard over local WiFi. It allows real-time interactive polling, screen sharing, and automatic attendance logging via geofencing.";
  }

  // Tech / ERP / API
  if (input.match(/\b(api|integration|erp|tech|database|webhook|developer)\b/)) {
    return "For developers and IT admins, IntelliAttend is highly extensible:\n- **RESTful API**: Manage users, courses, and attendance data programmatically.\n- **ERP Integrations**: We provide custom bridges to legacy systems like Blackboard, Canvas, and custom university databases.\n- **Webhooks**: Get real-time event triggers.";
  }

  // Security & Privacy
  if (input.match(/\b(security|privacy|data|safe|gdpr|encryption)\b/)) {
    return "Security is our top priority. IntelliAttend features:\n- **End-to-end encryption** for all student data.\n- **GDPR & ISO Compliance**.\n- Role-based access control (RBAC) to ensure only authorized personnel view sensitive academic records.";
  }
  
  // Support & Contact
  if (input.match(/\b(support|help|contact|email|call|ticket)\b/)) {
    return "You're already talking to support! But if you need a human:\n- Visit our [Email Support](/support/email) page to submit a ticket.\n- For large-scale needs, check our [Enterprise Support](/enterprise-support).\n- Or browse our [Community Forum](/community).";
  }

  // Fallback
  return "That's a great question about IntelliAttend! I'm an advanced local AI, but I'm still learning some specifics. You can ask me about our **Pricing**, **SmartBoards**, **Faculty/Student Apps**, or **API Integrations**!";
}
