"use client";

import { motion } from "framer-motion";
import { Search, FileText, CheckCircle } from "lucide-react";

import { PROCESS } from "@/lib/data/content";

const stepIcons = [Search, FileText, CheckCircle];

const stepWords = [
  ["Beratung", "Vor-Ort", "Kostenlos", "Fachkompetent"],
  ["Offerte", "Detailliert", "Fair", "Unverbindlich"],
  ["Ausführung", "Termin", "Qualität", "Garantie"],
];

export function Process() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-[#002146] overflow-hidden">
      {/* Background texture elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-amber-500/[0.04] rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full mb-5"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            So funktioniert es
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white max-w-2xl leading-tight">

            {PROCESS.headline}
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              className="origin-left h-px bg-gradient-to-r from-amber-500/60 via-orange-400/40 to-transparent mx-[calc(16.67%+2rem)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
            {PROCESS.steps.map((step, index) => {
              const Icon = stepIcons[index];
              const words = stepWords[index];

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.18, ease: [0.23, 1, 0.32, 1] }}
                  className="relative group"
                >
                  {/* Step number — large background numeral */}
                  <div className="absolute -top-2 sm:-top-4 -left-1 sm:-left-2 font-heading text-[6rem] sm:text-[8rem] font-bold leading-none text-white/[0.04] select-none pointer-events-none">
                    {step.number}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 overflow-hidden h-full flex flex-col border bg-white/[0.04] border-white/10 backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                    {/* Top row: step number pill + icon */}
                    <div className="relative z-10 flex items-center justify-between mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl font-heading text-lg font-bold shadow-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-orange-500/40">
                        {step.number}
                      </span>
                      <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/8 border border-white/10">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 font-heading text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 text-white">

                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-1 text-white/55">
                      {step.description}
                    </p>

                    {/* Tags */}

                    <div className="relative z-10 flex flex-wrap gap-2">
                      {words.map((word, wordIndex) => (
                        <motion.span
                          key={word}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 + wordIndex * 0.05 }}
                          className="px-3 py-1 text-xs font-semibold rounded-full tracking-wide bg-white/8 text-white/60 border border-white/10"

                        >
                          {word}
                        </motion.span>
                      ))}
                    </div>

                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
