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
        "neo-yellow": "#FFDE59",
        "neo-blue": "#82B1F0", // Even softer blue for dark mode
        "neo-pink": "#FF90BC",
        "neo-green": "#7ED7B6",
        "neo-bglight": "#EFEFEF",
        "neo-bgdark": "#212121", // Slightly lighter dark background
      },
      boxShadow: {
        neo: "4px 4px 0px 0px rgba(0,0,0,0.9)",
        "neo-hover": "6px 6px 0px 0px rgba(0,0,0,0.9)",
        "neo-light": "4px 4px 0px 0px rgba(255,255,255,0.4)", // Further reduced opacity for softer shadows
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
