import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/utils/seo/seo-provider";
import { getDynamicSEOConfig } from "@/lib/utils/seo/seo-config-loader";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/utils/seo/schema-generator";

// Generate SEO Metadata for Affiliate Page
export async function generateMetadata(): Promise<Metadata> {
	const config = await getDynamicSEOConfig();

	const siteName = config.defaults.siteName;
	const siteDomain = config.defaultDomain;

	return generateSEOMetadata({
		title: `Affiliate Program | ${siteDomain} – Earn Crypto Commissions`,
		description: `Partner with ${siteDomain} and earn lifetime crypto commissions. Transparent tracking, global reach, and instant affiliate payouts for every referred player.`,
		keywords: [
			`${siteDomain} affiliate`,
			`${siteName} partners`,
			"crypto affiliate marketing",
			"casino referral program",
			"lifetime commission",
			"blockchain affiliate network",
			"earn crypto online",
			"gaming affiliate dashboard",
			`${siteName} partnership`,
			"passive crypto income",
		],
		path: "/affiliate",
		pageType: "affiliate",
		ogTitle: `Join the ${siteName} Affiliate Program | Earn Lifetime Crypto Commissions`,
		ogDescription: `Partner with ${siteName} and earn lifetime crypto rewards. Promote a top-tier crypto casino offering slots, live games, and sports betting to a global audience.`,
		ogType: "website",
		ogImage: "/assets/seo/AFFILIATE.png",
		ogUrl: `${siteDomain}/affiliate`,
		schemas: [
			generateOrganizationSchema(config),
			generateWebPageSchema(
				{
					title: `Join the ${siteName} Affiliate Program – Earn Lifetime Commissions`,
					url: `${siteDomain}/affiliate`,
					description: `Partner with ${siteName} & earn lifetime income for every player you refer. Easy setup & global reach.`,
				},
				config
			),
		],
	});
}

export default function AffiliateLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
