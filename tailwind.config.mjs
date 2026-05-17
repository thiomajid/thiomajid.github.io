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
        handwriting: ["Caveat", "cursive"],
      },
      colors: {
        // Junk Journal Vintage Palette
        "journal-bglight": "#F2EBE1", // Kraft paper / old paper
        "journal-bgdark": "#2A2724", // Dark leather / charcoal
        "journal-ink": "#1A1A1A", // Faded black ink
        "journal-paper": "#FAF6F0", // Lighter paper for cards
        "journal-darkpaper": "#3D3935", // Darker paper for dark mode cards
        
        // Washi tape / Stamp accent colors
        "journal-red": "#C25953", // Faded stamp red
        "journal-blue": "#5B7B8E", // Vintage denim blue
        "journal-green": "#7A8B6B", // Olive journal green
        "journal-yellow": "#DCA772", // Aged mustard/ochre
        
        // Dark mode accents (slightly more saturated for contrast)
        "journal-dark-red": "#D1716B",
        "journal-dark-blue": "#729AB0",
        "journal-dark-green": "#91A57F",
        "journal-dark-yellow": "#E8B989",
      },
      boxShadow: {
        "polaroid": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "polaroid-dark": "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
        "tape": "0 1px 2px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        'paper-texture': "url('/paper-texture.png')", // We can use CSS patterns instead if no image is available
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
