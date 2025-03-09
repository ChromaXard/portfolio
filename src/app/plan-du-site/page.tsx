import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan du site - Portfolio - akastler",
  description: "written by akastler with Next.js",
};

export default function SiteMap() { 
  return (
    <div className="flex-1">
      <h1 className="text-4xl font-bold mb-5">Plan du site</h1>
      <ul className="space-y-2 list-inside list-disc">
        <li>
          <Link
            href="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/about">
            A propos
          </Link>
        </li>

      </ul>
    </div>
  );
}