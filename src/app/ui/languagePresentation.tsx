import Image from "next/image";
import { useTranslations } from "next-intl";
export default function LanguagePresentation({ name }: { name: string }) {
	const t = useTranslations("skills");
	const projects = t.raw(`detail.${name}.projects`);
	return (
		<div className="p-2 h-full w-full flex flex-row">
			<div className="w-2/8 flex items-center justify-center">
				<Image
					src={(name === "docker-compose")
						? "/icons/docker.svg"
						: `/icons/${name}.svg`}
					width={150}
					height={150}
					alt={`${name} svg logo`}
				/>
			</div>
			<div className="flex flex-col ml-3 w-6/8">
				<div>
					<h3 className="text-2xl font-bold">{name.toUpperCase()}</h3>
				</div>
				<div>
					<p className="text-md pl-2">{t(`detail.${name}.description`)}</p>
				</div>
				{projects.length >= 1 && (
					<div className="mt-2">
						<>
							<h4 className="text-lg">{t("detail.usedWith")}</h4>
							<ul className="list-disc list-inside pl-2">
								{projects.map((project: string, index: number) => (
									<li key={index} className="text-md">
										<span>{project}</span>
									</li>
								))}
							</ul>
						</>
					</div>
				)}
			</div>
		</div>
	);
}
