import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/utils/seo/seo-provider";
import { getDynamicSEOConfig } from "@/lib/utils/seo/seo-config-loader";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/utils/seo/schema-generator";

// Generate SEO Metadata for About Page
export async function generateMetadata(): Promise<Metadata> {
	const config = await getDynamicSEOConfig();

	const siteName = config.defaults.siteName;
	// Ensure domain doesn't have protocol for display purposes if needed, or use directly
	const siteDomain = config.defaultDomain;

	return generateSEOMetadata({
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
		path: "/about-us",
		pageType: "about",
		ogTitle: `About ${siteName} | Trusted Global Crypto Casino Platform`,
		ogDescription: `Discover ${siteName} — a secure, provably fair crypto casino offering 5,000+ games, live tables, and sports betting. Built on blockchain for fairness, speed, and transparency`,
		ogType: "website",
		ogImage: "/assets/seo/ABOUT_US.png",
		schemas: [
			generateOrganizationSchema(config),
			generateWebPageSchema(
				{
					title: `About ${siteName} | Trusted Global Online Casino Platform`,
					url: `${siteDomain}/about-us`,
					description: `Learn about ${siteName} a secure, global casino platform offering slots, live casino, sports betting, and poker. Fair, fast, and built for real players.`,
				},
				config
			),
		],
	});
}

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
