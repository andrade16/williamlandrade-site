import EmotionRegistry from "@/app/EmotionRegistry";
import { Providers } from "@/app/providers";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { BackToTop } from "@/components/ui/BackToTop";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://williamlandrade.vercel.app"),
  title: {
    default: "William Andrade | Fullstack Web Developer",
    template: "%s | William Andrade",
  },
  description:
    "Fullstack Web Developer specializing in React, TypeScript, Next.js, and modern web technologies. 9+ years of experience building scalable applications.",
  keywords: [
    "William Andrade",
    "Fullstack Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Web Developer",
    "Software Engineer",
    "San Francisco",
  ],
  authors: [{ name: "William Andrade" }],
  creator: "William Andrade",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamlandrade.vercel.app",
    siteName: "William Andrade",
    title: "William Andrade | Full-stack Web Developer",
    description:
      "Full-stack Web Developer specializing in React, TypeScript, Next.js, and modern web technologies.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "William Andrade | Full-stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "William Andrade | Full-stack Web Developer",
    description:
      "Full-stack Web Developer specializing in React, TypeScript, Next.js, and modern web technologies.",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <EmotionRegistry>
          <Providers>
            <ProgressBar>
              <Header />
              <main style={{ flex: "1" }}>
                {children}
                <Analytics />
                <SpeedInsights />
              </main>
              <Footer />
              <BackToTop />
            </ProgressBar>
          </Providers>
        </EmotionRegistry>
      </body>
    </html>
  );
}
