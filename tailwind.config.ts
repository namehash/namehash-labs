import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        teamMemberShadow:
          "0px -1.36782px 17.78168px 0px rgba(255, 255, 255, 0.20) inset, 0px 13.67822px 21.88514px -4.10346px rgba(87, 142, 231, 0.20), 0px 5.88889px 0px 0px #cbcbcb",
        teamMemberShadowHover:
          "0px -1.36782px 17.78168px 0px rgba(255, 255, 255, 0.20) inset, 0px 13.67822px 21.88514px -4.10346px rgba(87, 142, 231, 0.20), 0px 5.88889px 0px 0px #000",
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
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s linear forwards",
    },
  },
  plugins: [],
};
export default config;
