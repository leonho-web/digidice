import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/seo-provider";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/seo/schema-generator";

export const metadata: Metadata = generateSEOMetadata({
	title: "Responsible Gambling | digidice.com – Play Smart, Stay Safe",
	description:
		"Learn about responsible gambling at digidice.com. Stay in control, play responsibly, and get support through global help organizations.",
	keywords: [
		"DigiDice Responsible Gambling",
		"DigiDice play safe",
		"crypto casino responsible gaming",
		"gambling help",
		"DigiDice self exclusion",
	],
	path: "/responsible-gambling",
	pageType: "responsibleGambling",
	ogType: "website",
	ogImage: "/assets/seo/og.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: "Responsible Gambling at digidice.com",
			url: "https://digidice.com/responsible-gambling",
			description:
				"digidice.com promotes responsible crypto gaming. Learn to play safely, control habits, and access global gambling support organizations.",
		}),
	],
});

export default function ResponsibleGamblingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
