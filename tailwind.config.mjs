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
        "neo-bgdark": "#0A0A0A", // Almost black for maximum contrast
        // Dark mode variants - bold, saturated neon colors for neobrutalism
        "neo-dark-yellow": "#FDE047", // Neon yellow
        "neo-dark-blue": "#2DD4BF", // Bright teal
        "neo-dark-pink": "#F472B6", // Bright hot pink
        "neo-dark-green": "#4ADE80", // Bright mint green
      },
      boxShadow: {
        neo: "4px 4px 0px 0px rgba(0,0,0,0.9)",
        "neo-hover": "6px 6px 0px 0px rgba(0,0,0,0.9)",
        "neo-light": "4px 4px 0px 0px rgba(255,255,255,1)", // Solid white shadow for neobrutalist dark mode
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
