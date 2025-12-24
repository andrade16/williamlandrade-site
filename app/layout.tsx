import EmotionRegistry from "@/app/EmotionRegistry";
import { Providers } from "@/app/providers";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { BackToTop } from "@/components/ui/BackToTop";
import NextTopLoader from "nextjs-toploader";
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
            <NextTopLoader
              color="#4f46e5"
              initialPosition={0.08}
              crawlSpeed={300}
              height={5}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={500}
              shadow="0 0 10px #4f46e5,0 0 5px #4f46e5"
              zIndex={9999}
              stopDelay={0}
            />
            <Header />
            <main style={{ flex: "1" }}>
              {children}
              <Analytics />
            </main>
            <Footer />
            <BackToTop />
          </Providers>
        </EmotionRegistry>
      </body>
    </html>
  );
}
