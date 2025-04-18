import React from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Projets - Portfolio - akastler",
	description: "written by akastler with Next.js",
};

export default function Projects() {
	const t = useTranslations("projects");
	return (
		<div className="w-full h-full m-3">
			<h1 className="text-2xl lg:text-3xl font-bold mb-4">{t("title")}</h1>
			<div className="flex flex-col">
				<div
					style={{
						backgroundImage: "url('/ft_transcendence.png')",
						backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
					}}
					className="w-full h-150 mb-4"
				>
					<Link href="projects/ft_transcendence">
						<div className="w-full h-full bg-black/50 flex items-center justify-center text-white text-3xl font-bold hover:bg-black/70 transition-all duration-300 p-4">
							<h1 className="text-xl lg:text-3xl font-bold mb-4">ft_transcendence</h1>
						</div>
					</Link>
				</div>
        <div
					style={{
						backgroundImage: "url('/ft_irc.png')",
						backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
					}}
					className="w-full h-150 mb-4"
				>
					<Link href="projects/ft_irc">
						<div className="w-full h-full bg-black/50 flex items-center justify-center text-white text-3xl font-bold hover:bg-black/70 transition-all duration-300 p-4">
							<h1 className="text-xl lg:text-3xl font-bold mb-4">ft_irc</h1>
						</div>
					</Link>
				</div>
        <div
					style={{
						backgroundImage: "url('/portfolio.png')",
						backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
					}}
					className="w-full h-150"
				>
					<Link href="projects/portfolio">
						<div className="w-full h-full bg-black/50 flex items-center justify-center text-white text-3xl font-bold hover:bg-black/70 transition-all duration-300 p-4">
							<h1 className="text-xl lg:text-3xl font-bold mb-4">portfolio</h1>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
