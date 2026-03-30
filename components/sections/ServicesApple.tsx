"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data/content";
import { UNSPLASH_IMAGES } from "@/lib/images/unsplash";
import Image from "next/image";
import { useRef } from "react";

// Service images mapping
const serviceImages = [
  UNSPLASH_IMAGES.services.innenrenovation,
  UNSPLASH_IMAGES.services.fassadenrenovation,
  UNSPLASH_IMAGES.services.tapezierarbeiten,
  UNSPLASH_IMAGES.gallery.trowel,
  UNSPLASH_IMAGES.gallery.paintRoller,
  UNSPLASH_IMAGES.gallery.maskingTape,
  UNSPLASH_IMAGES.gallery.workshop,
  UNSPLASH_IMAGES.gallery.interiorDetail,
];

// Bento-style card with varied sizes - only headline visible, description on hover
function ServiceCard({ service, index }: { service: typeof SERVICES.services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  const image = serviceImages[index % serviceImages.length];
  
  // Define size variations for bento layout (7 services after removing bodenmarkierungen)
  const isLarge = index === 0 || index === 6;
  const isWide = index === 3;
  const isTall = index === 1 || index === 5;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className={`${
        isLarge ? "md:col-span-2 md:row-span-2" : 
        isWide ? "md:col-span-2" : 
        isTall ? "md:row-span-2" : 
        ""
      }`}
    >
      <Link href="/dienstleistungen" className="group block h-full">
        <motion.div 
          className="relative h-full overflow-hidden rounded-2xl bg-[#f5f5f7]"
          style={{ minHeight: isTall || isLarge ? "340px" : "240px" }}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Image with zoom effect */}
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <Image
              src={image.url}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : 
                     isWide ? "(max-width: 768px) 100vw, 66vw" : 
                     "(max-width: 768px) 100vw, 33vw"}
            />
          </motion.div>

          {/* Default gradient overlay - subtle */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
          
          {/* Hover strong dark overlay */}
          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content overlay on image */}
          <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
            {/* Number */}
            <span className="text-white/50 text-xs font-medium mb-2 tracking-wider uppercase">
              {service.number}
            </span>
            
            {/* Title - always visible */}
            <h3 className={`font-heading text-white font-semibold mb-2 ${
              isLarge ? "text-2xl md:text-3xl" : 
              isWide ? "text-xl md:text-2xl" : 
              "text-lg md:text-xl"
            }`}>
              {service.title}
            </h3>
            
            {/* Description - hidden by default, shown on hover */}
            <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 max-w-md">
              {service.description}
            </p>

            {/* Arrow indicator */}
            <motion.div
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function ServicesApple() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 lg:py-20 bg-[#f5f5f7] overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Apple style massive typography */}
        <div
          ref={headerRef}
          className="text-center mb-8 md:mb-10"
        >
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
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#2e4583] tracking-tight leading-[1.1] mb-4"
          >
            {SERVICES.headline}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto leading-relaxed"
          >
            {SERVICES.introduction}
          </motion.p>
        </div>

        {/* Bento Grid Layout - Interesting varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.services
            .filter(service => service.id !== "bodenmarkierungen")
            .map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
