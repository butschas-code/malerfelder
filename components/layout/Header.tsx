"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY, NAVIGATION } from "@/lib/data/content";

// Instagram icon SVG
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// Facebook icon SVG
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[rgb(var(--line))]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt={COMPANY.name}
              width={180}
              height={40}
              className="h-8 lg:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          {/* Right side: Nav + Phone + CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[rgb(var(--ink-muted))] hover:text-[rgb(var(--ink))] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Phone */}
            <a
              href={`tel:${COMPANY.contact.phoneLink}`}
              className="flex items-center space-x-2 text-sm font-medium text-[rgb(var(--brand))] hover:text-[rgb(var(--brand-dark))] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY.contact.phone}</span>
            </a>

            {/* CTA Button */}
            <Link
              href="/kontakt"
              className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/40 hover:shadow-xl hover:shadow-orange-500/50"
            >
              Offerte anfragen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[rgb(var(--ink))]"
            aria-label={isMenuOpen ? "Menu schliessen" : "Menu öffnen"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[rgb(var(--paper))] border-b border-[rgb(var(--line))]"
          >
            <nav className="px-4 py-6 space-y-4">
              {NAVIGATION.main.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-[rgb(var(--ink))] hover:text-[rgb(var(--brand))] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-[rgb(var(--line))] space-y-3">
                {/* Social Icons - Mobile */}
                <div className="flex items-center space-x-4 pb-3">
                  <a
                    href={COMPANY.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[rgb(var(--ink-muted))] hover:text-[rgb(var(--brand))] transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[rgb(var(--ink-muted))] hover:text-[rgb(var(--brand))] transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href={`tel:${COMPANY.contact.phoneLink}`}
                  className="flex items-center space-x-2 text-[rgb(var(--brand))]"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">{COMPANY.contact.phone}</span>
                </a>
                <Link
                  href="/kontakt"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/40"
                >
                  Offerte anfragen
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
