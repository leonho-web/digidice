import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeColorProvider } from "@/components/theme/theme-color-provider";
import { LocaleProvider } from "@/lib/locale-provider";
import { IOSViewportFix } from "@/components/common/ios-viewport-fix";
// Avoid bundling public images via import to skip sharp at build time
import "./globals.css";

const poppins = Poppins({
	style: "normal",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin", "latin-ext"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://digidice.games"),
	title: "Digi Dice - Your Gateway to Fun and Rewards",
	description:
		"Join Digi Dice for an exciting gaming experience with amazing rewards!",
	keywords: [
		"gaming",
		"rewards",
		"fun",
		"crypto",
		"slots",
		"live casino",
		"sports betting",
		"online gaming",
		"betting",
		"jackpots",
	],
	authors: [
		{
			name: "Digi Dice",
			url: "https://digidice.games",
		},
	],
	openGraph: {
		title: "Digi Dice - Your Gateway to Fun and Rewards",
		description:
			"Join Digi Dice for an exciting gaming experience with amazing rewards!",
		url: "https://digidice.games",
		siteName: "Digi Dice",
		images: [
			{
				url: "/assets/site/digidice-logo.png",
				width: 1200,
				height: 630,
				alt: "Digi Dice - Your Gateway to Fun and Rewards",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Digi Dice - Your Gateway to Fun and Rewards",
		description:
			"Join Digi Dice for an exciting gaming experience with amazing rewards!",
	},
	icons: {
		icon: "/assets/site/digidice-logo.png",
		shortcut: "/assets/site/digidice-logo.png",
		apple: "/assets/site/digidice-logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className}`}>
				{/*
          The outer provider manages light/dark mode.
          The inner provider manages the color theme.
        */}
				<ThemeProvider
					attribute="class"
					defaultTheme="dark" // defaultTheme="light" is also fine
					enableSystem
					themes={["light", "dark"]} // IMPORTANT: Only manage light/dark here
				>
					<LocaleProvider>
						<ThemeColorProvider defaultTheme="blue">
							<IOSViewportFix />
							{children}
						</ThemeColorProvider>
					</LocaleProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
