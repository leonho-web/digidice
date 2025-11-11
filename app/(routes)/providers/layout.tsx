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

// Generate SEO Metadata for Providers Page
export const metadata: Metadata = generateSEOMetadata({
	title: `Game Providers at ${siteName} – Top Casino Studios`,
	description: `Explore 50+ trusted providers on ${siteName} – Pragmatic Play, Red Tiger, Microgaming & more. Fair, certified gaming.`,
	keywords: [
		`${siteName} game providers`,
		"crypto casino providers",
		"best slot developers",
		"blockchain casino games",
		"live casino studios",
		"crypto game suppliers",
		"Habanero",
		"Yggdrasil",
		"Pragmatic Play",
		"Playtech",
		"PG Soft",
		"NetEnt games",
		"casino software partners",
		"provably fair providers",
		`${siteName} live dealers`,
	],
	path: "/providers",
	pageType: "providers",
<<<<<<< HEAD
	ogTitle: `Top Game Providers | ${siteName} – Pragmatic Play, NetEnt, Yggdrasil`,
	ogDescription: `Explore leading casino providers at ${siteName}. Play certified crypto slots and live dealer games from Pragmatic Play, Yggdrasil, NetEnt, and more. 100% fair and secure.`,
=======
	ogTitle: `Top Game Providers | ${siteName}${siteTLD} – Pragmatic Play, NetEnt, Yggdrasil`,
	ogDescription: `Explore leading casino providers at ${siteName}${siteTLD}. Play certified crypto slots and live dealer games from Pragmatic Play, Yggdrasil, NetEnt, and more. 100% fair and secure.`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
	ogType: "website",
	ogImage: "/assets/seo/PROVIDERS.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: `Game Providers at ${siteName} – Top Casino Studios`,
<<<<<<< HEAD
			url: `https://${siteDomain}/providers`,
=======
			url: `https://${siteName.toLowerCase()}${siteTLD}/providers`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
			description: `Explore 50+ trusted providers on ${siteName} – Pragmatic Play, Red Tiger, Microgaming & more. Fair, certified gaming.`,
		}),
	],
});

export default function ProvidersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
