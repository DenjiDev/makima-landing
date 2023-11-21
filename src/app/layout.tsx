// app/layout.tsx'
'use client'
import { Navbar } from "@/components/Navbar";
import { Providers } from "./providers";
import { usePathname } from 'next/navigation';
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = usePathname()
  const excludeNavbarPages = ['/Login']

  return (
    <html lang="pt-br">
      <body>
        <Providers>
          {!excludeNavbarPages.includes(navigation) && <Navbar />}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}