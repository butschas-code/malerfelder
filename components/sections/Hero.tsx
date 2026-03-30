"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { HOME, COMPANY, TRUST_BADGES } from "@/lib/data/content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Video Background - Full Width */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-[rgb(var(--brand2))]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand2))]/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              {TRUST_BADGES.map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm"
                >
                  <span className="font-semibold mr-1">{badge.label}</span>
                  <span className="text-white/80">{badge.description}</span>
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6">
              {HOME.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              {HOME.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/40 hover:shadow-xl hover:shadow-orange-500/50"
                >
                  <span>Offerte anfragen</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.a
                href={`tel:${COMPANY.contact.phoneLink}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#2e4583]/80 hover:bg-[#2e4583] backdrop-blur-sm rounded-full transition-all duration-300 border border-[#2e4583]/50 hover:border-[#2e4583] shadow-lg hover:shadow-xl hover:shadow-[#2e4583]/30"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Phone className="w-5 h-5" />
                </motion.div>
                <span>{COMPANY.contact.phone}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brush stroke divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px brush-divider z-10" />
    </section>
  );
}
