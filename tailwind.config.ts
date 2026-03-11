import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        center: "#FFFDF7",
        "halo-soft": "#FFF4BF",
        "halo-secondary": "#FFEF99",
        "accent-yellow": "#FACC15",
        "warm-orange": "#F97316",
        "deep-orange": "#EA580C",
        "dark-text": "#1F2937",
        "muted-text": "#4B5563",
        line: "#E5E7EB",
      },
      borderRadius: {
        token: "var(--radius, 0.75rem)",
      },
      boxShadow: {
        slab: "0 1px 3px rgba(31, 41, 55, 0.06)",
        card: "0 2px 8px rgba(31, 41, 55, 0.08)",
      },
      minHeight: {
        touch: "var(--touch-min, 44px)",
      },
      animation: {
        "gradient-pulse": "gradient-pulse 10s ease-in-out infinite",
        "gradient-drift": "gradient-drift 15s ease-in-out infinite",
        "orb-float-1": "orb-float-1 12s ease-in-out infinite",
        "orb-float-2": "orb-float-2 14s ease-in-out infinite",
        "orb-float-3": "orb-float-3 10s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "stagger-fade-in": "stagger-fade-in 1s ease-out forwards",
        "sprite-bob": "sprite-bob 4s ease-in-out infinite",
        "sprite-bob-slow": "sprite-bob-slow 6s ease-in-out infinite",
        "sprite-bob-section": "sprite-bob-section 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
