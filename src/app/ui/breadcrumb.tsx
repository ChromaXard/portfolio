"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Breadcrumb = () => {
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
	const [translations, setTranslations] = useState<{ [key: string]: { [key: string]: string } }>({en: {}, fr: {}});
	const pathname = usePathname();
	const pathSegments = pathname.split("/").filter((segment) => segment);
	const locale = pathSegments[0];
	function t(key: string) {
		if (!translations[locale] || isMounted == false) return "";
		return translations[locale][key] || "";
	}
	// const t = useTranslations("pageNames");
	

	return (
		<div className="fixed top-0 left-16 w-full bg-gray-800 align-middle p-2 z-50 h-10">
			<nav className="text-white text-sm">
				<ul className="flex items-center space-x-2">
					{/* Lien vers l'accueil */}
					<li>
						<Link href={`/${locale}`} className="hover:text-blue-500">
							{t("home")}
						</Link>
						{pathSegments.length > 0 && <span className="mx-2">/</span>}
					</li>

					{/* Génération dynamique des breadcrumbs */}
					{pathSegments.map((segment, index) => {
						const href = "/" + pathSegments.slice(0, index + 1).join("/");
						const hasLabel = translations[locale] && translations[locale][segment];
						const label = hasLabel ? t(segment) : segment;
						if (label === "fr" || label === "en") {
							return null;
						}

						return (
							<li key={href} className="flex items-center">
								<Link href={href} className="hover:text-blue-500">
									{label}
								</Link>
								{index < pathSegments.length - 1 && (
									<span className="mx-2">/</span>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Breadcrumb;
