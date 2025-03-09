import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Accueil - Portfolio - akastler",
  description: "written by akastler with Next.js",
};


export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Axel Kastler</h1>
    </div>
  );
}
