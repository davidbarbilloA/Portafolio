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
      colors: {
        base: {
          DEFAULT: "#0A0A0B", // page background
          raised: "#101013", // section background
          surface: "#131316", // card background
          surface2: "#18181C", // hovered / nested surface
        },
        border: {
          DEFAULT: "#232328",
          strong: "#2E2E34",
        },
        ink: {
          primary: "#F5F5F7",
          secondary: "#A1A1AA",
          tertiary: "#6B6B72",
        },
        accent: {
          DEFAULT: "#2E7DFF",
          soft: "#2E7DFF1a",
          strong: "#4E93FF",
          dim: "#1B4FA6",
        },
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "var(--font-body)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-3": ["clamp(1.5rem, 2.4vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(10,10,11,1)), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(46,125,255,0.16), transparent 60%)",
      },
      backgroundSize: {
        grid: "100% 100%, 44px 44px, 44px 44px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(46,125,255,0.25), 0 8px 40px -8px rgba(46,125,255,0.35)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 2s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
