/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        "brand-dark": "#0a0a0a",
        "brand-gray": "#f5f5f7",
        "brand-light": "#ffffff",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        "soft-lg": "0 10px 40px rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
      },
    },
  },
};
