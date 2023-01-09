/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "primary-main": "#0052cc",
      "primary-main-dark": "#3e8bfe",
      "primary-light": "#deebff",
      "primary-light-dark": "#002b4c",
      "primary-main-hover": "#005ce6",
      "primary-main-hover-dark": "#4c9aff",
      "primary-light-hover": "#c5dcff",
      "secondary-main": "#403294",
      "secondary-light": "#EAE6FF",
      "success-main": "#00875A",
      "success-light": "#00a16b",
      "warn-main": "#FFAB00",
      "error-main": "red",
      "error-main-dark": "#fe4c4c",
      "error-light": "#ffe5e5",
      "error-light-dark": "#2c0202",
      "error-dark": "#b30000",
      "error-dark-dark": "red",
      "error-hover": "#fdd8d8",
      "error-hover-dark": "#fe6f6f",
      "white": "#fff",
      "black": "#000",
      "grey-100": "#fafbfc",
      "grey-200": "#f4f5f7",
      "grey-300": "#ebecf0",
      "grey-400": "#e0e1e6",
      "grey-500": "#dddddd",
      "grey-600": "#d3d3d3",
      "dark-100": "#444",
      "dark-200": "#3d3d3d",
      "dark-300": "#333",
      "dark-400": "#2d2d2d",
      "dark-500": "#222",
      "font-main": "#172b4d",
      "font-main-dark": "#E3FCEF",
      "font-light": "#5e6c84",
      "font-light-dark": "#838a86",
      "font-grey": "#676767",
      "font-success-main": "#006644",
      "font-success-main-dark": "#00c382",
      "font-success-light": "#E3FCEF",
      "icon": "#344563",
      "focus": "#4c9aff",
      "transparent": "transparent",
    },
    fontFamily: {
      "primary-light": ["CircularStdLight", "sans-serif"],
      "primary": ["CircularStdMedium", "sans-serif"],
      "primary-bold": ["CircularStdBold", "sans-serif"],
      "primary-black": ["CircularStdBlack", "sans-serif"],
    },
    boxShadow: {
      "xs": "rgba(0,0,0, 0.2) 0px 1px 1px, rgba(0,0,0, 0.2) 0px 0px 1px",
      "sm": "rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px",
      "md": "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
      "md-dark": "0 0 2px 1px rgba(0, 0, 0, 0.5)",
      "lg": "rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px",
      "blue": "5px 5px 20px 1px rgba(0, 82, 204, 0.2)",
      "dialog-overlay": "rgba(0,0,0,0.45)",
    },
    extend: {
      fontSize: {
        "2xs": ["0.75rem", "1rem"],
        "xs": ["0.8125rem", "1rem"],
      },
      gridTemplateColumns: {
        'auto-400': 'repeat(auto-fit, 400px)',
      },
      keyframes: {
        // Dropdown menu
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        // Toast
        "toast-hide": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "toast-slide-in-right": {
          "0%": { transform: `translateX(calc(100% + 1rem))` },
          "100%": { transform: "translateX(0)" },
        },
        "toast-slide-in-bottom": {
          "0%": { transform: `translateY(calc(100% + 1rem))` },
          "100%": { transform: "translateY(0)" },
        },
        "toast-swipe-out": {
          "0%": { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          "100%": {
            transform: `translateX(calc(100% + 1rem))`,
          },
        },
      },
      animation: {
        // Dropdown menu
        "scale-in": "scale-in 0.2s ease-in-out",
        "slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        // Toast
        "toast-hide": "toast-hide 100ms ease-in forwards",
        "toast-slide-in-right":
          "toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-slide-in-bottom":
          "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-swipe-out": "toast-swipe-out 100ms ease-out forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-radix")(),
    plugin(({ addUtilities }) => addUtilities({
      ".flex-center": {
        "justify-content": "center",
        "align-items": "center",
      },
      ".scrollbar-hide": {
        /* IE and Edge */
        "-ms-overflow-style": "none",

        /* Firefox */
        "scrollbar-width": "none",

        /* Safari and Chrome */
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }
    })),
  ],
}
