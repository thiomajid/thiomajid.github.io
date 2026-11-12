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
        "neo-bgdark": "#171715",
        "neo-dark-surface": "#272622",
        "neo-dark-text": "#F7F3E8",
        "neo-dark-outline": "#F7F3E8",
        // Keep the light theme's accents; invert only the neutral foundation.
        "neo-dark-yellow": "#FFC857",
        "neo-dark-blue": "#3AAFB9",
        "neo-dark-pink": "#FF6B6B",
        "neo-dark-green": "#95C97E",
      },
      boxShadow: {
        neo: "4px 4px 0px 0px rgba(0,0,0,0.9)",
        "neo-hover": "6px 6px 0px 0px rgba(0,0,0,0.9)",
        "neo-light": "4px 4px 0px 0px rgba(255,255,255,1)",
        "neo-dark": "4px 4px 0px 0px #706C62",
        "neo-dark-hover": "6px 6px 0px 0px #928C80",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
