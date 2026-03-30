// =============================================================================
// CURATED UNSPLASH IMAGE LIBRARY
// Editorial, real craft scenes - NO tech/startup stock imagery
// Keywords: painter at work, plasterer, drywall finishing, painting wall,
// craftsman, workshop tools, facade renovation, swiss house exterior,
// interior renovation, masking tape paint, trowel plaster
// =============================================================================

export const UNSPLASH_IMAGES = {
  // Hero / Editorial hero image
  hero: {
    id: "painter-hero",
    url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80",
    alt: "Maler bei der Arbeit - Professionelle Wandgestaltung",
    photographer: "Unsplash",
    keywords: ["painter at work", "wall painting", "professional craftsman"]
  },

  // Services section images
  services: {
    innenrenovation: {
      id: "innenrenovation",
      url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
      alt: "Innenrenovation - Frische Wandfarbe",
      keywords: ["interior painting", "room renovation", "wall color"]
    },
    fassadenrenovation: {
      id: "fassadenrenovation",
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      alt: "Fassadenrenovation - Gebäudesanierung",
      keywords: ["facade renovation", "building exterior", "construction"]
    },
    tapezierarbeiten: {
      id: "tapezierarbeiten",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      alt: "Tapezierarbeiten - Elegante Tapeten",
      keywords: ["wallpaper", "interior design", "pattern"]
    },
    schimmelbehandlung: {
      id: "schimmelbehandlung",
      url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
      alt: "Schimmelbehandlung - Saubere Oberflächen",
      keywords: ["mold removal", "cleaning", "renovation"]
    },
    wasserschaden: {
      id: "wasserschaden",
      url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
      alt: "Wasserschadensanierung - Professionelle Restauration",
      keywords: ["water damage", "restoration", "repair"]
    },
    gipserarbeiten: {
      id: "gipserarbeiten",
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      alt: "Gipserarbeiten - Perfekte Oberflächen",
      keywords: ["plastering", "drywall", "finishing"]
    }
  },

  // About section
  about: {
    craftsman: {
      id: "craftsman",
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      alt: "Handwerker bei der Arbeit",
      keywords: ["craftsman", "professional", "tools"]
    },
    tools: {
      id: "tools",
      url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
      alt: "Malerwerkzeuge - Qualität und Präzision",
      keywords: ["painting tools", "equipment", "craft"]
    }
  },

  // Process section
  process: {
    inspection: {
      id: "inspection",
      url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
      alt: "Begehung vor Ort",
      keywords: ["inspection", "consultation", "planning"]
    },
    quote: {
      id: "quote",
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      alt: "Detaillierte Planung",
      keywords: ["planning", "documents", "professional"]
    },
    execution: {
      id: "execution",
      url: "https://images.unsplash.com/photo-1565793298595-9a879d1e5e9c?w=600&q=80",
      alt: "Präzise Ausführung",
      keywords: ["painting", "execution", "quality"]
    }
  },

  // Gallery fillers - additional craft imagery
  gallery: {
    swissHouse: {
      id: "swiss-house",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
      alt: "Traditionelles Schweizer Haus",
      keywords: ["swiss house", "exterior", "architecture"]
    },
    paintRoller: {
      id: "paint-roller",
      url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
      alt: "Malerrolle in Aktion",
      keywords: ["paint roller", "application", "color"]
    },
    maskingTape: {
      id: "masking-tape",
      url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
      alt: "Präzise Abklebearbeiten",
      keywords: ["masking tape", "precision", "preparation"]
    },
    trowel: {
      id: "trowel",
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      alt: "Kelle beim Verputzen",
      keywords: ["trowel", "plaster", "texture"]
    },
    workshop: {
      id: "workshop",
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      alt: "Werkstatt - Handwerkskunst",
      keywords: ["workshop", "craftsmanship", "tools"]
    },
    interiorDetail: {
      id: "interior-detail",
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      alt: "Innenraum Detail",
      keywords: ["interior", "detail", "finish"]
    }
  }
};

// Service images keyed by service ID - shared across home + services page
export const SERVICE_IMAGES: Record<string, { url: string; alt: string }> = {
  "innenrenovationen":   { url: "/innen-02.jpg",  alt: "Innenrenovation" },
  "fassadenrenovationen":{ url: "/fassade.jpg",   alt: "Fassadenrenovation" },
  "tapezierarbeiten":    { url: "/tapete.jpg",     alt: "Tapezierarbeiten" },
  "moos-schimmel":       { url: "/schimmel.jpg",  alt: "Moos- und Schimmelentfernung" },
  "wasserschaden":       { url: "/wasserschaden.jpg", alt: "Wasserschadensanierung" },
  "spritz-gips":         { url: "/gips.jpg",      alt: "Kleine Spritz- und Gipserarbeiten" },
  "beton-impraegnierung":{ url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", alt: "Beton- und Steinimprägnierungen" },
  "bodenmarkierungen":   { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", alt: "Bodenmarkierungen" },
};

// Helper function to get optimized Unsplash URL with specific dimensions
export function getUnsplashUrl(baseUrl: string, width: number, height?: number): string {
  const url = new URL(baseUrl);
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", "80");
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  if (height) {
    url.searchParams.set("h", height.toString());
  }
  return url.toString();
}

// Image categories for easy reference
export const IMAGE_CATEGORIES = {
  HERO: "hero",
  SERVICES: "services",
  ABOUT: "about",
  PROCESS: "process",
  GALLERY: "gallery"
} as const;
