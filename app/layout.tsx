import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Julio Salim - Developer & Designer",
  description: "Personal portfolio and blog of Julio Salim, a full-stack developer and designer passionate about creating beautiful, functional web experiences.",
  keywords: ["developer", "designer", "portfolio", "web development", "react", "next.js"],
  authors: [{ name: "Julio Salim" }],
  creator: "Julio Salim",
  openGraph: {
    title: "Julio Salim - Developer & Designer",
    description: "Personal portfolio and blog of Julio Salim, a full-stack developer and designer passionate about creating beautiful, functional web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
