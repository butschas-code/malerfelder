import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { CONTACT, COMPANY, SERVICE_AREA } from "@/lib/data/content";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: CONTACT.meta.title,
  description: CONTACT.meta.description,
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Header */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[rgb(var(--paper))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[rgb(var(--ink))] mb-4">
              {CONTACT.headline}
            </h1>
            <p className="text-lg lg:text-xl text-[rgb(var(--ink-muted))] max-w-2xl">
              {CONTACT.ctaText}
            </p>
          </div>
        </section>

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
                      Jetzt anrufen →
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.contact.email}`}
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
                      E-Mail schreiben →
                    </p>
                  </div>
                </a>

                {/* Address */}
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
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
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
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_AREA.areas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 text-sm bg-[rgb(var(--paper-dark))] rounded-full text-[rgb(var(--ink-muted))]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
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
