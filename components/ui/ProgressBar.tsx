"use client";

import { AppProgressProvider } from "@bprogress/next";
import { ReactNode } from "react";

export function ProgressBar({ children }: { children: ReactNode }) {
  return (
    <AppProgressProvider
      color="#4f46e5"
      height="5px"
      startPosition={0.08}
      stopDelay={0}
      options={{
        speed: 200,
        showSpinner: false,
      }}
    >
      {children}
    </AppProgressProvider>
  );
}
