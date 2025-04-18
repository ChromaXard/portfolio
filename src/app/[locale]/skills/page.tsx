import { Metadata } from "next";
import React from "react";
import { useTranslations } from "next-intl";
import LanguagePresentation from "@/app/ui/languagePresentation";

export const metadata: Metadata = {
	title: "A propos - Portfolio - akastler",
	description: "written by akastler with Next.js",
};

export default function About() {
	const t = useTranslations("skills");
	return (
		<div className="m-4 flex-1">
			<div className="p-4 flex-col lg:flex-row bg-gray-300 rounded-[2vw] w-full">
				<h1 className="text-5xl">{t("title")}</h1>
				<p className="text-lg mt-2">{t("description")}</p>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
					<div className="lg:col-span-2 h-25 flex items-center justify-center border-y-2">
						<h2 className="text-4xl">{t("webDev")}</h2>
					</div>
					<div>
						<LanguagePresentation name="html5" />
					</div>
					<div>
						<LanguagePresentation name="css3" />
					</div>
					<div>
						<LanguagePresentation name="javascript" />
					</div>
					<div>
						<LanguagePresentation name="typescript" />
					</div>
					<div>
						<LanguagePresentation name="react" />
					</div>
					<div>
						<LanguagePresentation name="nextjs" />
					</div>
					<div>
						<LanguagePresentation name="bootstrap" />
					</div>
					<div>
						<LanguagePresentation name="tailwind" />
					</div>
					<div>
						<LanguagePresentation name="flask" />
					</div>
					<div>
						<LanguagePresentation name="django" />
					</div>
					<div>
						<LanguagePresentation name="sql" />
					</div>
					<div>
						<LanguagePresentation name="docker" />
					</div>
					<div className="lg:col-span-2 lg:justify-self-center lg:w-1/2">
						<LanguagePresentation name="docker-compose" />
					</div>
					<div className="lg:col-span-2 h-25 flex items-center justify-center border-y-2">
						<h2 className="text-4xl text-center">{t("otherLanguageUsed")}</h2>
					</div>
					<div>
						<LanguagePresentation name="python" />
					</div>
					<div>
						<LanguagePresentation name="c" />
					</div>
					<div className="lg:col-span-2 lg:justify-self-center lg:w-1/2">
						<LanguagePresentation name="c++" />
					</div>
				</div>
			</div>
		</div>
	);
}
