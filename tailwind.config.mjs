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
        "neo-bgdark": "#1B1B20",
        "neo-dark-surface": "#292930",
        "neo-dark-text": "#F1EBDD",
        "neo-dark-outline": "#D7CCB8",
        // A warm, print-like palette that echoes the light theme without neon glare.
        "neo-dark-yellow": "#F2BD58",
        "neo-dark-blue": "#68B8C2",
        "neo-dark-pink": "#E9857D",
        "neo-dark-green": "#A4C47B",
      },
      boxShadow: {
        neo: "4px 4px 0px 0px rgba(0,0,0,0.9)",
        "neo-hover": "6px 6px 0px 0px rgba(0,0,0,0.9)",
        "neo-light": "4px 4px 0px 0px rgba(255,255,255,1)",
        "neo-dark": "4px 4px 0px 0px #8A795F",
        "neo-dark-hover": "6px 6px 0px 0px #A18B69",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
