import { Metadata } from "next";
import React from "react";
import { useTranslations } from "next-intl";
import LanguageProgress from "@/app/ui/languageProgress";

export const metadata: Metadata = {
	title: "A propos - Portfolio - akastler",
	description: "written by akastler with Next.js",
};

export default function About() {
	const t = useTranslations("skills");
	return (
		<div className="m-4 flex-1">
			<div className="p-4 flex-col lg:flex-row bg-gray-400 rounded-[2vw] w-full">
				<h1 className="text-3xl">{t("title")}</h1>
				<p className="text-lg mt-2">{t("description")}</p>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-500 lg:col-span-2 h-25 rounded-[1vw] flex items-center justify-center">
            <h2 className="text-2xl">
              {t("webDev")}
            </h2>
          </div>
					<div>
            <LanguageProgress name="html5" percent={70} />
          </div>
					<div>
            <LanguageProgress name="css3" percent={10} />
          </div>
					<div className="bg-gray-500 h-25 rounded-[1vw]"></div>
					<div className="bg-gray-500 h-25 rounded-[1vw]"></div>
					<div className="bg-gray-500 h-25 rounded-[1vw]"></div>
					<div className="bg-gray-500 h-25 rounded-[1vw]"></div>
					<div className="bg-gray-500 h-25 rounded-[1vw] lg:col-span-2 lg:justify-self-center lg:w-1/2"></div>
				</div>
			</div>
		</div>
	);
}
