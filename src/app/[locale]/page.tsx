import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";

export const metadata: Metadata = {
  title: "Accueil - Portfolio - akastler",
  description: "written by akastler with Next.js",
};


export default function Home() {
  const t = useTranslations('home');
  return (
    <div>
      <h1 className="text-4xl font-bold">{t('main-text')}</h1>
    </div>
  );
}
