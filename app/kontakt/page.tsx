import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { CONTACT, COMPANY, SERVICE_AREA } from "@/lib/data/content";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";


export const metadata: Metadata = {
  title: CONTACT.meta.title,
  description: CONTACT.meta.description,
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
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

              {CONTACT.ctaText}
            </p>
          </div>
        </section>

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

                      Jetzt anrufen →
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.contact.email}`}
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

                      E-Mail schreiben →
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-5 p-7 bg-white rounded-3xl border border-black/[0.04] shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-1">Adresse</p>
                    <p className="font-semibold text-[#002146]">{COMPANY.name}</p>
                    <p className="text-[#6e6e73]">{COMPANY.address.street}</p>
                    <p className="text-[#6e6e73]">{COMPANY.address.zip} {COMPANY.address.city}</p>

                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
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

                  <div className="flex flex-wrap gap-2">
                    {SERVICE_AREA.areas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 text-xs font-medium bg-[#f5f5f7] text-[#002146] rounded-full border border-black/[0.06]"

                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

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

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
