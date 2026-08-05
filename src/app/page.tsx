import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { AIFeatures } from "@/components/home/AIFeatures";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyIntelliAttend } from "@/components/home/WhyIntelliAttend";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";
import { CTASection } from "@/components/home/CTASection";
import { FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "IntelliAttend | Intelligent Attendance. Smart Campus Platform",
  description:
    "The AI-powered campus management platform. Manage attendance, schedules, SmartBoard, notifications, analytics and communication from one intelligent platform. Trusted by universities and schools worldwide.",
  openGraph: {
    title: "IntelliAttend | Intelligent Attendance. Smart Campus Platform",
    description:
      "The AI-powered campus management platform. Manage attendance, schedules, SmartBoard, notifications, analytics and communication from one intelligent platform.",
    url: "https://www.intelliattend.app",
    images: [
      {
        url: "https://www.intelliattend.app/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "IntelliAttend - Intelligent Campus Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://www.intelliattend.app",
  },
};

const faqItems = [
  {
    question: "What is IntelliAttend?",
    answer:
      "IntelliAttend is an AI-powered intelligent campus management platform that helps universities, colleges, and K-12 schools manage attendance, schedules, SmartBoard integration, notifications, resources, analytics, and communication from one unified platform.",
  },
  {
    question: "How does AI attendance work?",
    answer:
      "IntelliAttend uses advanced AI and computer vision to automatically track student attendance. The system can recognize students entering the classroom and mark their attendance in real-time, eliminating manual roll calls.",
  },
  {
    question: "What products does IntelliAttend offer?",
    answer:
      "IntelliAttend offers three main products: SmartBoard for interactive classroom displays, Faculty Portal for managing classes and attendance, and Student App for tracking progress, schedules, and accessing resources.",
  },
  {
    question: "Is IntelliAttend suitable for K-12 schools?",
    answer:
      "Yes! IntelliAttend offers tailored solutions for K-12 schools with features like parent notifications, simplified attendance tracking, resource management, and age-appropriate student interfaces.",
  },
  {
    question: "How much does IntelliAttend cost?",
    answer:
      "IntelliAttend offers flexible pricing plans starting from free for small institutions. Contact our sales team for enterprise pricing tailored to your campus size and requirements.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <FAQJsonLd items={faqItems} />
      <HeroSection />
      <AIFeatures />
      <HowItWorks />
      <WhyIntelliAttend />
      <Testimonials />
      <ContactSection />
      <CTASection />
    </div>
  );
}
