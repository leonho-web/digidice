import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/utils/seo/seo-provider";
import { getDynamicSEOConfig } from "@/lib/utils/seo/seo-config-loader";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/utils/seo/schema-generator";

// Generate SEO Metadata for Privacy Policy Page
export async function generateMetadata(): Promise<Metadata> {
	const config = await getDynamicSEOConfig();

	const siteName = config.defaults.siteName;
	const siteDomain = config.defaultDomain;

	return generateSEOMetadata({
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
		path: "/privacy-policy",
		pageType: "privacy",
		ogTitle: `Privacy & Data Protection | ${siteName} (Crypto Casino)`,
		ogDescription: `${siteDomain} safeguards your crypto wallet and blockchain data with top-tier encryption, privacy-first technology, and no KYC authentication.`,
		ogType: "website",
		ogImage: "/assets/seo/og.png",
		schemas: [
			generateOrganizationSchema(config),
			generateWebPageSchema({
				title: `Privacy Policy - ${siteName}`,
				url: `${siteDomain}/privacy-policy`,
				description: `${siteName} Privacy Policy - How we collect, use, store and protect your personal and transaction data.`,
			},config),
		],
	});
}

export default function PrivacyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
