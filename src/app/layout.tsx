import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import React, {  } from "react";

import Sidebar from "./ui/sidebar";
import Breadcrumb from "./ui/breadcrumb";


const geistMono = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "Portfolio - akastler",
  description: "written by akastler with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} antialiased`}
      >
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />
          <div className="flex w-16"></div>
          {/* Contenu principal */}
          <div className="flex-1 p-5 overflow-auto">
            <Breadcrumb />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}