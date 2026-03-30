"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SERVICES, COMPANY } from "@/lib/data/content";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DienstleistungenPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[rgb(var(--paper))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[rgb(var(--ink))] mb-4">
                {SERVICES.headline}
              </h1>
              <p className="text-lg lg:text-xl text-[rgb(var(--ink-muted))] max-w-2xl">
                {SERVICES.introduction}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 lg:py-20 bg-[rgb(var(--paper-dark))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {SERVICES.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-apple hover:shadow-apple-medium transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <span className="flex-shrink-0 font-heading text-3xl lg:text-4xl font-semibold text-[rgb(var(--brand))]/30">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h2 className="font-heading text-xl lg:text-2xl font-medium text-[rgb(var(--ink))] mb-3">
                        {service.title}
                      </h2>
                      <p className="text-[rgb(var(--ink-muted))] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[rgb(var(--paper))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[rgb(var(--brand))] rounded-3xl p-8 lg:p-12 text-center text-white">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                Haben wir Ihr Interesse geweckt?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Kontaktieren Sie uns für eine unverbindliche Beratung und ein kostenloses Angebot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-base font-medium text-[rgb(var(--brand))] bg-white hover:bg-[rgb(var(--paper))] rounded-full transition-all duration-200"
                >
                  <span>Offerte anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY.contact.phoneLink}`}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-base font-medium text-white border border-white/30 hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>{COMPANY.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
