/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1120px",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".title-1": {
          fontFamily: "var(--font-primary)",
          fontSize: "32px",
          color: "var(--color-black)",
          fontWeight: "800",
          lineHeight: "39.01px",
        },
        ".tittle-1-mobile": {
          fontFamily: "var(--font-primary)",
          fontSize: "22px",
          color: "var(--color-black)",
          fontWeight: "800",
          lineHeight: "26.82px",
        },
        ".tittle-2": {
          fontFamily: "var(--font-primary)",
          fontSize: "20px",
          color: "var(--color-black)",
          fontWeight: "800",
          lineHeight: "30px",
        },
        ".tittle-2-mobile": {
          fontFamily: "var(--font-primary)",
          fontSize: "16px",
          color: "var(--color-black)",
          fontWeight: "800",
          lineHeight: "26.82px",
        },
        ".tittle-3-": {
          fontFamily: "var(--font-primary)",
          fontSize: "16px",
          color: "var(--color-black)",
          fontWeight: "800",
          lineHeight: "30px",
        },
        ".label": {
          fontFamily: "var(--font-primary)",
          fontSize: "16px",
          color: "var(--color-primary)",
          fontWeight: "800",
          lineHeight: "19.05px",
        },
        ".label-mobile": {
          fontFamily: "var(--font-primary)",
          fontSize: "14px",
          color: "var(--color-primary)",
          fontWeight: "800",
          lineHeight: "17.07px",
        },
        ".opaque-text": {
          fontFamily: "var(--font-primary)",
          opacity: "0.5",
          fontSize: "14px",
          color: "var(--color-primary)",
          fontWeight: "600",
          lineHeight: "17.07px",
        },
        ".menu-text": {
          fontFamily: "var(--font-primary)",
          fontSize: "16px",
          color: "var(--color-primary)",
          fontWeight: "600",
          lineHeight: "19.05px",
        },
        ".paragraph-text": {
          fontFamily: "var(--font-primary)",
          opacity: "0.8",
          fontSize: "16px",
          color: "var(--color-primary)",
          fontWeight: "600",
          lineHeight: "19.05px",
        },
      });
    }),
  ],
};
