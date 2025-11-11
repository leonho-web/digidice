import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/seo-provider";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/seo/schema-generator";
import {
	interpolateSiteName,
<<<<<<< HEAD
	interpolateSiteDomain,
} from "@/lib/utils/site-config";

const siteName = interpolateSiteName(`{siteName}`);
const siteDomain = interpolateSiteDomain(`{siteDomain}`);
=======
	interpolateSiteTLD,
} from "@/lib/utils/site-config";

const siteName = interpolateSiteName(`{siteName}`);
const siteTLD = interpolateSiteTLD(`{siteTLD}`);
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9

// Generate SEO Metadata for Bonus Page
export const metadata: Metadata = generateSEOMetadata({
	title: `${siteName} Turnover Bonus – Earn Rewards While You Play`,
	description: `Join the ${siteName} Turnover Bonus Program & earn daily rewards as you play slots & live games.`,
	keywords: [
		`${siteName} bonuses`,
		"crypto casino bonus",
		"turnover bonus",
		"reload bonus",
		"daily rewards",
		"wagering rewards",
		"crypto cashback",
		"play to earn casino",
		`${siteName} promotions`,
		"crypto gambling bonuses",
		"VIP rewards",
		"blockchain casino offers",
		"exclusive casino deals",
		"live casino bonuses",
		"crypto gaming incentives",
	],
	path: "/bonus",
	pageType: "bonus",
	ogTitle: `${siteName} Turnover Bonus | Earn Crypto Rewards While You Play`,
<<<<<<< HEAD
	ogDescription: `Unlock daily turnover bonuses and exclusive crypto rewards at ${siteName}. Play slots, live casino, and sports — get paid instantly with blockchain transparency.`,
=======
	ogDescription: `Unlock daily turnover bonuses and exclusive crypto rewards at ${siteName}${siteTLD}. Play slots, live casino, and sports — get paid instantly with blockchain transparency.`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
	ogType: "website",
	ogImage: "/assets/seo/TURNOVER_BONUS.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: `${siteName} Turnover Bonus – Earn Rewards While You Play`,
<<<<<<< HEAD
			url: `https://${siteDomain}/bonus`,
=======
			url: `https://${siteName.toLowerCase()}${siteTLD}/bonus`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
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
