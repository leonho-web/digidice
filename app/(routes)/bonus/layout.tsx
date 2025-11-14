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

// Generate SEO Metadata for Bonus Page
export const metadata: Metadata = generateSEOMetadata({
	title: `Bonuses & Rewards | ${siteDomain} – Earn Crypto Daily`,
	description: `Join ${siteDomain} Turnover Bonus and earn daily crypto rewards. Play slots, poker, and live casino games with transparent rewards and instant payouts.`,
	keywords: [
		`${siteDomain} bonuses`,
		`${siteName} rewards`,
		"crypto casino bonus",
		"turnover bonus",
		"daily rewards",
		"blockchain promotions",
		"VIP crypto program",
		"cashback casino",
		"crypto gaming incentives",
		"play to earn casino",
		`${siteName} offers`,
		"exclusive crypto bonuses",
	],
	path: "/bonus",
	pageType: "bonus",
	ogTitle: `${siteName} Turnover Bonus | Earn Crypto Rewards While You Play`,
	ogDescription: `Unlock daily turnover bonuses and exclusive crypto rewards at ${siteName}. Play slots, live casino, and sports — get paid instantly with blockchain transparency.`,
	ogType: "website",
	ogImage: "/assets/seo/TURNOVER_BONUS.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: `${siteName} Turnover Bonus – Earn Rewards While You Play`,
			url: `https://${siteDomain}/bonus`,
			description: `Join the ${siteName} Turnover Bonus Program & earn daily rewards as you play slots & live games.`,
		}),
	],
});

export default function BonusLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
