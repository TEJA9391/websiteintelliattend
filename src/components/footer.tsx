"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/login') || pathname?.startsWith('/register') || pathname?.startsWith('/get-started') || pathname?.startsWith('/portal')) {
    return null;
  }
  return (
    <footer className="bg-white border-t border-[#0F172A]/[0.08] pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <Image src="/images/logo.png" alt="IntelliAttend" width={32} height={32} className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg text-[#0F172A] tracking-tight">IntelliAttend</span>
            </Link>
            <p className="text-sm text-[#64748B] mb-6 max-w-xs">
              The intelligent foundation for modern educational institutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Features</Link></li>
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Integrations</Link></li>
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-[#0F172A]/[0.08] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            © {new Date().getFullYear()} IntelliAttend Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success" />
            <span className="text-sm text-[#64748B]">All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
