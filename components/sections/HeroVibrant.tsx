"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Phone, Paintbrush, Palette, Sparkles, Star } from "lucide-react";
import { HOME, COMPANY, TRUST_BADGES } from "@/lib/data/content";
import { useEffect, useState } from "react";

function GradientOrb({ color, size, x, y, delay }: { color: string; size: number; x: string; y: string; delay: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${color}`}
      style={{ width: size, height: size, left: x, top: y }}
      animate={{ x: [0, 80, -40, 60, 0], y: [0, -60, 40, -30, 0], scale: [1, 1.3, 0.8, 1.2, 1] }}
      transition={{ duration: 12, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function FloatingParticle({ delay, color, size }: { delay: number; color: string; size: number }) {
  return (
    <motion.div
      className={`absolute rounded-full ${color} opacity-60`}
      style={{ width: size, height: size }}
      initial={{ x: Math.random() * 100 + "%", y: "110%" }}
      animate={{ y: ["110%", "-10%"], x: ["0%", "30%", "-20%", "10%", "0%"], rotate: [0, 360, 720], scale: [1, 1.2, 0.8, 1] }}
      transition={{ duration: 10, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

function ColorRing() {
  return (
    <motion.div
      className="absolute right-[5%] top-[15%] w-80 h-80 opacity-30 pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 rounded-full"
          style={{
            backgroundColor: `hsl(${i * 30}, 80%, 60%)`,
            left: `${50 + 42 * Math.cos((i * Math.PI * 2) / 12)}%`,
            top: `${50 + 42 * Math.sin((i * Math.PI * 2) / 12)}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </motion.div>
  );
}

function BrushCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const y = useSpring(mouseY, { damping: 30, stiffness: 200 });
  const rotate = useTransform(x, [-500, 500], [-20, 20]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 24);
      mouseY.set(e.clientY - 24);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div className="fixed w-12 h-12 pointer-events-none z-50 hidden lg:flex" style={{ x, y, rotate }}>
      <Paintbrush className="w-10 h-10 text-amber-400 drop-shadow-lg" />
    </motion.div>
  );
}

function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tight">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-4"
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.15, color: i % 2 === 0 ? "#FCD34D" : "#FFFFFF", transition: { duration: 0.15 } }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

function BouncingIcon({ icon: Icon, delay, x, y }: { icon: typeof Star; delay: number; x: string; y: string }) {
  return (
    <motion.div className="absolute text-white/30" style={{ left: x, top: y }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay, duration: 0.4 }}>
      <motion.div animate={{ y: [0, -30, 0], rotate: [0, 15, -15, 0] }} transition={{ duration: 2.5, delay: delay * 1.5, repeat: Infinity, ease: "easeInOut" }}>
        <Icon className="w-16 h-16" />
      </motion.div>
    </motion.div>
  );
}

export function HeroVibrant() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-110">
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-amber-500/40 to-yellow-400/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-rose-500/30" />
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/20 via-transparent to-pink-500/20" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Animated Gradient Orbs */}
      <GradientOrb color="bg-orange-500" size={500} delay={0} x="-15%" y="10%" />
      <GradientOrb color="bg-amber-400" size={400} delay={2} x="75%" y="50%" />
      <GradientOrb color="bg-rose-400" size={450} delay={4} x="55%" y="-5%" />
      <GradientOrb color="bg-blue-400" size={300} delay={1} x="25%" y="65%" />
      <GradientOrb color="bg-purple-400" size={350} delay={3} x="85%" y="20%" />

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 0.5}
          color={["bg-orange-400", "bg-amber-300", "bg-rose-400", "bg-blue-400", "bg-yellow-400", "bg-purple-400"][i % 6]}
          size={[8, 12, 16, 10, 14, 6][i % 6]}
        />
      ))}

      <ColorRing />
      <BouncingIcon icon={Palette} delay={0.5} x="15%" y="25%" />
      <BouncingIcon icon={Sparkles} delay={1} x="80%" y="35%" />
      <BouncingIcon icon={Star} delay={1.5} x="70%" y="75%" />
      <BrushCursor />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Trust badges */}
          <motion.div className="flex flex-wrap gap-3 mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {TRUST_BADGES.map((badge, index) => (
              <motion.span
                key={index}
                className="inline-flex items-center px-5 py-2.5 text-sm font-bold bg-white/20 backdrop-blur-md text-white rounded-full border-2 border-white/40"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.4)", borderColor: "rgba(255,255,255,0.8)" }}
              >
                <motion.span className="mr-2 text-amber-300" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}>
                  {badge.label}
                </motion.span>
                <span className="text-white/90">{badge.description}</span>
              </motion.span>
            ))}
          </motion.div>

          {mounted && <AnimatedTitle text={HOME.hero.headline} />}

          <motion.p className="text-2xl sm:text-3xl text-white/90 leading-relaxed mb-12 max-w-3xl font-light" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
            {HOME.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-col sm:flex-row gap-5" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link href="/kontakt" className="group inline-flex items-center space-x-3 px-10 py-5 text-xl font-bold text-orange-900 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 hover:from-amber-200 hover:via-yellow-200 hover:to-amber-300 rounded-full shadow-2xl shadow-amber-500/40">
                <span>Offerte anfragen</span>
                <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <a href={`tel:${COMPANY.contact.phoneLink}`} className="inline-flex items-center space-x-3 px-10 py-5 text-xl font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-full border-2 border-white/50 hover:border-white/70">
                <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                  <Phone className="w-6 h-6" />
                </motion.div>
                <span>{COMPANY.contact.phone}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div className="flex flex-wrap gap-12 mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            {[
              { value: "16+", label: "Jahre Erfahrung" },
              { value: "500+", label: "Zufriedene Kunden" },
              { value: "100%", label: "Schweizer Qualitat" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.15, y: -8 }}
                className="text-center cursor-default"
              >
                <motion.p className="font-heading text-4xl font-black text-amber-300" animate={{ textShadow: ["0 0 0px rgba(251,191,36,0)", "0 0 30px rgba(251,191,36,0.8)", "0 0 0px rgba(251,191,36,0)"] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}>
                  {stat.value}
                </motion.p>
                <p className="text-sm text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <motion.path
            fill="rgb(var(--paper))"
            animate={{ d: ["M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z", "M0 60C240 0 480 120 720 60C960 0 1200 120 1440 60V120H0V60Z", "M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <div className="w-7 h-12 border-2 border-white/60 rounded-full flex justify-center">
          <motion.div className="w-2 h-3 bg-white rounded-full mt-2" animate={{ y: [0, 16, 0], opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}
