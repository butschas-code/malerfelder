import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { DATENSCHUTZ, COMPANY } from "@/lib/data/content";

export const metadata: Metadata = {
  title: DATENSCHUTZ.meta.title,
  description: DATENSCHUTZ.meta.description,
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[rgb(var(--paper))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[rgb(var(--ink))]">
              {DATENSCHUTZ.headline}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-20 bg-[rgb(var(--paper-dark))]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Allgemeine Hinweise */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {DATENSCHUTZ.sections.general.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple space-y-4">
                  {DATENSCHUTZ.sections.general.content.map((paragraph, index) => (
                    <p key={index} className="text-[rgb(var(--ink-muted))] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Anspruch auf Auskunft */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {DATENSCHUTZ.sections.rights.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple space-y-4">
                  {DATENSCHUTZ.sections.rights.content.map((paragraph, index) => (
                    <p key={index} className="text-[rgb(var(--ink-muted))] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Änderung */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {DATENSCHUTZ.sections.changes.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple">
                  <p className="text-[rgb(var(--ink-muted))] leading-relaxed">
                    {DATENSCHUTZ.sections.changes.content[0]}
                  </p>
                </div>
              </div>

              {/* SSL */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {DATENSCHUTZ.sections.ssl.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple space-y-4">
                  {DATENSCHUTZ.sections.ssl.content.map((paragraph, index) => (
                    <p key={index} className="text-[rgb(var(--ink-muted))] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Server-Log */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {DATENSCHUTZ.sections.serverLogs.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple space-y-4">
                  {DATENSCHUTZ.sections.serverLogs.content.map((paragraph, index) => (
                    <p key={index} className="text-[rgb(var(--ink-muted))] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {DATENSCHUTZ.sections.cookies.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple space-y-4">
                  {DATENSCHUTZ.sections.cookies.content.map((paragraph, index) => (
                    <p key={index} className="text-[rgb(var(--ink-muted))] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Kontaktformular */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {DATENSCHUTZ.sections.contactForm.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple">
                  <p className="text-[rgb(var(--ink-muted))] leading-relaxed">
                    {DATENSCHUTZ.sections.contactForm.content[0]}
                  </p>
                </div>
              </div>

              {/* Google reCAPTCHA */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {DATENSCHUTZ.sections.recaptcha.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple space-y-4">
                  {DATENSCHUTZ.sections.recaptcha.content.map((paragraph, index) => (
                    <p key={index} className="text-[rgb(var(--ink-muted))] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-6 bg-[rgb(var(--brand))]/10 rounded-2xl">
                <h3 className="font-heading text-lg font-semibold text-[rgb(var(--ink))] mb-2">
                  Verantwortlich für die Datenverarbeitung
                </h3>
                <p className="text-[rgb(var(--ink-muted))]">
                  {COMPANY.name}<br />
                  {COMPANY.address.street}<br />
                  {COMPANY.address.zip} {COMPANY.address.city}<br />
                  E-Mail: {COMPANY.contact.email}
                </p>
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
