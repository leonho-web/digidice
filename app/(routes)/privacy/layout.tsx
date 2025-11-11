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

// Generate SEO Metadata for Privacy Policy Page
export const metadata: Metadata = generateSEOMetadata({
	title: `Privacy Policy | ${siteName} – Crypto Wallet Casino Security`,
	description: `Learn how ${siteName} protects wallet addresses and crypto data with SSL, AML, and GDPR-compliant privacy for secure blockchain gaming.`,
	keywords: [
		`${siteName} privacy policy`,
		`${siteName} crypto casino`,
		`${siteName} data protection`,
		`${siteName} wallet security`,
		"crypto gambling privacy",
		"GDPR crypto casino",
		"blockchain casino policy",
		`${siteName} games secure`,
=======
	interpolateSiteTLD,
} from "@/lib/utils/site-config";

const siteName = interpolateSiteName(`{siteName}`);
const siteTLD = interpolateSiteTLD(`{siteTLD}`);

// Generate SEO Metadata for Privacy Policy Page
export const metadata: Metadata = generateSEOMetadata({
	title: "Privacy Policy | HyperBetz.games – Crypto Wallet Casino Security",
	description:
		"Learn how HyperBetz.games protects wallet addresses and crypto data with SSL, AML, and GDPR-compliant privacy for secure blockchain gaming.",
	keywords: [
		"HyperBetz privacy policy",
		"HyperBetz crypto casino",
		"HyperBetz data protection",
		"HyperBetz wallet security",
		"crypto gambling privacy",
		"GDPR crypto casino",
		"blockchain casino policy",
		"HyperBetz games secure",
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
		"crypto betting privacy",
	],
	path: "/privacy",
	pageType: "privacy",
<<<<<<< HEAD
	ogTitle: `Privacy & Data Protection | ${siteName} (Crypto Casino)`,
	ogDescription: `Explore how ${siteName} safeguards your crypto wallet and transaction data with advanced encryption and GDPR-compliant protection.`,
=======
	ogTitle: `Privacy & Data Protection | ${siteName}${siteTLD} (Crypto Casino)`,
	ogDescription: `Explore how ${siteName}${siteTLD} safeguards your crypto wallet and transaction data with advanced encryption and GDPR-compliant protection.`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
	ogType: "website",
	ogImage: "/assets/seo/og.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: `Privacy Policy - ${siteName}`,
<<<<<<< HEAD
			url: `https://${siteDomain}/privacy`,
=======
			url: `https://${siteName.toLowerCase()}${siteTLD}/privacy`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
			description: `${siteName} Privacy Policy - How we collect, use, store and protect your personal and transaction data.`,
		}),
	],
});

export default function PrivacyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
