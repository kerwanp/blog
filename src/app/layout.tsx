import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Cabin, Dela_Gothic_One, Fragment_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/utils";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const wide = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wide",
});
const sans = Cabin({ subsets: ["latin"], variable: "--font-sans" });
const mono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL("https://www.martin-paucot.fr"),
  title: {
    template: process.env.APP_TITLE_TEMPLATE ?? "",
    default: process.env.APP_TITLE ?? "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={cn("font-sans", sans.variable, mono.variable, wide.variable)}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
