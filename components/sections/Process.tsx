"use client";

import { motion } from "framer-motion";
<<<<<<< HEAD
import { Search, FileText, CheckCircle } from "lucide-react";
=======
import { Search, FileText, CheckCircle, ArrowRight } from "lucide-react";
>>>>>>> origin/main
import { PROCESS } from "@/lib/data/content";

const stepIcons = [Search, FileText, CheckCircle];

const stepWords = [
  ["Beratung", "Vor-Ort", "Kostenlos", "Fachkompetent"],
  ["Offerte", "Detailliert", "Fair", "Unverbindlich"],
  ["Ausführung", "Termin", "Qualität", "Garantie"],
];

export function Process() {
  return (
<<<<<<< HEAD
    <section className="relative py-16 sm:py-20 lg:py-32 bg-[#002146] overflow-hidden">
      {/* Background texture elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-amber-500/[0.04] rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
=======
    <section className="py-16 lg:py-24 bg-[#2e4583] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/main
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/main
            {PROCESS.headline}
          </h2>
        </motion.div>

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/main
                      {step.title}
                    </h3>

                    {/* Description */}
<<<<<<< HEAD
                    <p className="relative z-10 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-1 text-white/55">
                      {step.description}
                    </p>

                    {/* Tags */}
=======
                    <p className="relative z-10 text-white/70 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Word Cards */}
>>>>>>> origin/main
                    <div className="relative z-10 flex flex-wrap gap-2">
                      {words.map((word, wordIndex) => (
                        <motion.span
                          key={word}
<<<<<<< HEAD
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 + wordIndex * 0.05 }}
                          className="px-3 py-1 text-xs font-semibold rounded-full tracking-wide bg-white/8 text-white/60 border border-white/10"
=======
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 + wordIndex * 0.05 }}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                          className="px-3 py-1.5 text-xs font-medium text-white bg-white/10 rounded-full cursor-default transition-colors duration-200"
>>>>>>> origin/main
                        >
                          {word}
                        </motion.span>
                      ))}
                    </div>
<<<<<<< HEAD
=======

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    />
>>>>>>> origin/main
                  </motion.div>
                </motion.div>
              );
            })}
<<<<<<< HEAD
          </div>
=======
          </motion.div>
>>>>>>> origin/main
        </div>
      </div>
    </section>
  );
}
