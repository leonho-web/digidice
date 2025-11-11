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

export const metadata: Metadata = generateSEOMetadata({
	title: `Terms & Conditions | ${siteName} – Crypto Casino Rules`,
	description: `Read ${siteName} Terms & Conditions. Learn about wallet login (Dynamic.xyz), crypto deposits, withdrawals, fair play, and responsible gaming policies.`,
=======
	interpolateSiteTLD,
} from "@/lib/utils/site-config";

const siteName = interpolateSiteName(`{siteName}`);
const siteTLD = interpolateSiteTLD(`{siteTLD}`);

export const metadata: Metadata = generateSEOMetadata({
	title: `Terms & Conditions | ${siteName}${siteTLD} – Crypto Casino Rules`,
	description: `Read ${siteName}${siteTLD} Terms & Conditions. Learn about wallet login (Dynamic.xyz), crypto deposits, withdrawals, fair play, and responsible gaming policies.`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
	keywords: [
		`${siteName} Terms and Conditions`,
		`${siteName} crypto casino rules`,
		"Dynamic.xyz wallet login",
		`${siteName} withdrawal policy`,
		`${siteName} fair play`,
	],
	path: "/terms-and-conditions",
	pageType: "terms",
<<<<<<< HEAD
	ogTitle: `Terms & Conditions | ${siteName} (Crypto Wallet Casino)`,
	ogDescription: `Review ${siteName}'s Terms & Conditions. Understand Dynamic.xyz wallet login, crypto deposits, withdrawals, and platform rules.`,
=======
	ogTitle: `Terms & Conditions | ${siteName}${siteTLD} (Crypto Wallet Casino)`,
	ogDescription: `Review ${siteName}${siteTLD}’s Terms & Conditions. Understand Dynamic.xyz wallet login, crypto deposits, withdrawals, and platform rules.`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
	ogType: "website",
	ogImage: "/assets/seo/og.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: `Terms & Conditions - ${siteName}`,
<<<<<<< HEAD
			url: `https://${siteDomain}/terms-and-conditions`,
=======
			url: `https://${siteName.toLowerCase()}${siteTLD}/terms-and-conditions`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
			description: `${siteName} Terms & Conditions - User agreement and platform rules.`,
		}),
	],
});

export default function TermsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
