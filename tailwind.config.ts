import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "inset 0 1px 0 rgba(255,255,255,0.20), 0 24px 80px rgba(0,0,0,0.45)",
        "glass-soft": "inset 0 1px 0 rgba(255,255,255,0.18), 0 18px 44px rgba(0,0,0,0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
