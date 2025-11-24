import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/utils/seo/seo-provider";
import { getDynamicSEOConfig } from "@/lib/utils/seo/seo-config-loader";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/utils/seo/schema-generator";

// Generate SEO Metadata for Games Page
export async function generateMetadata(): Promise<Metadata> {
	const config = await getDynamicSEOConfig();

	const siteName = config.defaults.siteName;
	// Ensure domain doesn't have protocol for display purposes if needed, or use directly
	const siteDomain = config.defaultDomain;
	return generateSEOMetadata({
		title: `All Games | ${siteDomain} – Slots, Poker & Live Casino`,
		description: `Explore 5000+ crypto games at ${siteDomain}. Play slots, poker, and live casino titles with instant wallet access, no KYC, and fair blockchain-based gameplay.`,
		keywords: [
			`${siteDomain} games`,
			`${siteName} slots`,
			"crypto casino games",
			"play poker online crypto",
			"live crypto casino",
			"provably fair casino",
			"no KYC gaming",
			"decentralized betting",
			"blockchain casino games",
			"crypto poker tables",
			`${siteName} live gaming`,
		],
		path: "/games",
		pageType: "games",
		ogTitle: `All Games at ${siteName} | Slots, Poker, Live Casino & Sports`,
		ogDescription: `Play 5,000+ casino games at ${siteName} — including crypto slots, live dealers, poker, and sports betting. Fast wallet payouts and provably fair gaming on every spin.`,
		ogType: "website",
		ogImage: "/assets/seo/GAMES.png",
		schemas: [
			generateOrganizationSchema(config),
			generateWebPageSchema(
				{
					title: `All Games on ${siteName} – Slots, Poker & Live Casino`,
					url: `${siteDomain}/games`,
					description: `Discover the full ${siteName} game list – slots, poker & live casino from top providers. Play instantly, win securely.`,
				},
				config
			),
		],
	});
}

export default function GamesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
