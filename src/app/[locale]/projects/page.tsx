import React from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
	title: "Projets - Portfolio - akastler",
	description: "written by akastler with Next.js",
};

export default function Projects() {
	const t = useTranslations("projects");
	return (
		<div className="w-full h-full m-3">
			<h1 className="text-3xl font-bold">{t("title")}</h1>
			<div className="flex flex-col">
				<div>ft_transcendence</div>
				<div>ft_irc</div>
				<div>Portfolio</div>
			</div>
		</div>
	);
}
