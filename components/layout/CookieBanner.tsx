"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!mounted || !showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[rgb(var(--paper))] border-t border-[rgb(var(--ink)/0.1)] shadow-lg"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 text-sm text-[rgb(var(--ink)/0.8)]">
            <p>
              Diese Website verwendet Cookies, um Ihnen die bestmögliche
              Nutzung zu ermöglichen. Weitere Informationen finden Sie in
              unserer{" "}
              <Link
                href="/datenschutzerklaerung"
                className="underline hover:text-[rgb(var(--accent))] transition-colors"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-row gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-[rgb(var(--ink)/0.7)] hover:text-[rgb(var(--ink))] border border-[rgb(var(--ink)/0.2)] rounded-lg hover:border-[rgb(var(--ink)/0.4)] transition-colors"
              aria-label="Cookies ablehnen"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-[rgb(var(--accent))] rounded-lg hover:bg-[rgb(var(--accent)/0.9)] transition-colors"
              aria-label="Cookies akzeptieren"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
