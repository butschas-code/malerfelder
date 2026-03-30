"use client";

import { motion } from "framer-motion";

export function Welcome() {
  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-[#f5f5f7]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 font-medium mb-3 sm:mb-4 block">
            Willkommen bei Maler Patrick Felder
          </span>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1d1d1f] leading-relaxed font-medium">
            Mit über{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 font-semibold">
              16 Jahren Erfahrung
            </span>{" "}
            und einem Auge für Details verwandeln wir Ihre Räume in etwas Besonderes. Von der ersten Beratung bis zum finalen Pinselstrich – wir begleiten Sie auf dem Weg zu Ihrem Traumzuhause.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
