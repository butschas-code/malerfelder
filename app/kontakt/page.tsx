import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { CONTACT, COMPANY, SERVICE_AREA } from "@/lib/data/content";
<<<<<<< HEAD
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
=======
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
>>>>>>> origin/main

export const metadata: Metadata = {
  title: CONTACT.meta.title,
  description: CONTACT.meta.description,
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
<<<<<<< HEAD
        {/* Header */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[#f5f5f7]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Kontakt
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#002146] tracking-tight leading-[1.1] mb-4">
              {CONTACT.headline}
            </h1>
            <p className="text-lg lg:text-xl text-[#86868b] max-w-2xl">
=======
        {/* Hero Header */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[rgb(var(--paper))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[rgb(var(--ink))] mb-4">
              {CONTACT.headline}
            </h1>
            <p className="text-lg lg:text-xl text-[rgb(var(--ink-muted))] max-w-2xl">
>>>>>>> origin/main
              {CONTACT.ctaText}
            </p>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact content */}
        <section className="py-12 lg:py-20 bg-[#f5f5f7]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Left: contact cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY.contact.phoneLink}`}
                  className="group flex items-start gap-5 p-7 bg-white rounded-3xl border border-black/[0.04] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-1">Telefon</p>
                    <p className="font-heading text-xl font-semibold text-[#002146]">
                      {COMPANY.contact.phone}
                    </p>
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mt-1 font-medium">
=======
        {/* Contact Info */}
        <section className="py-12 lg:py-20 bg-[rgb(var(--paper-dark))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Methods */}
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  Direkt kontaktieren
                </h2>

                {/* Phone */}
                <a
                  href={`tel:${COMPANY.contact.phoneLink}`}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-apple hover:shadow-apple-medium transition-shadow"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[rgb(var(--brand))]/10 rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5 text-[rgb(var(--brand))]" />
                  </div>
                  <div>
                    <p className="text-sm text-[rgb(var(--ink-muted))] mb-1">Telefon</p>
                    <p className="font-heading text-xl font-medium text-[rgb(var(--ink))]">
                      {COMPANY.contact.phone}
                    </p>
                    <p className="text-sm text-[rgb(var(--brand))] mt-1">
>>>>>>> origin/main
                      Jetzt anrufen →
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.contact.email}`}
<<<<<<< HEAD
                  className="group flex items-start gap-5 p-7 bg-white rounded-3xl border border-black/[0.04] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-1">E-Mail</p>
                    <p className="font-heading text-xl font-semibold text-[#002146]">
                      {COMPANY.contact.email}
                    </p>
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mt-1 font-medium">
=======
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-apple hover:shadow-apple-medium transition-shadow"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[rgb(var(--brand))]/10 rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5 text-[rgb(var(--brand))]" />
                  </div>
                  <div>
                    <p className="text-sm text-[rgb(var(--ink-muted))] mb-1">E-Mail</p>
                    <p className="font-heading text-xl font-medium text-[rgb(var(--ink))]">
                      {COMPANY.contact.email}
                    </p>
                    <p className="text-sm text-[rgb(var(--brand))] mt-1">
>>>>>>> origin/main
                      E-Mail schreiben →
                    </p>
                  </div>
                </a>

                {/* Address */}
<<<<<<< HEAD
                <div className="flex items-start gap-5 p-7 bg-white rounded-3xl border border-black/[0.04] shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-1">Adresse</p>
                    <p className="font-semibold text-[#002146]">{COMPANY.name}</p>
                    <p className="text-[#6e6e73]">{COMPANY.address.street}</p>
                    <p className="text-[#6e6e73]">{COMPANY.address.zip} {COMPANY.address.city}</p>
=======
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-apple">
                  <div className="w-12 h-12 flex items-center justify-center bg-[rgb(var(--brand))]/10 rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[rgb(var(--brand))]" />
                  </div>
                  <div>
                    <p className="text-sm text-[rgb(var(--ink-muted))] mb-1">Adresse</p>
                    <p className="font-medium text-[rgb(var(--ink))]">{COMPANY.name}</p>
                    <p className="text-[rgb(var(--ink-muted))]">{COMPANY.address.street}</p>
                    <p className="text-[rgb(var(--ink-muted))]">
                      {COMPANY.address.zip} {COMPANY.address.city}
                    </p>
>>>>>>> origin/main
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
                      className="inline-flex items-center gap-1 text-sm text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 font-medium mt-2 hover:opacity-80"
                    >
                      Route planen
                      <ExternalLink className="w-3 h-3 text-orange-500" />
                    </a>
                  </div>
                </div>

                {/* Service area */}
                <div className="p-7 bg-white rounded-3xl border border-black/[0.04] shadow-sm">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-3">
                    {SERVICE_AREA.headline}
                  </p>
                  <p className="text-[#6e6e73] mb-4 text-sm leading-relaxed">{SERVICE_AREA.description}</p>
=======
                      className="inline-flex items-center gap-1 text-sm text-[rgb(var(--brand))] mt-2 hover:underline"
                    >
                      Route planen
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map & Service Area */}
              <div className="space-y-6">
                {/* Map */}
                <div className="aspect-video rounded-2xl overflow-hidden shadow-apple">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.0!2d8.3!3d47.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA2JzAwLjAiTiA4wrAxNyczNi4wIkU!5e0!3m2!1sde!2sch!4v1600000000000!5m2!1sde!2sch&q=${encodeURIComponent(
                      `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`
                    )}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Standort ${COMPANY.name}`}
                  />
                </div>

                {/* Service Area */}
                <div className="p-6 bg-white rounded-2xl shadow-apple">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[rgb(var(--brand))]" />
                    <h3 className="font-heading text-lg font-medium text-[rgb(var(--ink))]">
                      {SERVICE_AREA.headline}
                    </h3>
                  </div>
                  <p className="text-[rgb(var(--ink-muted))] mb-4">{SERVICE_AREA.description}</p>
>>>>>>> origin/main
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_AREA.areas.map((area) => (
                      <span
                        key={area}
<<<<<<< HEAD
                        className="px-3 py-1 text-xs font-medium bg-[#f5f5f7] text-[#002146] rounded-full border border-black/[0.06]"
=======
                        className="px-3 py-1 text-sm bg-[rgb(var(--paper-dark))] rounded-full text-[rgb(var(--ink-muted))]"
>>>>>>> origin/main
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
<<<<<<< HEAD

              {/* Right: map */}
              <div className="rounded-3xl overflow-hidden shadow-sm border border-black/[0.04] aspect-square lg:aspect-auto lg:min-h-[600px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.0!2d8.3!3d47.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA2JzAwLjAiTiA4wrAxNyczNi4wIkU!5e0!3m2!1sde!2sch!4v1600000000000!5m2!1sde!2sch&q=${encodeURIComponent(
                    `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`
                  )}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Standort ${COMPANY.name}`}
                />
              </div>
=======
>>>>>>> origin/main
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
