import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { IMPRESSUM, COMPANY } from "@/lib/data/content";

export const metadata: Metadata = {
  title: IMPRESSUM.meta.title,
  description: IMPRESSUM.meta.description,
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[rgb(var(--paper))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[rgb(var(--ink))]">
              {IMPRESSUM.headline}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-20 bg-[rgb(var(--paper-dark))]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Kontakt */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {IMPRESSUM.sections.contact.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple">
                  <p className="font-medium text-[rgb(var(--ink))]">{COMPANY.name}</p>
                  <p className="text-[rgb(var(--ink-muted))]">{COMPANY.address.street}</p>
                  <p className="text-[rgb(var(--ink-muted))]">
                    {COMPANY.address.zip} {COMPANY.address.city}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[rgb(var(--line))] space-y-2">
                    <p>
                      <span className="text-[rgb(var(--ink-muted))]">Telefon: </span>
                      <a 
                        href={`tel:${COMPANY.contact.phoneLink}`}
                        className="text-[rgb(var(--brand))] hover:underline"
                      >
                        {COMPANY.contact.phone}
                      </a>
                    </p>
                    <p>
                      <span className="text-[rgb(var(--ink-muted))]">E-Mail: </span>
                      <a 
                        href={`mailto:${COMPANY.contact.email}`}
                        className="text-[rgb(var(--brand))] hover:underline"
                      >
                        {COMPANY.contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Handelsregistereintrag */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {IMPRESSUM.sections.commercialRegister.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple space-y-2">
                  {IMPRESSUM.sections.commercialRegister.content.map((line, index) => (
                    <p key={index} className="text-[rgb(var(--ink-muted))]">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Urheberrechte */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--ink))] mb-6">
                  {IMPRESSUM.sections.copyright.title}
                </h2>
                <div className="p-6 bg-white rounded-2xl shadow-apple">
                  <p className="text-[rgb(var(--ink-muted))] leading-relaxed">
                    {IMPRESSUM.sections.copyright.content[0]}
                  </p>
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
