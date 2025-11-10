import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/seo-provider";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/seo/schema-generator";

export const metadata: Metadata = generateSEOMetadata({
	title: "Terms & Conditions | digidice.com – Crypto Casino Rules",
	description:
		"Read digidice.com Terms & Conditions. Learn about wallet login (Dynamic.xyz), crypto deposits, withdrawals, fair play, and responsible gaming policies.",
	keywords: [
		"DigiDice Terms and Conditions",
		"DigiDice crypto casino rules",
		"Dynamic.xyz wallet login",
		"DigiDice withdrawal policy",
		"DigiDice fair play",
	],
	path: "/terms",
	pageType: "terms",
	ogType: "website",
	ogImage: "/assets/seo/og.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: "Terms & Conditions - DigiDice",
			url: "https://digidice.com/terms",
			description:
				"DigiDice Terms & Conditions - User agreement and platform rules.",
		}),
	],
});

export default function TermsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
