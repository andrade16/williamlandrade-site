export const breakpoints = {
  xs: "320px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
};

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
  xxxl: "4rem",
};

export const colors = {
  primary: {
    main: "#ffffff",
    light: "#f5f5f5",
    dark: "#e0e0e0",
  },
  accent: {
    main: "#8b5cf6",
    light: "#a78bfa",
    dark: "#7c3aed",
    hover: "#a78bfa",
  },
  neutral: {
    white: "#ffffff",
    black: "#000000",
    gray: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b",
    },
  },
  text: {
    primary: "#ffffff",
    secondary: "#a1a1aa",
    muted: "#71717a",
    disabled: "#52525b",
    inverse: "#09090b",
  },
  background: {
    primary: "#09090b",
    secondary: "#18181b",
    tertiary: "#27272a",
    elevated: "#3f3f46",
  },
  border: {
    default: "#27272a",
    hover: "#3f3f46",
  },
};

export const typography = {
  fontFamily: {
    primary:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    monospace: 'Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.4)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.6)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
  glow: "0 0 20px rgba(139, 92, 246, 0.3)",
};

export const theme = {
  breakpoints,
  mediaQueries,
  spacing,
  colors,
  typography,
  shadows,
};

export default theme;
