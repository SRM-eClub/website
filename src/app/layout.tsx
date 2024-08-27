"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Electronics Club at SRMIST" />
        <title>Electronics Club</title>
        <link rel="icon" href="/favicon.svg" /> 
      </head>
      <body className={inter.className + ' overflow-auto'}>{children}</body>
    </html>
  );
}
