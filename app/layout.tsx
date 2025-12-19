import { Providers } from "@/app/providers";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "William Andrade Site",
  description: "Personal website",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Providers>
          <Header />
          <main style={{ flex: "1" }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
