"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT, COMPANY } from "@/lib/data/content";
import { UNSPLASH_IMAGES } from "@/lib/images/unsplash";
import { Award, Calendar } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[rgb(var(--paper))]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-apple-large">
              <Image
                src="/patrick-felder.png"
                alt="Patrick Felder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(var(--brand2))]/10 via-transparent to-transparent" />
            </div>

          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-[rgb(var(--brand))]/10 text-[rgb(var(--brand))] rounded-full mb-4"
            >
              <Award className="w-4 h-4" />
              Über mich
            </motion.span>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#002146] mb-3 sm:mb-4">
              {ABOUT.person.name}
            </h2>
            <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 font-medium mb-6">
              {ABOUT.person.role}
            </p>

            <div className="space-y-4 mb-8">
              {ABOUT.biography.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="text-[rgb(var(--ink-muted))] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Timeline */}
            <div className="pt-6 border-t border-[rgb(var(--line))]">
              <div className="flex items-center gap-2 mb-4 text-sm text-[rgb(var(--ink-muted))]">
                <Calendar className="w-4 h-4" />
                <span>Werdegang</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {ABOUT.timeline.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[rgb(var(--brand))]" />
                    <div>
                      <p className="font-medium text-[rgb(var(--ink))] text-sm">{item.year}</p>
                      <p className="text-xs text-[rgb(var(--ink-muted))]">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
