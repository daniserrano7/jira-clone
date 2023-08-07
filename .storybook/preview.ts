import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-styling";

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import "../src/app/styles/app-compiled.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "var(--color-elevation-surface)" },
        { name: "overlay", value: "var(--color-elevation-surface-overlay)" },
        { name: "raised", value: "var(--color-elevation-surface-raised)" },
        { name: "sunken", value: "var(--color-elevation-surface-sunken)" },
      ],
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    // @ts-ignore
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
        lava: "lava",
        lime: "lime",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
