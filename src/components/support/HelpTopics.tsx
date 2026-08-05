import { UserCircle, CheckCircle, MonitorPlay, GraduationCap, School, Shield, CreditCard, ChevronRight } from 'lucide-react';

const TOPICS = [
  {
    title: "Account & Login",
    icon: <UserCircle className="w-6 h-6 text-slate-500" />,
    desc: "Password reset, account verification, user roles.",
    links: ["Reset your password", "Understanding user roles", "Troubleshoot login"]
  },
  {
    title: "Attendance & Records",
    icon: <CheckCircle className="w-6 h-6 text-emerald-500" />,
    desc: "Attendance issues, records corrections, synchronization.",
    links: ["Attendance not recording", "Manual attendance override", "Syncing offline data"]
  },
  {
    title: "SmartBoard",
    icon: <MonitorPlay className="w-6 h-6 text-teal-500" />,
    desc: "Connection issues, display troubleshooting, content sharing.",
    links: ["SmartBoard offline", "Screen mirroring issues", "Updating firmware"]
  },
  {
    title: "Faculty Support",
    icon: <GraduationCap className="w-6 h-6 text-rose-500" />,
    desc: "Schedules, resources, reports, notifications.",
    links: ["Uploading lecture notes", "Sending push notifications", "Viewing attendance reports"]
  },
  {
    title: "Student Support",
    icon: <School className="w-6 h-6 text-amber-500" />,
    desc: "Attendance, assignments, timetable, profile.",
    links: ["Viewing your timetable", "Submitting assignments", "Updating profile details"]
  },
  {
    title: "Administration",
    icon: <Shield className="w-6 h-6 text-violet-500" />,
    desc: "Departments, analytics, approvals, permissions.",
    links: ["Managing permissions", "Generating campus reports", "Approving faculty requests"]
  },
  {
    title: "Billing & Licensing",
    icon: <CreditCard className="w-6 h-6 text-green-500" />,
    desc: "Plans, subscriptions, invoices, enterprise licensing.",
    links: ["View current invoices", "Upgrading your plan", "Enterprise SLAs"]
  }
];

export function HelpTopics() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">Popular Help Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map((topic, idx) => (
            <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 hover:border-primary/30 hover:bg-primary/5 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-primary transition-colors">{topic.title}</h3>
              </div>
              <p className="text-sm text-[#64748B] mb-4">{topic.desc}</p>
              <ul className="space-y-2">
                {topic.links.map((link, i) => (
                  <li key={i} className="text-sm font-medium text-[#64748B] flex items-center gap-1 group-hover:text-[#0F172A]">
                    <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
