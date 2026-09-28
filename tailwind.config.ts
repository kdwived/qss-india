import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme navy for text/headings
        navy: {
          950: "#050b18",
          900: "#0a1428",
          850: "#0d1a33",
          800: "#0f2148",
          700: "#132a5e",
          600: "#1a3a7a",
        },
        brand: {
          blue: "#1e40af",
          lightblue: "#2563eb",
          skyblue: "#3b82f6",
          pale: "#eff6ff",
          soft: "#dbeafe",
          gold: "#c9a86a",
        },
        // Light theme surface colours
        surface: {
          white: "#ffffff",
          offwhite: "#f8faff",
          lightblue: "#f0f6ff",
          border: "#e2ecff",
        },
        // Dark text colours for light theme
        ink: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          500: "#64748b",
          400: "#94a3b8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)",
        "hero-gradient":
          "linear-gradient(135deg, rgba(30,64,175,0.92) 0%, rgba(37,99,235,0.75) 50%, rgba(15,33,80,0.85) 100%)",
      },
      animation: {
        "marquee-ltr": "marquee-ltr 40s linear infinite",
        "marquee-rtl": "marquee-rtl 40s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
        "scroll-indicator": "scrollIndicator 2s ease-in-out infinite",
        "count-up": "countUp 0.5s ease forwards",
        "scan-line": "scanline 8s linear infinite",
      },
      keyframes: {
        "marquee-ltr": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rtl": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scrollIndicator: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.4" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(30,64,175,0.10), 0 1px 4px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 40px -8px rgba(30,64,175,0.18), 0 2px 8px rgba(0,0,0,0.08)",
        navbar: "0 2px 20px -4px rgba(30,64,175,0.10)",
        blue: "0 8px 32px -8px rgba(30,64,175,0.30)",
      },
    },
  },
  plugins: [],
};
export default config;
