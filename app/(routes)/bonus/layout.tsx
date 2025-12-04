import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/utils/seo/seo-provider";
import { getDynamicSEOConfig } from "@/lib/utils/seo/seo-config-loader";

import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/utils/seo/schema-generator";

// Generate SEO Metadata for Bonus Page
export async function generateMetadata(): Promise<Metadata> {
	const config = await getDynamicSEOConfig();

	const siteName = config.defaults.siteName;
	const siteDomain = config.defaultDomain;
	return generateSEOMetadata({
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
		ogUrl: `${siteDomain}/bonus`,
		schemas: [
			generateOrganizationSchema(config),
			generateWebPageSchema(
				{
					title: `${siteName} Turnover Bonus – Earn Rewards While You Play`,
					url: `${siteDomain}/bonus`,
					description: `Join the ${siteName} Turnover Bonus Program & earn daily rewards as you play slots & live games.`,
				},
				config
			),
		],
	});
}

export default function BonusLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
