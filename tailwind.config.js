/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: "#0b1020",
        aurora: "#6ee7ff",
        nebula: "#a855f7"
      },
      boxShadow: {
        glow: "0 0 40px rgba(110, 231, 255, 0.35)"
      }
    }
  },
  plugins: []
};
