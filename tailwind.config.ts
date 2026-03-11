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
    },
  },
  plugins: [],
};

export default config;
