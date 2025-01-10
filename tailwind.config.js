/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      // Extended color palette
      colors: {
        purple: {
          light: "#d6bcfa",
          DEFAULT: "#9f7aea",
          dark: "#6b46c1",
        },
        cyan: {
          light: "#81e6d9",
          DEFAULT: "#38b2ac",
          dark: "#319795",
        },
      },

      // Animation configurations
      animation: {
        "shift-gradient": "shiftGradient 8s ease-in-out infinite", // Shifting background gradient
        "float-slow": "floatSlow 6s ease-in-out infinite", // Slow floating effect
        "float-fast": "floatFast 4s ease-in-out infinite", // Faster floating effect
        "rotate-circle": "rotateCircle 10s linear infinite", // Rotating circle
        "fade-in": "fadeIn 1.5s ease-in-out", // Simple fade-in animation
        "fade-in-up": "fadeInUp 1.5s ease-in-out", // Fade-in with upward motion
      },

      // Keyframes for animations
      keyframes: {
        shiftGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-40px)" },
        },
        rotateCircle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      // Extended spacing for larger layouts
      spacing: {
        128: "32rem", // Large spacing for cards, containers, etc.
        144: "36rem",
      },

      // Custom fonts
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // Clean sans-serif font
        serif: ["Merriweather", "serif"], // Elegant serif font
      },
    },
  },
  plugins: [],
};
