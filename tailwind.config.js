/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      font: {
        DEFAULT: "var(--color-font)",
        brand: "var(--color-font-brand)",
        success: "var(--color-font-success)",
        info: "var(--color-font-info)",
        warning: "var(--color-font-warning)",
        danger: "var(--color-font-danger)",
        subtle: "var(--color-font-subtle)",
        subtlest: "var(--color-font-subtlest)",
        selected: "var(--color-font-selected)",
        inverse: "var(--color-font-inverse)",
        disabled: "var(--color-font-disabled)",
        accent: {
          DEFAULT: "var(--color-font-accent)",
          green: "var(--color-font-accent-green)",
          blue: "var(--color-font-accent-blue)",
          grey: "var(--color-font-accent-grey)",
        },
      },
      link: {
        DEFAULT: "var(--color-link)",
        hover: "var(--color-link-hover)",
        pressed: "var(--color-link-pressed)",
      },
      icon: "var(--color-icon)",
      border: {
        DEFAULT: "var(--color-border)",
        brand: "var(--color-border-brand)",
        disabled: "var(--color-border-disabled)",
        focused: "var(--color-border-focused)",
        selected: "var(--color-border-selected)",
        input: "var(--color-border-input)",
        accent: {
          blue: "var(--color-border-accent-blue)",
          grey: "var(--color-border-accent-grey)",
        },
      },
      elevation: {
        surface: {
          DEFAULT: "var(--color-elevation-surface)",
          hovered: "var(--color-elevation-surface-hovered)",
          pressed: "var(--color-elevation-surface-pressed)",
          raised: {
            DEFAULT: "var(--color-elevation-surface-raised)",
            hovered: "var(--color-elevation-surface-raised-hovered)",
            pressed: "var(--color-elevation-surface-raised-pressed)",
          },
          overlay: {
            DEFAULT: "var(--color-elevation-surface-overlay)",
            hovered: "var(--color-elevation-surface-overlay-hovered)",
            pressed: "var(--color-elevation-surface-overlay-pressed)",
          },
          sunken: "var(--color-elevation-surface-sunken)",
        },
        "shadow-overflow": "var(--color-shadow-overlay)",
      },
      background: {
        brand: {
          subtlest: {
            DEFAULT: "var(--color-background-brand-subtlest)",
            hovered: "var(--color-background-brand-subtlest-hovered)",
            pressed: "var(--color-background-brand-subtlest-pressed)",
          },
          bold: {
            DEFAULT: "var(--color-background-brand-bold)",
            hovered: "var(--color-background-brand-bold-hovered)",
            pressed: "var(--color-background-brand-bold-pressed)",
          },
          boldest: {
            DEFAULT: "var(--color-background-brand-boldest)",
            hovered: "var(--color-background-brand-boldest-hovered)",
            pressed: "var(--color-background-brand-boldest-pressed)",
          },
        },
        success: "var(--color-background-success)",
        info: "var(--color-background-info)",
        warning: "var(--color-background-warning)",
        danger: "var(--color-background-danger)",
        subtle: "var(--color-background-subtle)",
        subtlest: "var(--color-background-subtlest)",
        selected: {
          DEFAULT: "var(--color-background-selected)",
          hovered: "var(--color-background-selected-hovered)",
          pressed: "var(--color-background-selected-pressed)",
        },
        accent: {
          DEFAULT: "var(--color-background-accent)",
          green: "var(--color-background-accent-green)",
          blue: {
            subtlest: "var(--color-background-accent-blue-subtlest)",
            subtler: "var(--color-background-accent-blue-subtler)",
            subtle: "var(--color-background-accent-blue-subtle)",
            bolder: "var(--color-background-accent-blue-bolder)",
          },
          grey: {
            subtlest: "var(--color-background-accent-grey-subtlest)",
            subtler: "var(--color-background-accent-grey-subtler)",
            subtle: "var(--color-background-accent-grey-subtle)",
            bolder: "var(--color-background-accent-grey-bolder)",
          },
        },
        disabled: "var(--color-background-disabled)",
        input: {
          DEFAULT: "var(--color-background-input)",
          hovered: "var(--color-background-input-hovered)",
        },
      },
      transparent: "transparent",
      // "primary-main": "var(--color-primary-main)",
      // "primary-light": "var(--color-primary-light)",
      // "primary-main-hover": "var(--color-primary-main-hover)",
      // "primary-light-hover": "var(--color-primary-light-hover)",
      // "secondary-main": "var(--color-secondary-main)",
      // "secondary-light": "var(--color-secondary-light)",
      // "success-main": "var(--color-success-main)",
      // "success-light": "var(--color-success-light)",
      // "warn-main": "var(--color-warn-main)",
      // "error-main": "var(--color-error-main)",
      // "error-light": "var(--color-error-light)",
      // "error-hover": "var(--color-error-hover)",
      // white: "var(--color-white)",
      // black: "var(--color-black)",
      // "grey-100": "var(--color-grey-100)",
      // "grey-200": "var(--color-grey-200)",
      // "grey-300": "var(--color-grey-300)",
      // "grey-400": "var(--color-grey-400)",
      // "grey-500": "var(--color-grey-500)",
      // "grey-600": "var(--color-grey-600)",
      // "font-main": "var(--color-font-main)",
      // "font-light": "var(--color-font-light)",
      // "font-grey": "var(--color-font-grey)",
      // "font-success-main": "var(--color-font-success-main)",
      // "font-success-light": "var(--color-font-success-light)",
      // icon: "var(--color-icon)",
      // focus: "var(--color-focus)",
      // transparent: "var(--color-transparent)",
    },
    fontFamily: {
      "primary-light": ["CircularStdLight", "sans-serif"],
      primary: ["CircularStdMedium", "sans-serif"],
      "primary-bold": ["CircularStdBold", "sans-serif"],
      "primary-black": ["CircularStdBlack", "sans-serif"],
    },
    boxShadow: {
      xs: "rgba(0,0,0, 0.2) 0px 1px 1px, rgba(0,0,0, 0.2) 0px 0px 1px",
      sm: "rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px",
      md: "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
      // md: "0 0 2px 1px rgba(0, 0, 0, 0.5)",
      lg: "rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px",
      blue: "5px 5px 20px 1px rgba(0, 82, 204, 0.2)",
      "dialog-overlay": "rgba(0,0,0,0.45)",
    },
    extend: {
      fontSize: {
        "2xs": ["0.75rem", "1rem"],
        xs: ["0.8125rem", "1rem"],
      },
      gridTemplateColumns: {
        "auto-400": "repeat(auto-fit, 400px)",
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
        "slide-right-fade": "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        // Toast
        "toast-hide": "toast-hide 100ms ease-in forwards",
        "toast-slide-in-right": "toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-slide-in-bottom": "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-swipe-out": "toast-swipe-out 100ms ease-out forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-radix")(),
    plugin(({ addUtilities }) =>
      addUtilities({
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
            display: "none",
          },
        },
      })
    ),
  ],
};
