import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
          lightblue: "#3b6fd6",
          skyblue: "#5b8def",
          gold: "#c9a86a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(59,111,214,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,111,214,0.08) 1px, transparent 1px)",
      },
      animation: {
        "scan-line": "scanline 4s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
