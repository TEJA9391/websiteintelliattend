export const SITE_CONFIG = {
  name: "IntelliAttend",
  title: "IntelliAttend | Intelligent Attendance. Smart Campus.",
  description:
    "Manage attendance, schedules, communication, classroom resources, analytics, and academic operations from one intelligent platform.",
  url: "https://intelliattend.app",
  ogImage: "/images/og.png",
  links: {
    twitter: "https://twitter.com/intelliattend",
    github: "https://github.com/intelliattend",
  },
} as const;

export const NAV_LINKS = [
  {
    name: "Products",
    href: "/products",
    children: [
      {
        name: "SmartBoard",
        href: "/products/smartboard",
        description: "Interactive classroom displays",
      },
      {
        name: "Faculty",
        href: "/products/faculty",
        description: "Manage classes and attendance",
      },
      {
        name: "Student",
        href: "/products/student",
        description: "Track progress and schedules",
      },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      {
        name: "Universities",
        href: "/solutions/universities",
        description: "Scale campus management",
      },
      {
        name: "K-12 Schools",
        href: "/solutions/k12",
        description: "Streamline daily operations",
      },
    ],
  },
  { name: "Join", href: "/join" },
  { name: "Blog", href: "/blog" },
  {
    name: "Resources",
    href: "/docs",
    children: [
      {
        name: "Documentation",
        href: "/docs",
        description: "Platform guides and API",
      },
      {
        name: "Help Center",
        href: "/support",
        description: "24/7 customer support",
      },
    ],
  },
] as const;

export const FOOTER_LINKS = {
  product: [
    { name: "SmartBoard", href: "/products/smartboard" },
    { name: "Faculty Portal", href: "/products/faculty" },
    { name: "Student App", href: "/products/student" },
    { name: "Join", href: "/join" },
  ],
  solutions: [
    { name: "Universities", href: "/solutions/universities" },
    { name: "K-12 Schools", href: "/solutions/k12" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/support" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
} as const;

export const CONTACT_INFO = {
  email: "hello@intelliattend.app",
  phone: "+1 (555) 123-4567",
  address: "100 Innovation Drive, Tech City, CA",
} as const;

export const SOCIAL_LINKS = [
  { name: "Twitter", href: "https://twitter.com/intelliattend" },
  { name: "GitHub", href: "https://github.com/intelliattend" },
  { name: "LinkedIn", href: "https://linkedin.com/company/intelliattend" },
] as const;

export const PORTAL_ROLES = [
  {
    id: "faculty",
    title: "Faculty Portal",
    description: "Manage classes, attendance, and SmartBoard.",
    href: "/login/faculty",
    color: "teal",
  },
  {
    id: "student",
    title: "Student Portal",
    description: "View schedules, attendance, and resources.",
    href: "/login/student",
    color: "emerald",
  },
  {
    id: "admin",
    title: "Administrator Portal",
    description: "Manage campus operations and analytics.",
    href: "/login/admin",
    color: "violet",
  },
] as const;
