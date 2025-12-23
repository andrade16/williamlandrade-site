import EmotionRegistry from "@/app/EmotionRegistry";
import { Providers } from "@/app/providers";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "William Andrade Site",
  description: "Personal website",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <EmotionRegistry>
          <Providers>
            <Header />
            <main style={{ flex: "1" }}>
              {children}
            </main>
            <Footer />
          </Providers>
        </EmotionRegistry>
        <Analytics />
      </body>
    </html>
  );
}
