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

// Generate SEO Metadata for Privacy Policy Page
export const metadata: Metadata = generateSEOMetadata({
	title: `Privacy Policy | ${siteDomain} – Secure Crypto Casino`,
	description: `Learn how ${siteName} protects your crypto wallet and data. Blockchain privacy, full transparency, and no KYC for secure decentralized gaming.`,
	keywords: [
		`${siteName} privacy policy`,
		`${siteName} crypto casino`,
		`${siteName} data protection`,
		`${siteName} wallet security`,
		"blockchain privacy",
		"no KYC casino",
		"decentralized gaming",
		"crypto casino GDPR",
		"wallet-based casino",
		`${siteName} security`,
	],
	path: "/privacy",
	pageType: "privacy",
	ogTitle: `Privacy & Data Protection | ${siteName} (Crypto Casino)`,
	ogDescription: `${siteDomain} safeguards your crypto wallet and blockchain data with top-tier encryption, privacy-first technology, and no KYC authentication.`,
	ogType: "website",
	ogImage: "/assets/seo/og.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
			title: `Privacy Policy - ${siteName}`,
			url: `https://${siteDomain}/privacy`,
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
