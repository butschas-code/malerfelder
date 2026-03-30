"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { UNSPLASH_IMAGES } from "@/lib/images/unsplash";

// Curated gallery images for the signature Material Swipe Gallery
const galleryImages = [
  {
    id: "1",
    src: UNSPLASH_IMAGES.services.innenrenovation.url,
    title: "Innenrenovation",
    category: "Wohnraum",
    description: "Frische Wandfarbe mit präziser Abklebung"
  },
  {
    id: "2",
    src: UNSPLASH_IMAGES.services.fassadenrenovation.url,
    title: "Fassadenrenovation",
    category: "Aussenbereich",
    description: "Professionelle Gebäudesanierung"
  },
  {
    id: "3",
    src: UNSPLASH_IMAGES.services.tapezierarbeiten.url,
    title: "Tapezierarbeiten",
    category: "Innenbereich",
    description: "Makellose Tapetenverlegung"
  },
  {
    id: "4",
    src: UNSPLASH_IMAGES.gallery.paintRoller.url,
    title: "Detailarbeit",
    category: "Werkstatt",
    description: "Präzise Farbanwendung"
  },
  {
    id: "5",
    src: UNSPLASH_IMAGES.gallery.maskingTape.url,
    title: "Vorbereitung",
    category: "Planung",
    description: "Saubere Abklebearbeiten"
  },
  {
    id: "6",
    src: UNSPLASH_IMAGES.gallery.trowel.url,
    title: "Verputzen",
    category: "Technik",
    description: "Perfekte Oberflächenstruktur"
  }
];

// Material texture overlay component
function TextureOverlay({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Plaster texture simulation */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
      {/* Color tint */}
      <div className="absolute inset-0 bg-[rgb(var(--brand))]/10" />
      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}

// Individual gallery card with material swipe effect
function GalleryCard({ 
  image, 
  index, 
  isActive,
  onHover
}: { 
  image: typeof galleryImages[0]; 
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onHover(null);
  };

  return (
    <motion.div
      className="relative flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[400px] aspect-[3/4] cursor-pointer"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[rgb(var(--paper-dark))] shadow-apple hover:shadow-apple-large transition-shadow duration-300">
        {/* Image */}
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 300px, 400px"
        />
        
        {/* Material texture overlay on hover */}
        <TextureOverlay isActive={isActive} />
        
        {/* Content overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--brand2))]/90 via-transparent to-transparent"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: isActive ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Text content */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-6"
          initial={{ y: 10, opacity: 0.8 }}
          animate={{ 
            y: isActive ? 0 : 10, 
            opacity: isActive ? 1 : 0.8 
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-block px-2 py-1 text-xs font-medium bg-[rgb(var(--brand))]/20 text-white rounded-full mb-2">
            {image.category}
          </span>
          <h3 className="font-heading text-xl font-medium text-white mb-1">
            {image.title}
          </h3>
          <motion.p 
            className="text-sm text-white/80"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              height: isActive ? "auto" : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            {image.description}
          </motion.p>
        </motion.div>

        {/* Corner frame motif */}
        <svg 
          className="absolute top-4 right-4 w-8 h-8 text-white/30"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M16 0V16M16 16H32" />
        </svg>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[rgb(var(--paper))] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-[rgb(var(--brand))]/10 text-[rgb(var(--brand-dark))] rounded-full mb-4">
              Galerie
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#002146]">

              Arbeiten, keine Renderings
            </h2>
            <p className="text-lg text-[rgb(var(--ink-muted))] mt-4 max-w-xl">
              Bewegen Sie die Maus über die Bilder, um die Material-Details zu entdecken.
            </p>
          </div>
          
          {/* Navigation buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-[rgb(var(--paper-dark))] hover:bg-[rgb(var(--line))] transition-colors"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-[rgb(var(--paper-dark))] hover:bg-[rgb(var(--line))] transition-colors"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery scroll container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
        style={{ 
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch"
        }}
      >
        {/* Spacer for max-width alignment */}
        <div className="flex-shrink-0 w-[calc((100vw-1400px)/2)] hidden xl:block" />
        
        {galleryImages.map((image, index) => (
          <GalleryCard
            key={image.id}
            image={image}
            index={index}
            isActive={activeIndex === index}
            onHover={setActiveIndex}
          />
        ))}
        
        {/* End spacer */}
        <div className="flex-shrink-0 w-8" />
      </div>

      {/* Mobile scroll indicator */}
      <div className="sm:hidden mt-6 text-center">
        <p className="text-sm text-[rgb(var(--ink-muted))]">
          ← Wischen Sie, um mehr zu sehen →
        </p>
      </div>
    </section>
  );
}
