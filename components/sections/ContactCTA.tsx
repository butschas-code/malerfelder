"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, SERVICE_AREA } from "@/lib/data/content";

export function ContactCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#002146] text-white relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand))]/20 via-transparent to-blue-600/20" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 text-sm font-medium bg-white/10 rounded-full mb-4"
            >
              Kontakt
            </motion.span>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4">
              Bereit für Ihr{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Projekt?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 max-w-lg">
              Möchten Sie Ihr nächstes Projekt umsetzen? Melden Sie sich! Wir helfen Ihnen gerne und unkompliziert weiter.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[rgb(var(--brand2))] bg-white hover:bg-[rgb(var(--paper))] rounded-full transition-all duration-200 shadow-lg w-full sm:w-auto"
                >
                  <span>Offerte anfragen</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <a
                  href={`tel:${COMPANY.contact.phoneLink}`}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white border-2 border-white/40 hover:border-white/60 hover:bg-white/10 rounded-full transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  <span>{COMPANY.contact.phone}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Service Area */}
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[rgb(var(--brand))]" />
                <h3 className="font-heading text-lg font-medium">{SERVICE_AREA.headline}</h3>
              </div>
              <p className="text-white/70 text-sm mb-4">{SERVICE_AREA.description}</p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREA.areas.map((area) => (
                  <span key={area} className="px-3 py-1 text-xs bg-white/20 rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${COMPANY.contact.phoneLink}`}
                className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5 text-[rgb(var(--brand))]" />
                <div>
                  <p className="text-xs text-white/50">Telefon</p>
                  <p className="font-medium">{COMPANY.contact.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-[rgb(var(--brand))]" />
                <div>
                  <p className="text-xs text-white/50">E-Mail</p>
                  <p className="font-medium text-sm">{COMPANY.contact.email}</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
