import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "A propos - Portfolio - akastler",
  description: "written by akastler with Next.js",
};

export default function About() {
  const t = useTranslations('about');
  return (
    <div className="m-4">
      <div className="p-2 flex-col lg:flex-row bg-gray-400 rounded-[2vw]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full p-3 break-words">
            <h1 className="font-semibold text-3xl">{t("title")}</h1>
            <p className="text-lg mt-2">{t("description")}</p>
            <div>
              <h2 className="font-semibold text-2xl mt-4">
                {t("interestsTitle")}
              </h2>
              <p className="text-lg mt-2">{t("personnalInterests")}</p>
            </div>
            <div>
              <h2 className="font-semibold text-2xl mt-4">
                {t("pastTitle")}
              </h2>
              <p className="text-lg mt-2">{t("past")}</p>
            </div>
          </div>
          <div className="w-full bg-gray-500 flex items-center justify-center rounded-[2vw] p-3">
            <Image
              src="/me.jpg"
              alt="akastler"
              width={400}
              height={400}
              className="rounded-[2vw] shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}