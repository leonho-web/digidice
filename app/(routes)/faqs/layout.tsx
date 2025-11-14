import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/seo-provider";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/seo/schema-generator";
import {
	interpolateSiteName,
	interpolateSiteDomain,
} from "@/lib/utils/site-config";

const siteName = interpolateSiteName(`{siteName}`);
const siteDomain = interpolateSiteDomain(`{siteDomain}`);

export const metadata: Metadata = generateSEOMetadata({
	title: `FAQs | ${siteDomain} – Crypto Casino Help & Support`,
	description: `Find answers to ${siteDomain} FAQs. Learn about wallet login, crypto deposits, withdrawals, fair play, and blockchain transparency.`,
	keywords: [
		`${siteName} FAQ`,
		`${siteName} crypto casino help`,
		`${siteName} wallet login`,
		"crypto deposit guide",
		"crypto withdrawals",
		"provably fair casino",
		"blockchain gambling help",
		`${siteName} support`,
	],
	path: "/faqs",
	pageType: "faqs",
	ogTitle: `FAQs | ${siteName} – Crypto Casino Help & Support`,
	ogDescription: `Explore FAQs at ${siteName}. Learn how to connect your wallet, deposit crypto, withdraw winnings, and play provably fair blockchain-based casino games.`,
	ogType: "website",
	ogImage: "/assets/seo/og.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: `FAQs – ${siteName} Crypto Casino Help Center`,
			url: `https://${siteDomain}/faqs`,
			description: `Explore FAQs at ${siteName}. Learn how to connect your wallet, deposit crypto, withdraw winnings, and play provably fair blockchain games.`,
		}),
	],
});

export default function FAQsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
