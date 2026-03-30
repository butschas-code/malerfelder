"use client";

import Link from "next/link";
import { Phone, Mail, FileText } from "lucide-react";
import { COMPANY } from "@/lib/data/content";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[rgb(var(--line))] shadow-apple-large">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Phone */}
        <a
          href={`tel:${COMPANY.contact.phoneLink}`}
          className="flex flex-col items-center space-y-1 text-[rgb(var(--ink))]"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">Anrufen</span>
        </a>

        {/* Main CTA */}
        <Link
          href="/kontakt"
          className="flex-1 mx-4 flex items-center justify-center space-x-2 px-4 py-2.5 bg-[rgb(var(--brand))] text-white rounded-full font-medium"
        >
          <FileText className="w-4 h-4" />
          <span>Offerte</span>
        </Link>

        {/* Email */}
        <a
          href={`mailto:${COMPANY.contact.email}`}
          className="flex flex-col items-center space-y-1 text-[rgb(var(--ink))]"
        >
          <Mail className="w-5 h-5" />
          <span className="text-xs font-medium">E-Mail</span>
        </a>
      </div>
    </div>
  );
}
