import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/utils/seo/seo-provider";
import { getDynamicSEOConfig } from "@/lib/utils/seo/seo-config-loader";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/utils/seo/schema-generator";

export async function generateMetadata(): Promise<Metadata> {
	const config = await getDynamicSEOConfig();

	const siteName = config.defaults.siteName;
	const siteDomain = config.defaultDomain;
	return generateSEOMetadata({
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
		ogUrl: `${siteDomain}/faqs`,
		schemas: [
			generateOrganizationSchema(config),
			generateWebPageSchema(
				{
					title: `FAQs – ${siteName} Crypto Casino Help Center`,
					url: `${siteDomain}/faqs`,
					description: `Explore FAQs at ${siteName}. Learn how to connect your wallet, deposit crypto, withdraw winnings, and play provably fair blockchain games.`,
				},
				config
			),
		],
	});
}

export default function FAQsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
