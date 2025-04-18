import React from "react";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<main className="flex w-full h-full bg-gray-300 text-black">
				{children}
			</main>
		</>
	);
}
