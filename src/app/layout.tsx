import type { Metadata } from "next";
import Link from "next/link";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const source_sans_3 = Source_Sans_3({ subsets: ['latin'] })

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
      <body className={`${source_sans_3.className} flex flex-col justify-between min-h-[100vh] bg-[#FFFFFF]`}>
        <Header />
        <div className="grow">
        {children}
        </div>
        <Footer />


      </body>
    </html>
  );
}