"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Paintbrush, Home, Wallpaper, Sparkles, Droplets, Hammer, Shield, MapPin } from "lucide-react";
import { SERVICES } from "@/lib/data/content";
import { useState } from "react";

const icons = [Paintbrush, Home, Wallpaper, Sparkles, Droplets, Hammer, Shield, MapPin];

const BRAND_COLOR = "#2e4583";
const BRAND_LIGHT = "#3d5a9e";
const BRAND_DARK = "#1f3266";

// Smooth gradient orbs
function GradientOrb({ size, x, y, delay, opacity = 0.15 }: { size: number; x: string; y: string; delay: number; opacity?: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${BRAND_COLOR}40 0%, ${BRAND_LIGHT}20 40%, transparent 70%)`,
        opacity,
      }}
      animate={{
        x: [0, 40, -20, 30, 0],
        y: [0, -30, 20, -15, 0],
        scale: [1, 1.15, 0.95, 1.08, 1],
      }}
      transition={{ duration: 20, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// Captivating 3D card with tilt effect
function ServiceCard({ service, index }: { service: typeof SERVICES.services[0]; index: number }) {
  const Icon = icons[index % icons.length];
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.12, type: "spring", stiffness: 80 }}
    >
      <Link
        href="/dienstleistungen"
        className="group block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative h-full"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
          whileHover={{ z: 30 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow effect behind card */}
          <motion.div
            className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}60, ${BRAND_LIGHT}40)` }}
            animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Card */}
          <div className="relative h-full p-6 bg-white rounded-2xl border-2 border-[rgb(var(--line))] group-hover:border-[${BRAND_COLOR}] transition-all duration-500 overflow-hidden shadow-sm group-hover:shadow-xl">
            {/* Animated gradient background on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}08 0%, ${BRAND_LIGHT}05 100%)` }}
            />

            {/* Shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              animate={isHovered ? { x: "200%" } : { x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
            />

            {/* Floating accent */}
            <motion.div
              className="absolute -right-6 -top-6 w-24 h-24 rounded-full"
              style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}15, transparent)` }}
              animate={isHovered ? { scale: [1, 1.3, 1], rotate: [0, 45, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Number badge */}
            <motion.div
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold"
              style={{ backgroundColor: `${BRAND_COLOR}15`, color: BRAND_COLOR }}
              animate={isHovered ? { scale: [1, 1.1, 1], backgroundColor: `${BRAND_COLOR}25` } : {}}
              transition={{ duration: 0.5 }}
            >
              {service.number}
            </motion.div>

            {/* Icon with pulse */}
            <motion.div
              className="relative z-10 w-16 h-16 mb-5 flex items-center justify-center rounded-2xl"
              style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}15, ${BRAND_COLOR}08)` }}
              animate={isHovered ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={isHovered ? { rotate: [0, -10, 10, 0], scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-8 h-8" style={{ color: BRAND_COLOR }} />
              </motion.div>
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2"
                style={{ borderColor: BRAND_COLOR }}
                initial={{ scale: 1, opacity: 0 }}
                animate={isHovered ? { scale: [1, 1.4], opacity: [0.5, 0] } : { scale: 1, opacity: 0 }}
                transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
              />
            </motion.div>

            {/* Title with underline animation */}
            <h3 className="relative z-10 font-heading text-xl font-bold text-[rgb(var(--ink))] mb-3 transition-colors duration-300 group-hover:text-[${BRAND_COLOR}]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-sm text-[rgb(var(--ink-muted))] leading-relaxed line-clamp-3 mb-4">
              {service.description}
            </p>

            {/* Animated link */}
            <motion.div
              className="relative z-10 flex items-center text-sm font-bold"
              style={{ color: BRAND_COLOR }}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -15 }}
              transition={{ duration: 0.3 }}
            >
              <span>Mehr erfahren</span>
              <motion.div
                animate={isHovered ? { x: [0, 6, 0] } : {}}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <ArrowUpRight className="w-5 h-5 ml-1" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "#fafbfc" }}>
      {/* Smooth gradient background */}
      <div className="absolute inset-0">
        {/* Large smooth gradient orbs */}
        <GradientOrb size={600} delay={0} x="-15%" y="0%" opacity={0.12} />
        <GradientOrb size={500} delay={5} x="70%" y="40%" opacity={0.1} />
        <GradientOrb size={400} delay={10} x="40%" y="80%" opacity={0.08} />

        {/* Subtle top gradient */}
        <div
          className="absolute top-0 left-0 right-0 h-64"
          style={{ background: `linear-gradient(to bottom, ${BRAND_COLOR}08, transparent)` }}
        />

        {/* Subtle bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{ background: `linear-gradient(to top, ${BRAND_COLOR}06, transparent)` }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full mb-5"
            style={{ backgroundColor: `${BRAND_COLOR}15`, color: BRAND_COLOR }}
          >
            <Sparkles className="w-4 h-4" />
            Unser Angebot
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgb(var(--ink))] mb-5"
          >
            {SERVICES.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-[rgb(var(--ink-muted))] max-w-2xl mx-auto"
          >
            {SERVICES.introduction}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {SERVICES.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Link
            href="/dienstleistungen"
            className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-full transition-all duration-300 hover:shadow-2xl"
            style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}, ${BRAND_LIGHT})` }}
          >
            <span>Alle Dienstleistungen</span>
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className="w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
