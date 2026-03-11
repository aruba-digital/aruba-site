import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Configuración de color mode: respeta el sistema, pero permite toggle manual
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const arubaTheme = extendTheme({
  config,
  fonts: {
    heading: "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
    body: "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
    mono: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco",
  },
  colors: {
    // Paleta de marca Aruba (puede reutilizarse en otros proyectos)
    aruba: {
      50: "#e3f7fd",
      100: "#bde9f8",
      200: "#92dbf3",
      300: "#67cced",
      400: "#3bbde7",
      500: "#00a6d6", // Azul bandera Aruba
      600: "#007fad",
      700: "#005b7f",
      800: "#003750",
      900: "#001524",
    },
    luna: {
      50: "#f3f6ff",
      100: "#dde5ff",
      200: "#c2d0ff",
      300: "#9eb4ff",
      400: "#6f8bff",
      500: "#4762e6",
      600: "#3449b4",
      700: "#263689",
      800: "#19235a",
      900: "#0c122f",
    },
    arubaYellow: "#f9d616",
    arubaRed: "#ef3340",
  },
  semanticTokens: {
    colors: {
      "bg.page": {
        default: "gray.50",
        _dark: "#020617",
      },
      "bg.surface": {
        default: "white",
        _dark: "gray.900",
      },
      "bg.surfaceSoft": {
        default: "blue.50",
        _dark: "gray.800",
      },
      "text.main": {
        default: "gray.900",
        _dark: "gray.50",
      },
      "text.muted": {
        default: "gray.600",
        _dark: "gray.300",
      },
      "border.subtle": {
        default: "gray.200",
        _dark: "gray.700",
      },
      "brand.primary": {
        default: "aruba.500",
        _dark: "aruba.400",
      },
      "brand.primaryStrong": {
        default: "aruba.600",
        _dark: "aruba.300",
      },
      "brand.accentSoft": {
        default: "rgba(0, 166, 214, 0.08)",
        _dark: "rgba(249, 214, 22, 0.15)", // amarillo en dark
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "aruba",
        size: "sm",
        borderRadius: "full",
      },
      variants: {
        solid: {
          fontWeight: "600",
        },
        outline: {
          borderRadius: "full",
          fontWeight: "600",
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: "5xl",
        px: 4,
      },
    },
  },
});

