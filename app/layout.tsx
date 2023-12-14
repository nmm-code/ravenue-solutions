import "./globals.scss";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav/Nav";
import { env } from "process";
import { Poppins } from "next/font/google";

const font = Poppins({
	weight: ["400", "500", "600", "700"],
	preload: true,
	subsets: ["latin-ext"],
});

export const metadata: Metadata = {
	title: "Nordic Ravenue Solutions",
	description: "Ihr Wegweiser zu messbarem Geschäftserfolg",
	themeColor: "#000000",
	viewport: "width=device-width, initial-scale=1",
	generator: "Next.js",
	keywords: [
		"Nordic Ravenue Solutions",
		"Ravenue Solutions",
		"Ravenue",
		"Nordic",
		"Nordic Ravenue",
		"Complead",
		"Amazon Seller Lead Generation",
		"Hubspot CRM Automation",
		"Prozessautomatisierung Dienstleistungen",
		"Custom Software Solutions Germany",
		"Datenpflege Automatisierung",
		"Softwareentwicklung Hamburg",
		"Vertriebsstrategie Optimierung",
		"CRM Daten Synchronisierung",
		"B2B Lead Datenbank",
	],
	robots: {
		follow: true,
		index: true,
	},
	alternates: {
		canonical: env.DOMAIN,
		languages: { de: env.DOMAIN, en: env.DOMAIN_EN },
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="de">
			<body className={font.className}>
				<Nav />
				{children}
			</body>
		</html>
	);
}
