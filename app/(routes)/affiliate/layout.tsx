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
// Generate SEO Metadata for Affiliate Bonus Page
export const metadata: Metadata = generateSEOMetadata({
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
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: `Join the ${siteName} Affiliate Program – Earn Lifetime Commissions`,
			url: `https://${siteDomain}/affiliate`,
			description: `Partner with ${siteName} & earn lifetime income for every player you refer. Easy setup & global reach.`,
		}),
	],
});

export default function AffiliateLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
