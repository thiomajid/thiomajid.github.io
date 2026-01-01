import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Vibrant palette complementing olive blazer - energetic and eye-friendly
        "neo-yellow": "#FFC857", // Bright golden yellow - energetic warmth
        "neo-blue": "#3AAFB9", // Vibrant turquoise - fresh and modern
        "neo-pink": "#FF6B6B", // Coral red - bold accent
        "neo-green": "#95C97E", // Fresh lime sage - complements olive
        "neo-bglight": "#FAFBFC", // Soft white
        "neo-bgdark": "#1E1E2E", // Deep navy charcoal
        // Dark mode variants - muted for comfort
        "neo-dark-yellow": "#D4A056", // Warm amber
        "neo-dark-blue": "#4A8A96", // Deep teal
        "neo-dark-pink": "#D95555", // Muted coral
        "neo-dark-green": "#7AAF66", // Forest lime
      },
      boxShadow: {
        neo: "4px 4px 0px 0px rgba(0,0,0,0.9)",
        "neo-hover": "6px 6px 0px 0px rgba(0,0,0,0.9)",
        "neo-light": "4px 4px 0px 0px rgba(255,255,255,0.25)", // Softer shadow for dark mode
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
