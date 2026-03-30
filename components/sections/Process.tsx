"use client";

import { motion } from "framer-motion";
import { Search, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { PROCESS } from "@/lib/data/content";

const stepIcons = [Search, FileText, CheckCircle];

const stepWords = [
  ["Beratung", "Vor-Ort", "Kostenlos", "Fachkompetent"],
  ["Offerte", "Detailliert", "Fair", "Unverbindlich"],
  ["Ausführung", "Termin", "Qualität", "Garantie"],
];

export function Process() {
  return (
    <section className="py-16 lg:py-24 bg-[#2e4583] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 text-sm font-medium bg-white/10 text-white rounded-full mb-4"
          >
            So funktioniert es
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
            {PROCESS.headline}
          </h2>
        </motion.div>

        {/* Process Steps - Connected Cards */}
        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {PROCESS.steps.map((step, index) => {
              const Icon = stepIcons[index];
              const words = stepWords[index];
              const isLast = index === PROCESS.steps.length - 1;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connector arrow - hidden on mobile, shown on md+ */}
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-white/30"
                    >
                      <ArrowRight className="w-8 h-8" />
                    </motion.div>
                  )}

                  {/* Main Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 lg:p-8 overflow-hidden group"
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    
                    {/* Number badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="relative z-10 w-14 h-14 flex items-center justify-center bg-white text-[#2e4583] rounded-2xl mb-6 shadow-lg"
                    >
                      <span className="font-heading text-2xl font-bold">
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="relative z-10 w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl mb-4"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="relative z-10 font-heading text-xl lg:text-2xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-white/70 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Word Cards */}
                    <div className="relative z-10 flex flex-wrap gap-2">
                      {words.map((word, wordIndex) => (
                        <motion.span
                          key={word}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 + wordIndex * 0.05 }}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                          className="px-3 py-1.5 text-xs font-medium text-white bg-white/10 rounded-full cursor-default transition-colors duration-200"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </div>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
