import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#4EA9DD",
          yellow: "#FFCD1B",
          ink: "#0B1220",
          soft: "#F7FAFF"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 18, 32, 0.10)",
        softer: "0 8px 24px rgba(11, 18, 32, 0.08)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    }
  },
} satisfies Config;
