import { Providers } from "@/providers";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

export const metadata = {
  title: "William Andrade Site",
  description: "Personal website",
};

export default function RootLayout({ children }) {
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
