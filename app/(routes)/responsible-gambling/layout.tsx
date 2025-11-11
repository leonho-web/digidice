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
	title: `Responsible Gambling | ${siteName} – Play Smart, Stay Safe`,
	description: `Learn about responsible gambling at ${siteName}. Stay in control, play responsibly, and get support through global help organizations.`,
=======
	interpolateSiteTLD,
} from "@/lib/utils/site-config";

const siteName = interpolateSiteName(`{siteName}`);
const siteTLD = interpolateSiteTLD(`{siteTLD}`);

export const metadata: Metadata = generateSEOMetadata({
	title: `Responsible Gambling | ${siteName}${siteTLD} – Play Smart, Stay Safe`,
	description: `Learn about responsible gambling at ${siteName}${siteTLD}. Stay in control, play responsibly, and get support through global help organizations.`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
	keywords: [
		`${siteName} Responsible Gambling`,
		`${siteName} play safe`,
		"crypto casino responsible gaming",
		"gambling help",
		`${siteName} self exclusion`,
	],
	path: "/responsible-gambling",
	pageType: "responsibleGambling",
<<<<<<< HEAD
	ogTitle: `Responsible Gambling | ${siteName} – Play Smart, Stay Safe`,
	ogDescription: `${siteName} promotes responsible crypto gaming. Learn to play safely, control habits, and access global gambling support organizations.`,
=======
	ogTitle: `Responsible Gambling | ${siteName}${siteTLD} – Play Smart, Stay Safe`,
	ogDescription: `${siteName}${siteTLD}promotes responsible crypto gaming. Learn to play safely, control habits, and access global gambling support organizations.`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
	ogType: "website",
	ogImage: "/assets/seo/og.png",
	schemas: [
		generateOrganizationSchema(),
		generateWebPageSchema({
<<<<<<< HEAD
			title: `Responsible Gambling at ${siteName}`,
			url: `https://${siteDomain}/responsible-gambling`,
			description: `${siteName} promotes responsible crypto gaming. Learn to play safely, control habits, and access global gambling support organizations.`,
=======
			title: `Responsible Gambling at ${siteName}${siteTLD}`,
			url: `https://${siteName.toLowerCase()}${siteTLD}/responsible-gambling`,
			description: `${siteName}${siteTLD} promotes responsible crypto gaming. Learn to play safely, control habits, and access global gambling support organizations.`,
>>>>>>> 4464c92e36f8810d2f234392e38134db02d1f8b9
		}),
	],
});

export default function ResponsibleGamblingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
