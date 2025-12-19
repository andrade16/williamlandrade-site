"use client";

import { Global, ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";

import { globalStyles } from "@/styles/globalStyles";
import { theme } from "@/theme";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}
