import EmotionRegistry from "@/app/EmotionRegistry";
import { Providers } from "@/app/providers";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { BackToTop } from "@/components/ui/BackToTop";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: {
    default: "William Andrade | Full Stack Web Developer",
    template: "%s | William Andrade",
  },
  description:
    "Full Stack Web Developer specializing in React, TypeScript, Next.js, and modern web technologies. 9+ years of experience building scalable applications.",
  keywords: [
    "William Andrade",
    "Full Stack Developer",
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
    url: "https://williamandrade.com",
    siteName: "William Andrade",
    title: "William Andrade | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, TypeScript, Next.js, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Andrade | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, TypeScript, Next.js, and modern web technologies.",
  },
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
            <ProgressBar>
              <Header />
              <main style={{ flex: "1" }}>
                {children}
                <Analytics />
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
