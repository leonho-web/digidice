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
// Generate SEO Metadata for About Page
export const metadata: Metadata = generateSEOMetadata({
	title: `About ${siteDomain} | Secure Global Crypto Casino Platform`,
	description: `Learn about ${siteDomain} —  a decentralized crypto casino offering 5000+ slots, poker, and live casino games. Instant wallet login, fair play, and fast payouts.`,
	keywords: [
		`${siteDomain}`,
		`about ${siteName}`,
		`${siteName} crypto casino`,
		"decentralized gaming",
		"blockchain gambling",
		"provably fair crypto games",
		"instant wallet login",
		"secure crypto platform",
		"global online casino",
		"no KYC crypto gaming",
	],
	path: "/about",
	pageType: "about",
	ogTitle: `About ${siteName} | Trusted Global Crypto Casino Platform`,
	ogDescription: `Discover ${siteName} — a secure, provably fair crypto casino offering 5,000+ games, live tables, and sports betting. Built on blockchain for fairness, speed, and transparency`,
	ogType: "website",
	ogImage: "/assets/seo/ABOUT_US.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: `About ${siteName} | Trusted Global Online Casino Platform`,
			url: `https://${siteDomain}/about`,
			description: `Learn about ${siteName} — a secure, global casino platform offering slots, live casino, sports betting, and poker. Fair, fast, and built for real players.`,
		}),
	],
});

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	
	return <>{children}</>;
}
