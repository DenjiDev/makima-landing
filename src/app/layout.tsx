// app/layout.tsx'
'use client'
import { Navbar } from "@/components/Navbar";
import { Providers } from "./providers";
import { usePathname } from 'next/navigation';

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
        </Providers>
      </body>
    </html>
  );
}