import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/seo-provider";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/seo/schema-generator";

export const metadata: Metadata = generateSEOMetadata({
<<<<<<< HEAD
	title: "Terms & Conditions | DigiDice.games – Crypto Casino Rules",
	description:
		"Read DigiDice.games Terms & Conditions. Learn about wallet login (Dynamic.xyz), crypto deposits, withdrawals, fair play, and responsible gaming policies.",
	keywords: [
		"DigiDice Terms and Conditions",
		"DigiDice crypto casino rules",
		"Dynamic.xyz wallet login",
		"DigiDice withdrawal policy",
		"DigiDice fair play",
=======
	title: "Terms & Conditions | HyperBetz.games – Crypto Casino Rules",
	description:
		"Read HyperBetz.games Terms & Conditions. Learn about wallet login (Dynamic.xyz), crypto deposits, withdrawals, fair play, and responsible gaming policies.",
	keywords: [
		"HyperBetz Terms and Conditions",
		"HyperBetz crypto casino rules",
		"Dynamic.xyz wallet login",
		"HyperBetz withdrawal policy",
		"HyperBetz fair play",
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
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
