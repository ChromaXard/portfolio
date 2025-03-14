"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
	const pathname = usePathname();
	const pathSegments = pathname.split("/").filter((segment) => segment);
	const locale = pathSegments[0];
	const t = useTranslations("pageNames");
	

	return (
		<div className="border-b border-gray-400 mb-3 pb-2 w-full">
			<nav className="text-gray-600 text-sm">
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
						const hasLabel = t.has(segment);
						var label = hasLabel ? t(segment) : segment;
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
