"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SERVICES, COMPANY } from "@/lib/data/content";
import { SERVICE_IMAGES } from "@/lib/images/unsplash";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

// Expanded descriptions for the full services page
const EXPANDED_DESCRIPTIONS: Record<string, string[]> = {
  "innenrenovationen": [
    "Ob frische Wandfarbe, stilvolle Akzente oder eine komplette Raumgestaltung – wir verleihen Ihren Innenräumen neuen Glanz. Mit präziser Handwerksarbeit und einem Auge fürs Detail entstehen Oberflächen, die nicht nur schön aussehen, sondern auch langlebig sind.",
    "Wir beraten Sie persönlich bei der Farbwahl und der Auswahl der richtigen Materialien. Von der sorgfältigen Vorbereitung des Untergrunds bis zum finalen Anstrich – jeder Schritt wird mit höchster Sorgfalt ausgeführt. Das Resultat: Räume, die Sie täglich begeistern."
  ],
  "fassadenrenovationen": [
    "Die Fassade ist das Gesicht Ihres Gebäudes – sie schützt vor Witterungseinflüssen und prägt den ersten Eindruck. Wind, Regen und UV-Strahlung hinterlassen mit der Zeit sichtbare Spuren: Risse, Verfärbungen und abblätternder Anstrich.",
    "Wir sanieren Ihre Fassade fachgerecht: von der gründlichen Reinigung über die Ausbesserung von Schäden bis hin zum professionellen Neuanstrich mit witterungsbeständigen Farben. So schützen wir Ihr Gebäude langfristig und steigern dessen Wert."
  ],
  "tapezierarbeiten": [
    "Eine Tapete verwandelt einen Raum – sie schafft Atmosphäre, setzt Akzente und verleiht jedem Zimmer eine eigene Persönlichkeit. Egal ob zeitlos schlicht, grafisch-modern oder mit edlen Strukturen: Wir finden gemeinsam mit Ihnen das Richtige.",
    "Das fachgerechte Entfernen der alten Tapete, die Vorbereitung des Untergrunds und das präzise Zuschneiden und Anbringen der neuen Bahnen – das überlassen Sie besser uns. So entsteht ein makelloses Ergebnis ohne Luftblasen, Versatz oder Fugen."
  ],
  "moos-schimmel": [
    "Schimmel und Moos sind mehr als ein optisches Problem: Sie können die Bausubstanz schädigen und bei dauerhaftem Befall auch die Raumluftqualität beeinträchtigen. Eine schnelle und gründliche Behandlung ist deshalb wichtig.",
    "Wir entfernen Schimmel und Moos nachhaltig – mit geprüften, umweltverträglichen Mitteln und der nötigen Schutzausrüstung. Anschliessend behandeln wir die betroffenen Flächen, um einem Wiederbefall wirksam vorzubeugen. Für dauerhaft saubere Wände, Decken und Fassaden."
  ],
  "wasserschaden": [
    "Ein Wasserschaden hinterlässt nicht nur Feuchtigkeitsschäden, sondern oft auch Flecken, Verfärbungen und aufgeworfene Farbschichten, die das Erscheinungsbild eines Raumes stark beeinträchtigen. Wir bringen Ihre Wände und Decken wieder in einwandfreien Zustand.",
    "Nach dem eigentlichen Trocknungsprozess übernehmen wir die malerische Wiederherstellung: Wir schleifen, grundieren und streichen die betroffenen Flächen so, dass kein Hinweis auf den Schaden zurückbleibt. Diskret, sauber und termingerecht."
  ],
  "spritz-gips": [
    "Manchmal braucht es nur Kleinigkeiten, um ein Zimmer wieder frisch und gepflegt aussehen zu lassen. Wir übernehmen kleine Spritz- und Gipserarbeiten, die grossen Unterschied machen: Risse schliessen, Unebenheiten ausgleichen, Abschnitte neu verputzen.",
    "Ob ein einzelner Flicken oder eine ganze Wand – wir arbeiten sorgfältig und passen die Oberfläche nahtlos an die bestehende Umgebung an. So entsteht ein gleichmässiges, gepflegtes Finish, das sich harmonisch ins Gesamtbild einfügt."
  ],
  "beton-impraegnierung": [
    "Beton und Naturstein sind robust, aber porös – ohne Schutz dringt Feuchtigkeit ein, es entstehen Ausblühungen, Moos und Frostschäden. Eine professionelle Imprägnierung ist die beste Vorbeugung.",
    "Wir reinigen die Flächen gründlich und tragen anschliessend eine leistungsstarke Imprägnierung auf, die tief in den Untergrund eindringt. Das Ergebnis ist ein unsichtbarer Schutzfilm, der Wasser, Schmutz und Witterungseinflüsse langfristig abhält – ohne das natürliche Erscheinungsbild zu verändern."
  ],
  "bodenmarkierungen": [
    "Klare Bodenmarkierungen sind auf Parkplätzen, in Tiefgaragen und auf Betriebsgeländen nicht nur eine Frage der Ordnung, sondern auch der Sicherheit. Gut lesbare Linien, Zahlen und Symbole sorgen für einen reibungslosen Ablauf und einen professionellen Eindruck.",
    "Wir führen Bodenmarkierungsarbeiten präzise aus – mit strapazierfähigen Farben, die auch unter starker Belastung und wechselnden Witterungsbedingungen ihre Leuchtkraft behalten. Sauber, haltbar und genau nach Ihren Vorgaben."
  ],
};

export default function DienstleistungenPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[#f5f5f7]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
                Unser Angebot
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#002146] tracking-tight leading-[1.1] mb-4">
                {SERVICES.headline}
              </h1>
              <p className="text-lg lg:text-xl text-[#86868b] max-w-2xl">
                {SERVICES.introduction}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services list */}
        <section className="py-12 lg:py-16 bg-[#f5f5f7]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 lg:space-y-8">
              {SERVICES.services.filter(s => s.id !== "beton-impraegnierung" && s.id !== "bodenmarkierungen").map((service, index) => {
                const image = SERVICE_IMAGES[service.id];
                const expanded = EXPANDED_DESCRIPTIONS[service.id] ?? [service.description];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/[0.04]"
                  >
                    <div className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>
                      {/* Image */}
                      <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px]">
                        {image?.url ? (
                          <Image
                            src={image.url}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-[#e8e8ed]" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <span className="text-xs font-semibold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-3">
                          {service.number}
                        </span>
                        <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-[#002146] mb-5">
                          {service.title}
                        </h2>
                        <div className="space-y-3">
                          {expanded.map((para, i) => (
                            <p key={i} className="text-[#6e6e73] leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-[#002146] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Kontakt
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4"
            >
              Haben wir Ihr Interesse geweckt?
            </motion.h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg">
              Kontaktieren Sie uns für eine unverbindliche Beratung und ein kostenloses Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/40"
                >
                  <span>Offerte anfragen</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={`tel:${COMPANY.contact.phoneLink}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>{COMPANY.contact.phone}</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
