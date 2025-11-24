import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/utils/seo/seo-provider";
import { getDynamicSEOConfig } from "@/lib/utils/seo/seo-config-loader";
import {
	generateOrganizationSchema,
	generateWebPageSchema,
} from "@/lib/utils/seo/schema-generator";

export async function generateMetadata(): Promise<Metadata> {
	const config = await getDynamicSEOConfig();

	const siteName = config.defaults.siteName;
	const siteDomain = config.defaultDomain;

	return generateSEOMetadata({
		title: `Responsible Gambling | ${siteDomain} – Play Smart, Stay Safe`,
	description: `Learn about responsible gambling at ${siteName}.. Stay in control, play safely, and access global gambling support and self-exclusion options.`,
	keywords: [
		`${siteName} Responsible Gambling`,
		`${siteName} play safe`,
		"crypto casino responsible gaming",
		`${siteName} gambling help`,
		`${siteName} self exclusion`,
		"blockchain casino safety",
		"responsible crypto gaming",
		"fair crypto play",
	],
	path: "/responsible-gambling",
	pageType: "responsibleGambling",
	ogTitle: `Responsible Gambling | ${siteName} – Play Smart, Stay Safe`,
	ogDescription: `${siteName} promotes responsible crypto gaming. Learn to play safely, manage your playtime, and access trusted global gambling support resources.`,
	ogType: "website",
	ogImage: "/assets/seo/og.png",
	schemas: [
		generateOrganizationSchema(config),
		generateWebPageSchema({
			title: `Responsible Gambling at ${siteName}`,
			url: `${siteDomain}/responsible-gambling`,
			description: `${siteName} promotes responsible crypto gaming. Learn to play safely, manage your playtime, and access trusted global gambling support resources.`,
		},config),
	],
});
}

export default function ResponsibleGamblingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
