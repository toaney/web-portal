import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Web Portal Demo",
  description: "Web Portal Demo - Thomas Toan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-between min-h-[100vh] bg-[#FFFFFF]`}>
        <Header />
        <div className="grow">
        {children}
        </div>
        <Footer />


      </body>
    </html>
  );
}