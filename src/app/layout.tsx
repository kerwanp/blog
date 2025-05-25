import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Comfortaa } from "next/font/google";
import { Navbar } from "../components/navbar";
import Footer from "../components/footer";
import BookButton from "../components/book-button";
import AnimatedGridPattern from "@/components/animated-grid-pattern";
import { createMetadata } from "@/lib/metadata";
import { Providers } from "./layout.client";
import { Analytics } from "@vercel/analytics/next";

const sans = Comfortaa({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`relative min-h-screen bg-background font-sans ${sans.variable} ${mono.variable}`}
      >
        <Providers>
          <Navbar />
          <div className="h-screen w-full top-0 absolute overflow-hidden -z-10">
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.5}
              duration={3}
              className="[mask-image:radial-gradient(1000px_500px_at_center,white,transparent)] inset-x-0 inset-y-[-30%]"
            />
          </div>
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BookButton />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
