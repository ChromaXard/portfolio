"use client"; 
import { createContext, useContext, useState } from "react";

const LocaleContext = createContext({
	locale: "fr",
	setLocale: (locale: string) => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
	const [locale, setLocale] = useState("fr");

	return (
		<LocaleContext.Provider value={{ locale, setLocale }}>
			{children}
		</LocaleContext.Provider>
	);
}

export function useLocale() {
	return useContext(LocaleContext);
}