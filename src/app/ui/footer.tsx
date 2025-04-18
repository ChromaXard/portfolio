import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
	const t = useTranslations("footer");
	return (
		<footer className="text-center text-sm bg-gray-800 text-gray-200">
			<div>
				<p>
					<a
						href="https://github.com/ChromaXard"
						className=" hover:text-gray-600"
						aria-label="GitHub"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5 inline-block"
						>
							<path
								fillRule="evenodd"
								d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.563 4.936.36.31.682.92.682 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
					<span className="mx-2">•</span>
					<a
						href="https://www.linkedin.com/in/akastler"
						className=" hover:text-gray-600"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5 inline-block"
						>
							<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
						</svg>
					</a>
				</p>
			</div>
			<div className="text-center text-sm ">
				<Link href="/legalMentions">{t("legalMetions")}</Link>
				<span className="mx-2">•</span>
				<Link href="/plan-du-site">{t("siteMap")}</Link>
			</div>
			<div className="text-center text-sm ">
				© {new Date().getFullYear()} Axel KASTLER.{" "}
				{t("rights")}
			</div>
		</footer>
	);
}
