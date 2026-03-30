"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data/content";
import { SERVICE_IMAGES } from "@/lib/images/unsplash";
import Image from "next/image";
import { useRef } from "react";

// Per-card layout: col/row spans + title size on desktop
const CARD_LAYOUTS = [
  { col: "lg:col-span-7", row: "lg:row-span-2", titleSize: "text-2xl md:text-3xl" }, // big hero
  { col: "lg:col-span-5", row: "",              titleSize: "text-xl md:text-2xl"   },
  { col: "lg:col-span-5", row: "",              titleSize: "text-xl md:text-2xl"   },
  { col: "lg:col-span-4", row: "",              titleSize: "text-lg md:text-xl"    },
  { col: "lg:col-span-4", row: "",              titleSize: "text-lg md:text-xl"    },
  { col: "lg:col-span-4", row: "",              titleSize: "text-lg md:text-xl"    },
];

function ServiceCard({ service, index }: { service: typeof SERVICES.services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const image = SERVICE_IMAGES[service.id] ?? { url: "", alt: service.title };
  const layout = CARD_LAYOUTS[index] ?? CARD_LAYOUTS[5];
  const isHero = index === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
      className={`${layout.col} ${layout.row}`}
    >
      <Link href="/dienstleistungen" className="group block h-full">
        <motion.div
          className="relative h-full overflow-hidden rounded-2xl bg-[#d1d1d6]"
          style={{ minHeight: isHero ? "360px" : "200px" }}
          whileHover={{ scale: 0.985 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Image */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={isInView ? { scale: 1 } : { scale: 1.08 }}
            transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <Image
              src={image.url}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes={isHero ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 33vw"}
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Text */}
          <div className="relative h-full flex flex-col justify-end p-4 sm:p-5 md:p-7">
            <span className="text-white/50 text-xs font-medium mb-2 tracking-widest uppercase">
              {service.number}
            </span>
            <h3 className={`font-heading text-white font-semibold mb-2 ${layout.titleSize}`}>
              {service.title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 max-w-sm">
              {service.description}
            </p>
          </div>

          {/* Arrow */}
          <motion.div
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function ServicesApple() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const filtered = SERVICES.services.filter(
    s => s.id !== "bodenmarkierungen" && s.id !== "beton-impraegnierung"
  );

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#f5f5f7] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Header — constrained */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 md:mb-10">
        <div ref={headerRef} className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Unser Angebot
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#002146] tracking-tight leading-[1.1] mb-4"
          >
            {SERVICES.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto leading-relaxed"
          >
            {SERVICES.introduction}
          </motion.p>
        </div>
      </div>

      {/* Full-width bento grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
          {filtered.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
