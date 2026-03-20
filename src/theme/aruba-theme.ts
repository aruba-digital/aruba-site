import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value:
            "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
        },
        body: {
          value:
            "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
        },
        mono: {
          value:
            "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco",
        },
      },
      colors: {
        aruba: {
          50: { value: "#e3f7fd" },
          100: { value: "#bde9f8" },
          200: { value: "#92dbf3" },
          300: { value: "#67cced" },
          400: { value: "#3bbde7" },
          500: { value: "#00a6d6" }, // Azul bandera Aruba
          600: { value: "#007fad" },
          700: { value: "#005b7f" },
          800: { value: "#003750" },
          900: { value: "#001524" },
        },
        luna: {
          50: { value: "#f3f6ff" },
          100: { value: "#dde5ff" },
          200: { value: "#c2d0ff" },
          300: { value: "#9eb4ff" },
          400: { value: "#6f8bff" },
          500: { value: "#4762e6" },
          600: { value: "#3449b4" },
          700: { value: "#263689" },
          800: { value: "#19235a" },
          900: { value: "#0c122f" },
        },
        arubaYellow: { value: "#f9d616" },
        arubaRed: { value: "#ef3340" },
      },
    },
  },
});

export const arubaSystem = createSystem(defaultConfig, config);
