import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBase: "var(--color-background)",
        bgBlue: "var(--color-background-blue)",
        bgGreen: "var(--color-background-green)",
        accent: "var(--color-accent)",
        btnHoveredGreen: "var(--color-button-hover-bg)",
        textGreen: "var(--color-text-green)",
        textGrey: "var(--color-text-grey)",
        bgLight: "var(--color-text-light)",
        surface: "var(--color-surface)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        heading: ["Rokkitt", "serif"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
      },
      letterSpacing: {
        wide: "0.05em",
      },
      lineHeight: {
        h1: "120%",
        p: "150%",
      },
      spacing: {
        sm: "16px",
        md: "64px",
        lg: "112px",
      },
    },
  },
  plugins: [],
} satisfies Config;
