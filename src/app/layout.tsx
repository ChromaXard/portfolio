import { NextIntlClientProvider, useMessages } from "next-intl";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import Footer from "./ui/footer";

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
	const messages = useMessages();

	return (
		<html lang={params.locale}>
			<body className={`${geistMono.className} antialiased min-h-screen`}>
				<NextIntlClientProvider locale={params.locale} messages={messages}>
					<header>
						<Sidebar />
						<Breadcrumb />
					</header>
					<div className="flex-1 flex flex-row min-h-screen flex-grow">
						<div className="flex-none w-16 bg-gray-900"></div>
						<div className="flex flex-col w-full min-h-full">
							<div className="h-10 bg-gray-900"></div>
							{children}
						</div>
					</div>
					<div className="flex flex-row w-full">
						<div className="flex-none w-16 bg-gray-900"></div>
						<Footer />
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
