import { NextIntlClientProvider, useMessages } from "next-intl";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

import Sidebar from "./ui/sidebar";
import Breadcrumb from "./ui/breadcrumb";

const geistMono = Noto_Sans({
	variable: "--font-noto-sans",
	subsets: ["latin"],
	weight: "500",
});

export const metadata: Metadata = {
	title: "Portfolio - akastler",
	description: "written by akastler with Next.js",
};

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const messages = useMessages(); // 🔥 Récupère un objet JSON sérialisable

	return (
		<html lang={params.locale}>
			<body className={`${geistMono.className} antialiased`}>
				<NextIntlClientProvider locale={params.locale} messages={messages}>
					<header>
						<Sidebar />
						{/* <div className="flex">
							<div className="flex-none w-16 h-8"></div> */}
						<Breadcrumb />
						{/* </div> */}
					</header>
					<div className="flex h-screen">
						<div className="flex-none w-16"></div>
						<div className="flex flex-col w-full h-full">
							<div className="h-10"></div>
							{children}{" "}
						</div>

					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
