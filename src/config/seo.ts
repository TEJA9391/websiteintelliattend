export const SEO_CONFIG = {
  siteName: "IntelliAttend",
  siteUrl: "https://www.intelliattend.app",
  titleTemplate: "%s | IntelliAttend",
  defaultTitle: "IntelliAttend | Intelligent Attendance. Smart Campus.",
  defaultDescription:
    "Manage attendance, schedules, SmartBoard, notifications, resources, analytics and communication from one intelligent platform. The AI-powered campus management system for modern institutions.",

  // Social media
  social: {
    twitter: "@intelliattend",
    linkedin: "intelliattend",
    github: "intelliattend",
  },

  // Contact info
  contact: {
    email: "support@intelliattend.app",
    phone: "+1-555-123-4567",
    address: "100 Innovation Drive, Tech City, CA 94000",
  },

  // Open Graph defaults
  og: {
    type: "website" as const,
    locale: "en_US",
    siteName: "IntelliAttend",
    image: "https://www.intelliattend.app/images/og-default.png",
    imageWidth: 1200,
    imageHeight: 630,
  },

  // Page-specific metadata
  pages: {
    home: {
      title: "IntelliAttend | Intelligent Attendance. Smart Campus Platform",
      description:
        "The AI-powered campus management platform. Manage attendance, schedules, SmartBoard, notifications, analytics and communication from one intelligent platform. Trusted by universities and schools worldwide.",
    },
    products: {
      title: "Products",
      description:
        "Explore IntelliAttend products: SmartBoard for interactive classrooms, Faculty Portal for attendance management, and Student App for tracking progress.",
    },
    smartboard: {
      title: "SmartBoard - Interactive Classroom Display",
      description:
        "Transform your classroom with IntelliAttend SmartBoard. Push attendance, resources, and live content directly to interactive displays.",
    },
    faculty: {
      title: "Faculty Portal - Attendance & Class Management",
      description:
        "Manage classes, track attendance, push resources, and analytics from one intelligent faculty dashboard.",
    },
    student: {
      title: "Student App - Track Progress & Schedule",
      description:
        "Track attendance, view schedules, access resources, and stay updated with the IntelliAttend Student App.",
    },
    pricing: {
      title: "Pricing",
      description:
        "Flexible pricing plans for institutions of all sizes. Start free and scale as you grow. No hidden fees.",
    },
    solutions: {
      title: "Solutions",
      description:
        "Tailored campus management solutions for universities, colleges, and K-12 schools.",
    },
    universities: {
      title: "University Solutions",
      description:
        "Scale campus management for universities with IntelliAttend. Handle thousands of students, faculty, and courses effortlessly.",
    },
    k12: {
      title: "K-12 School Solutions",
      description:
        "Streamline daily operations for K-12 schools. Simple attendance tracking, parent notifications, and resource management.",
    },
    blog: {
      title: "Blog",
      description:
        "Latest insights, updates, and best practices for campus management and educational technology.",
    },
    docs: {
      title: "Documentation",
      description:
        "Comprehensive guides, API references, and tutorials for getting started with IntelliAttend.",
    },
    support: {
      title: "Support",
      description:
        "Get help with IntelliAttend. Contact our support team, browse help articles, or request enterprise assistance.",
    },
    contact: {
      title: "Contact Us",
      description:
        "Get in touch with the IntelliAttend team. Request a demo, ask questions, or learn about enterprise solutions.",
    },
    demo: {
      title: "Live Demo",
      description:
        "Experience IntelliAttend in action. See how our intelligent platform transforms campus management.",
    },
    features: {
      title: "Features",
      description:
        "Discover all features of IntelliAttend: AI attendance, SmartBoard integration, analytics, notifications, and more.",
    },
    analytics: {
      title: "Analytics & Insights",
      description:
        "Powerful analytics and AI-driven insights for campus-wide performance tracking and decision making.",
    },
    login: {
      title: "Login",
      description:
        "Sign in to your IntelliAttend portal. Access faculty, student, or administrator dashboards.",
    },
    register: {
      title: "Register",
      description:
        "Create your IntelliAttend account. Join thousands of institutions using intelligent campus management.",
    },
  },

  // Structured data schemas
  schemas: {
    organization: {
      "@type": "Organization",
      name: "IntelliAttend",
      url: "https://www.intelliattend.app",
      logo: "https://www.intelliattend.app/images/logo.png",
      sameAs: [
        "https://twitter.com/intelliattend",
        "https://linkedin.com/company/intelliattend",
        "https://github.com/intelliattend",
      ],
    },
  },
} as const;

export type PageKey = keyof typeof SEO_CONFIG.pages;
