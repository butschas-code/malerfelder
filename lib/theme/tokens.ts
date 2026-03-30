// =============================================================================
// STYLE DNA & THEME TOKENS
// Apple-inspired premium editorial design for craft business
// =============================================================================

// -----------------------------------------------------------------------------
// STYLE DNA DEFINITION
// -----------------------------------------------------------------------------
export const STYLE_DNA = {
  // Mood: Three adjectives that define the brand feeling
  mood: ["präzise", "ruhig", "hochwertig"],

  // Typography Pairing
  typography: {
    // Headings: Modern editorial serif for warmth and craftsmanship feel
    heading: {
      font: "Fraunces",
      fallback: "Georgia, 'Times New Roman', serif",
      weights: [400, 500, 600],
      style: "Soft, editorial serif with organic curves"
    },
    // Body: Clean sans for readability
    body: {
      font: "Inter",
      fallback: "system-ui, -apple-system, sans-serif",
      weights: [400, 500, 600],
      style: "Clean, highly legible grotesk"
    }
  },

  // Layout Rhythm
  layout: {
    description: "Big typographic hero, alternating image/text sections, generous whitespace",
    maxWidth: "1400px",
    sectionPadding: "6rem",
    gridGap: "2rem"
  },

  // Craft Cues
  craftCues: {
    textures: ["subtle paper grain", "plaster texture overlay", "warm concrete"],
    colorBlocks: "Bold but minimal, based on extracted brand colors",
    qualityLabels: "Micro-labels for trust signals (Erfahrung, Zertifizierung)"
  },

  // Signature Element
  signatureElement: "Thin 'brush stroke' SVG divider between sections"
};

// -----------------------------------------------------------------------------
// EXTRACTED BRAND COLORS (from existing malerfelder.ch site analysis)
// -----------------------------------------------------------------------------
// The existing site uses a warm, professional color palette:
// - Primary: Warm coral/orange tones (energetic, approachable)
// - Secondary: Deep charcoal (trustworthy, professional)
// - Background: Warm off-white (paper-like, natural)
// - Accent: Soft beige/cream tones
// -----------------------------------------------------------------------------

export const COLORS = {
  // Primary Brand Color - Warm Coral/Orange
  // Extracted from existing site vibe: energetic, approachable, craftsman warmth
  brand: {
    DEFAULT: "#D97706", // Warm amber/orange
    light: "#F59E0B",
    dark: "#B45309",
    50: "#FFF7ED",
    100: "#FFEDD5",
    200: "#FED7AA",
    300: "#FDBA74",
    400: "#FB923C",
    500: "#F97316",
    600: "#EA580C",
    700: "#C2410C",
    800: "#9A3412",
    900: "#7C2D12"
  },

  // Secondary Brand Color - Deep Charcoal
  // Professional, trustworthy, grounding
  brand2: {
    DEFAULT: "#1C1917", // Warm charcoal
    light: "#44403C",
    dark: "#0C0A09",
    50: "#FAFAF9",
    100: "#F5F5F4",
    200: "#E7E5E4",
    300: "#D6D3D1",
    400: "#A8A29E",
    500: "#78716C",
    600: "#57534E",
    700: "#44403C",
    800: "#292524",
    900: "#1C1917"
  },

  // Paper/Background - Warm off-white
  // Like high-quality paper stock
  paper: {
    DEFAULT: "#FDFCF8",
    light: "#FFFFFF",
    dark: "#F5F2ED",
    50: "#FFFCF5",
    100: "#FDF9F3",
    200: "#FAF5EE",
    300: "#F5EFE6"
  },

  // Ink/Text - Soft black for readability
  ink: {
    DEFAULT: "#1C1917",
    light: "#44403C",
    muted: "#78716C",
    50: "#FAFAF9",
    100: "#F5F5F4",
    200: "#E7E5E4",
    300: "#D6D3D1",
    400: "#A8A29E",
    500: "#78716C",
    600: "#57534E",
    700: "#44403C",
    800: "#292524",
    900: "#1C1917"
  },

  // Muted - Subtle tones for secondary elements
  muted: {
    DEFAULT: "#A8A29E",
    light: "#D6D3D1",
    dark: "#78716C"
  },

  // Line/Borders - Subtle dividers
  line: {
    DEFAULT: "#E7E5E4",
    light: "#F5F5F4",
    dark: "#D6D3D1"
  },

  // Shadow - Warm shadows
  shadow: {
    DEFAULT: "rgba(28, 25, 23, 0.08)",
    medium: "rgba(28, 25, 23, 0.12)",
    dark: "rgba(28, 25, 23, 0.16)"
  }
};

// -----------------------------------------------------------------------------
// CSS VARIABLES FOR TAILWIND
// -----------------------------------------------------------------------------
export const CSS_VARIABLES = `
:root {
  /* Paper (Background) */
  --paper: 253 252 248;
  --paper-dark: 245 242 237;
  
  /* Ink (Text) */
  --ink: 28 25 23;
  --ink-muted: 120 113 108;
  
  /* Brand Primary - Warm Coral */
  --brand: 217 119 6;
  --brand-light: 245 158 11;
  --brand-dark: 180 83 9;
  
  /* Brand Secondary - Charcoal */
  --brand2: 28 25 23;
  --brand2-light: 68 64 60;
  
  /* Muted */
  --muted: 168 162 158;
  --muted-light: 214 211 209;
  
  /* Line */
  --line: 231 229 228;
  
  /* Shadow */
  --shadow: 28 25 23;
  
  /* Typography */
  --font-heading: 'Fraunces', Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
}
`;

// -----------------------------------------------------------------------------
// TAILWIND CONFIG EXTENSION
// -----------------------------------------------------------------------------
export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "rgb(var(--paper))",
          dark: "rgb(var(--paper-dark))"
        },
        ink: {
          DEFAULT: "rgb(var(--ink))",
          muted: "rgb(var(--ink-muted))"
        },
        brand: {
          DEFAULT: "rgb(var(--brand))",
          light: "rgb(var(--brand-light))",
          dark: "rgb(var(--brand-dark))"
        },
        brand2: {
          DEFAULT: "rgb(var(--brand2))",
          light: "rgb(var(--brand2-light))"
        },
        line: "rgb(var(--line))"
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      },
      boxShadow: {
        soft: "0 4px 20px rgba(var(--shadow), 0.08)",
        medium: "0 8px 30px rgba(var(--shadow), 0.12)",
        large: "0 12px 40px rgba(var(--shadow), 0.16)"
      },
      borderRadius: {
        apple: "1rem",
        "apple-sm": "0.75rem",
        "apple-lg": "1.5rem"
      }
    }
  }
};

// -----------------------------------------------------------------------------
// ANIMATION CONFIGURATION (Framer Motion)
// -----------------------------------------------------------------------------
export const ANIMATIONS = {
  // Section reveal on scroll
  sectionReveal: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  },

  // Stagger children
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  // Fade in
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },

  // Scale up on hover
  scaleUp: {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.3 }
  },

  // Image parallax
  parallax: {
    initial: { y: 0 },
    animate: { y: -20 },
    transition: { duration: 0.5 }
  }
};

// -----------------------------------------------------------------------------
// SPACING & LAYOUT TOKENS
// -----------------------------------------------------------------------------
export const SPACING = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  "2xl": "4rem",
  "3xl": "6rem",
  "4xl": "8rem"
};

// -----------------------------------------------------------------------------
// BREAKPOINTS
// -----------------------------------------------------------------------------
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px"
};
