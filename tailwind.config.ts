import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        versell: {
          lime: "#D2FB07",
          "lime-neon": "#C6F500",
          "lime-glow": "rgba(210, 251, 7, 0.25)",
          dark: "#0A0A0A",
          darker: "#0C0D0E",
          cardDark: "#121212",
          grayText: "#666666",
          lightGray: "#F4F4F5",
          borderLight: "rgba(0, 0, 0, 0.08)",
          borderDark: "rgba(255, 255, 255, 0.10)",
        },
      },
      fontFamily: {
        sans: ["var(--font-helvetica)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 14px 40px rgba(0, 0, 0, 0.08)",
        "glow-lime": "0 0 50px rgba(210, 251, 7, 0.35)",
        "glow-subtle": "0 0 30px rgba(210, 251, 7, 0.15)",
      },
      animation: {
        "float-slow": "float 5s ease-in-out infinite",
        "spin-slow": "spin 40s linear infinite",
        "spin-reverse": "reverse-spin 32s linear infinite",
        "spin-slowest": "spin 55s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        "reverse-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

