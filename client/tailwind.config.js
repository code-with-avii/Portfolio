/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#18181B",
        primary: "#7C3AED",
        secondary: "#06B6D4",
        text: "#FAFAFA",
        mutedText: "#A1A1AA",
      },
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(124, 58, 237, 0.15)',
        'glow-secondary': '0 0 20px rgba(6, 182, 212, 0.15)',
      },
    },
  },
  plugins: [],
}
