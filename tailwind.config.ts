import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Paleta derivada del retrato: negro cálido, beige de la gabardina y ámbar del arete.
      // El grupo se llama "canvas" y no "base" porque `text-base` chocaría con el tamaño de fuente.
      colors: {
        canvas: {
          DEFAULT: "#0B0A09", // fondo de página
          raised: "#100F0D", // banda de sección
          surface: "#141210", // superficie
          surface2: "#1B1916", // superficie anidada o en hover
        },
        border: {
          DEFAULT: "#2A2622",
          strong: "#3D3731",
        },
        ink: {
          primary: "#F4EFE8",
          secondary: "#B8B2A9",
          tertiary: "#8F8A83",
        },
        accent: {
          DEFAULT: "#E2A65C",
          soft: "#E2A65C1a",
          strong: "#EDBC7E",
          dim: "#8A6335",
        },
        "on-accent": "#0B0A09",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(4rem, 9vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-3": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        card: "0 20px 40px -24px rgba(0,0,0,0.7)",
      },
      keyframes: {
        "hero-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "hero-in": "hero-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
