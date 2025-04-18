import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	if (!locale || !routing.locales.includes(locale as any)) {
		locale = routing.defaultLocale;
	}
	const home = await import(`./translations/${locale}/home.json`);
	const notFound = await import(`./translations/${locale}/not-found.json`);
	const footer = await import(`./translations/${locale}/footer.json`);
	const pageNames = await import(`./translations/${locale}/page-names.json`);
	const about = await import(`./translations/${locale}/about.json`);
	const skills = await import(`./translations/${locale}/skills.json`);
	const career = await import(`./translations/${locale}/career.json`);
	const projects = await import(`./translations/${locale}/projects.json`);
	return {
		locale,
		messages: {
			...home,
			...notFound,
			...footer,
			...pageNames,
			...about,
			...skills,
			...career,
			...projects,
		},
	};
});
