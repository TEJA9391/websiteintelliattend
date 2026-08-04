export function DocsSidebar() {
  const sections = [
    {
      title: "Quick Start",
      items: ["Getting Started", "Installation", "First Login", "Dashboard Overview"]
    },
    {
      title: "Product Documentation",
      items: ["Faculty App", "Student App", "SmartBoard", "Administration", "AI Analytics"]
    },
    {
      title: "API Reference",
      items: ["Authentication API", "Attendance API", "Student API", "Faculty API", "SmartBoard API", "Analytics API", "Notifications API", "File Upload API"]
    },
    {
      title: "Developer Resources",
      items: ["Flutter SDK", "REST API", "WebSocket Events", "Authentication Flow", "Error Codes", "Rate Limits"]
    }
  ];

  return (
    <nav className="hidden lg:block w-64 shrink-0 pr-8 border-r border-slate-200 min-h-[calc(100vh-400px)]">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h4 className="text-sm font-extrabold text-slate-900 mb-3 uppercase tracking-wider">{section.title}</h4>
          <ul className="space-y-2.5">
            {section.items.map((item, i) => (
              <li key={i}>
                <a href="#" className={`text-sm font-medium transition-colors ${idx === 0 && i === 0 ? 'text-slate-500 font-bold' : 'text-slate-600 hover:text-slate-500'}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
