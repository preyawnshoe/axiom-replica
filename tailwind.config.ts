import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      borderColor: {
        DEFAULT: "rgb(var(--primary-stroke) / <alpha-value>)",
      },
      colors: {
        // Primary Brand Colors
        primaryBlue: "rgb(var(--primary-color) / <alpha-value>)",
        primaryBlueHover: "rgb(var(--primary-color-hover) / <alpha-value>)",
        
        // Background Colors
        background: "var(--background)",
        backgroundSecondary: "rgb(var(--background-secondary) / <alpha-value>)",
        backgroundTertiary: "rgb(var(--background-tertiary) / <alpha-value>)",
        
        // Border/Stroke Colors
        primaryStroke: "rgb(var(--primary-stroke) / <alpha-value>)",
        secondaryStroke: "rgb(var(--secondary-stroke) / <alpha-value>)",
        borderSubtle: "rgb(var(--border-subtle) / <alpha-value>)",
        
        // Text Colors
        textPrimary: "rgb(var(--text-primary) / <alpha-value>)",
        textSecondary: "rgb(var(--text-secondary) / <alpha-value>)",
        textTertiary: "rgb(var(--text-tertiary) / <alpha-value>)",
        translationText: "rgb(var(--translation-text-color) / <alpha-value>)",
        
        // Semantic Colors - Increase/Decrease
        increase: "rgb(var(--increase) / <alpha-value>)",
        decrease: "rgb(var(--decrease) / <alpha-value>)",
        increaseHover: "rgb(var(--increase-hover) / <alpha-value>)",
        decreaseHover: "rgb(var(--decrease-hover) / <alpha-value>)",
        
        // Chart Colors
        chartUp: "rgb(var(--chart-up) / <alpha-value>)",
        chartDown: "rgb(var(--chart-down) / <alpha-value>)",
        
        // Semantic Brand Colors
        primaryGreen: "rgb(var(--primary-green) / <alpha-value>)",
        primaryYellow: "rgb(var(--primary-yellow) / <alpha-value>)",
        primaryOrange: "rgb(var(--primary-orange) / <alpha-value>)",
        primaryOrangeHover: "rgb(var(--primary-orange-hover) / <alpha-value>)",
        primaryRed: "rgb(var(--primary-red) / <alpha-value>)",
        primaryLightBlue: "rgb(var(--primary-light-blue) / <alpha-value>)",
        
        // Additional Colors from CSS
        bags: "rgb(62 154 0 / <alpha-value>)",
        aster: "#f9d3a8",
        orca: "#ffd15c",
        
        // Platform Colors
        pump: "rgb(var(--primary-orange) / <alpha-value>)",
        virtualCurve: "rgb(82 197 255 / <alpha-value>)",
        
        // Hover States
        hoverPrimary: "rgb(var(--primary-stroke) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Courier New", "monospace"],
        ibm: ["var(--font-ibm-plex-sans)", "Arial", "sans-serif"],
      },
      animation: {
        "expand-1": "expand-1 2s cubic-bezier(0.76, 0, 0.24, 1) steps(120) infinite",
        "expand-2": "expand-2 2s cubic-bezier(0.76, 0, 0.24, 1) steps(120) infinite",
        "expand-3": "expand-3 2s cubic-bezier(0.76, 0, 0.24, 1) steps(120) infinite",
        "expand-4": "expand-4 2s cubic-bezier(0.76, 0, 0.24, 1) steps(120) infinite",
        "expand-5": "expand-5 2s cubic-bezier(0.76, 0, 0.24, 1) steps(120) infinite",
        "gradient-shift": "gradient-shift 30s cubic-bezier(0.76, 0, 0.24, 1) infinite",
        "leave": "leave 50ms cubic-bezier(0.4, 0, 0.6, 1) forwards",
        "leave-bottom": "leaveBottom 50ms cubic-bezier(0.4, 0, 0.6, 1) forwards",
      },
      keyframes: {
        "expand-1": {
          "0%": { width: "0%" },
          "100%": { width: "40%" },
        },
        "expand-2": {
          "0%": { width: "40%" },
          "100%": { width: "55%" },
        },
        "expand-3": {
          "0%": { width: "55%" },
          "100%": { width: "70%" },
        },
        "expand-4": {
          "0%": { width: "70%" },
          "100%": { width: "85%" },
        },
        "expand-5": {
          "0%": { width: "85%" },
          "100%": { width: "100%" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0 100%" },
          "25%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "100% 0" },
          "75%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0 100%" },
        },
        leave: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "20%": { opacity: "0.9", transform: "scale(0.995)" },
          "40%": { opacity: "0.6", transform: "scale(0.99)" },
          "60%": { opacity: "0.3", transform: "scale(0.985)" },
          "100%": { opacity: "0", transform: "scale(0.98)" },
        },
        leaveBottom: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "20%": { opacity: "0.9", transform: "translateY(2px) scale(0.995)" },
          "40%": { opacity: "0.6", transform: "translateY(4px) scale(0.99)" },
          "60%": { opacity: "0.3", transform: "translateY(6px) scale(0.985)" },
          "100%": { opacity: "0", transform: "translateY(8px) scale(0.98)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
