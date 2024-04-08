import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './components/Navbar'
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next E-commerce 13",
  description: "Next E-commerce 13 utilizando a versão 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <NavBar/>
        <main className='h-screen p-16'>
            {children}
          </main>
        
        </body>
    </html>
  );
}
