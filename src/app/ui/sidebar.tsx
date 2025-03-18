"use client";

import React, { startTransition, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { set } from "lodash";

const Sidebar = () => {
	useEffect(() => {
		const loadTranslations = async () => {
			const frTrad = await import("../../i18n/translations/fr/page-names.json");
			const enTrad = await import("../../i18n/translations/en/page-names.json");
			// Use the loaded translations here
			setTranslations({ fr: frTrad.pageNames, en: enTrad.pageNames });
			setIsMounted(true);
		};
		loadTranslations().then(() => {
			setTranslations((prev) => ({ ...prev }));
		});
	}, []);
	const [isMounted, setIsMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isProjectsOpen, setIsProjectsOpen] = useState(false);
	const pathname = usePathname();
	const locale = pathname.split("/")[1];
	const localeToSet = locale === "en" ? "fr" : "en";
	const pathToAdd = pathname.substring(3);
	const [translations, setTranslations] = useState<{ [key: string]: { [key: string]: string } }>({en: {}, fr: {}});
	function t(key: string) {
		if (!translations[locale]) return "";
		return translations[locale][key] || "";
	}
	// const t = useTranslations("pageNames");

	return (
		<>
			{/* Sidebar */}
			<div
				className={`fixed left-0 top-0 h-full bg-gray-900 text-white p-5 transition-all duration-300 ease-in-out z-50 ${
					isOpen ? "w-64" : "w-16"
				}`}
			>
				{/* Bouton de toggle */}
				<button onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					)}
				</button>

				{/* Contenu */}
				<div
					className={`transition-opacity duration-300 ${
						isOpen ? "opacity-100" : "opacity-0 hidden"
					}`}
				>
					<ul>
						<li className="mb-3">
							<Link onClick={() => setIsOpen(false)} href={`/${locale}`}>
								{t("home")}
							</Link>
						</li>
						<li className="mb-3">
							<Link onClick={() => setIsOpen(false)} href="/about">
								{t("about")}
							</Link>
						</li>
						<li className="mb-3">
							<Link onClick={() => setIsOpen(false)} href="/career">
								{t("career")}
							</Link>
						</li>
						<li className="mb-3">
							<div className="flex items-center justify-between">
								<Link onClick={() => setIsOpen(false)} href="/projects">
									{t("projects")}
								</Link>
								<button
									onClick={() => setIsProjectsOpen(!isProjectsOpen)}
									className="ml-2 focus:outline-none"
								>
									<svg
										className={`w-4 h-4 transform transition-transform duration-300 ${
											isProjectsOpen ? "rotate-180" : ""
										}`}
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
							</div>
							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${
									isProjectsOpen ? "max-h-40" : "max-h-0"
								}`}
							>
								<ul className="ml-5 mt-2 space-y-2">
									<li>
										<Link
											onClick={() => setIsOpen(false)}
											href="/projects/ft_transcendence"
										>
											ft_transcendence
										</Link>
									</li>
									<li>
										<Link
											onClick={() => setIsOpen(false)}
											href="/projects/ft_irc"
										>
											ft_irc
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className="mb-3">
							<Link onClick={() => setIsOpen(false)} href="/contact">
								{t("contact")}
							</Link>
						</li>
					</ul>
					<div id="change-language" className="absolute bottom-5 left-5 ">
						{
							<Link href={`/${localeToSet}${pathToAdd}`} onClick={() => setIsOpen(false)}>
								{locale === "en" ? "🇫🇷" : "🇬🇧"}
							</Link>
						}
					</div>
				</div>
			</div>

			{/* Overlay pour fermer la sidebar quand on clique en dehors */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-opacity-50 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	);
};

export default Sidebar;
