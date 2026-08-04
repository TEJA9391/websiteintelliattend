import { MessageCircle, Mail, Building2, Users2, ArrowRight } from 'lucide-react';

const CONTACTS = [
  {
    title: "Live Chat",
    desc: "Average response: < 2 minutes",
    icon: <MessageCircle className="w-8 h-8 text-slate-500" />,
    action: "Start Chat",
    badge: "Fastest"
  },
  {
    title: "Email Support",
    desc: "support@intelliattend.ai",
    icon: <Mail className="w-8 h-8 text-emerald-500" />,
    action: "Send Email",
    badge: "24/7"
  },
  {
    title: "Enterprise Support",
    desc: "Dedicated onboarding and technical assistance.",
    icon: <Building2 className="w-8 h-8 text-indigo-500" />,
    action: "Contact Manager",
    badge: "Priority"
  },
  {
    title: "Community Forum",
    desc: "Ask questions and share best practices.",
    icon: <Users2 className="w-8 h-8 text-rose-500" />,
    action: "Join Forum"
  }
];

export function HelpContact() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Support</h2>
          <p className="text-lg text-slate-600">Still need help? Our support specialists are ready to assist.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CONTACTS.map((contact, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow relative">
              {contact.badge && (
                <div className="absolute -top-3 bg-blue-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                  {contact.badge}
                </div>
              )}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                {contact.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{contact.title}</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">{contact.desc}</p>
              <button className="text-sm font-bold text-slate-500 flex items-center gap-1 hover:gap-2 transition-all">
                {contact.action} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to transform your campus?</h2>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto relative z-10">
            Join hundreds of educational institutions already using IntelliAttend to manage their academic operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
             <button className="bg-white text-slate-500 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-slate-50 transition-colors">
               Contact Sales
             </button>
             <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md border border-blue-500 hover:bg-blue-800 transition-colors">
               Start Live Chat
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
