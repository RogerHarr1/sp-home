import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        artist: {
          1: "#F9F8F6",
          2: "#EFE9E3",
          3: "#D9CFC7",
          4: "#C9B59C",
        },
        primary: {
          50: "#F9F8F6",
          100: "#EFE9E3",
          200: "#D9CFC7",
          300: "#C9B59C",
          400: "#b8a089",
          500: "#9d8569",
          600: "#7d6a54",
          700: "#5d4f3f",
          800: "#3d352a",
          900: "#2d2520",
          950: "#1a1512",
        },
        secondary: {
          50: "#F9F8F6",
          100: "#EFE9E3",
          200: "#D9CFC7",
          300: "#C9B59C",
          400: "#b8a089",
          500: "#9d8569",
          600: "#7d6a54",
          700: "#5d4f3f",
          800: "#3d352a",
          900: "#2d2520",
          950: "#1a1512",
        },
        accent: {
          DEFAULT: "#C9B59C",
          light: "#D9CFC7",
          dark: "#b8a089",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "card-hover": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;

