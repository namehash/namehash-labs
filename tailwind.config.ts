import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        "250": "2.5", // Add a '250' key for 2.5 times scaling
      },
      screens: {
        xSmall: "425px",
        small: "550px",
        medium2x: "889px",
        tall: { raw: "(min-height: 600px)" },
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    keyframes: {
      widen: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
      slideIn: {
        "0%": { transform: "translateX(0)", opacity: "1" },
        "33%": { transform: "translateX(15%)", opacity: "0" },
        "66%": { transform: "translateX(-15%)", opacity: "0" },
        "100%": { transform: "translateX(0%)", opacity: "1" },
      },
      slideOut: {
        "0%": { transform: "translateX(0)", opacity: "1" },
        "33%": { transform: "translateX(-15%)", opacity: "0" },
        "66%": { transform: "translateX(15%)", opacity: "0" },
        "100%": { transform: "translateX(0%)", opacity: "1" },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      rotate360: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s linear forwards",
      spinSlow: "rotate360 150s linear infinite",
      slideIn: "slideIn 0.5s ease-out",
      slideOut: "slideOut 0.5s ease-in",
      widen: "widen 5s linear forwards",
    },
  },
  plugins: [],
};
export default config;
