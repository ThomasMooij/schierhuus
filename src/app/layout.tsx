import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const NavBar = dynamic(() => import("@/components/nav/NavBar"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schierhuys",
  description: "Vakantiehuisje in Drenthe",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">  
      <body className={inter.className}>
        <main className="bg-paginaAchtergrond">
        <NavBar />
            {children}
        <Footer />
        </main> 
        </body>  
    </html>
  );
}
