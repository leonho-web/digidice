"use client";

import {
	PageHeader,
	SectionCard,
	ListSection,
	ContentSection,
} from "@/components/legal";
import { Shield, Lock, Database, Mail } from "lucide-react";
import { useT } from "@/hooks/useI18n";
import Link from "next/link";

export default function PrivacyPage() {
	const t = useT();

	const siteDomain = window?.location?.hostname || "digidice.games";
	return (
		<div className="container mx-auto space-y-8 consistent-padding-x consistent-padding-y">
			<PageHeader
				title={t("privacy.title")}
				subtitle={t("privacy.subtitle")}
				lastUpdated={t("privacy.lastUpdated")}
			/>

			{/* Introduction */}
			<SectionCard variant="primary" icon={Shield}>
				<p className="text-base">{t("privacy.intro.paragraph1")}</p>
				<p>{t("privacy.intro.paragraph2")}</p>
				<p>{t("privacy.intro.paragraph3")}</p>
			</SectionCard>

			{/* 1. Scope & Acceptance */}
			<SectionCard title={t("privacy.sections.scope.title")}>
				<ContentSection>
					<p>{t("privacy.sections.scope.content")}</p>
				</ContentSection>
			</SectionCard>

			{/* 2. What Data We Collect */}
			<SectionCard
				title={t("privacy.sections.dataCollection.title")}
				icon={Database}
				intro={t("privacy.sections.dataCollection.intro")}
				outro={t("privacy.sections.dataCollection.securityData.note")}
			>
				<ListSection
					title={t(
						"privacy.sections.dataCollection.accountData.title"
					)}
					items={[
						{
							content: t(
								"privacy.sections.dataCollection.accountData.items.0"
							),
						},
						{
							content: t(
								"privacy.sections.dataCollection.accountData.items.1"
							),
						},
						{
							content: t(
								"privacy.sections.dataCollection.accountData.items.2"
							),
						},
						// {
						// 	content: t(
						// 		"privacy.sections.dataCollection.accountData.kyc"
						// 	),
						// },
					]}
				/>
				<ContentSection>
					<p>
						{t("privacy.sections.dataCollection.accountData.kyc")}
					</p>
				</ContentSection>

				<ListSection
					title={t(
						"privacy.sections.dataCollection.walletData.title"
					)}
					items={[
						{
							content: t(
								"privacy.sections.dataCollection.walletData.addresses"
							),
						},
						{
							content: t(
								"privacy.sections.dataCollection.walletData.transactions"
							),
						},
						{
							content: t(
								"privacy.sections.dataCollection.walletData.metadata"
							),
						},
					]}
				/>
				<ContentSection>
					<p>
						{t("privacy.sections.dataCollection.walletData.note")}
					</p>
				</ContentSection>

				<ListSection
					title={t(
						"privacy.sections.dataCollection.technicalData.title"
					)}
					items={[
						{
							content: t(
								"privacy.sections.dataCollection.technicalData.ip"
							),
						},
						{
							content: t(
								"privacy.sections.dataCollection.technicalData.session"
							),
						},
						{
							content: t(
								"privacy.sections.dataCollection.technicalData.cookies"
							),
						},
					]}
				/>

				<ListSection
					title={t(
						"privacy.sections.dataCollection.securityData.title"
					)}
					items={[
						{
							content: t(
								"privacy.sections.dataCollection.securityData.fraud"
							),
						},
						{
							content: t(
								"privacy.sections.dataCollection.securityData.disputes"
							),
						},
					]}
				/>
			</SectionCard>

			{/* 3. Why We Collect Data */}
			<SectionCard
				title={t("privacy.sections.purposes.title")}
				intro={t("privacy.sections.purposes.intro")}
				outro={t("privacy.sections.purposes.outro")}
			>
				<ListSection
					items={[
						{
							title: t("privacy.sections.purposes.items.0.title"),
							content: t(
								"privacy.sections.purposes.items.0.description"
							),
						},
						{
							title: t("privacy.sections.purposes.items.1.title"),
							content: t(
								"privacy.sections.purposes.items.1.description"
							),
						},
						{
							title: t("privacy.sections.purposes.items.2.title"),
							content: t(
								"privacy.sections.purposes.items.2.description"
							),
						},
						{
							title: t("privacy.sections.purposes.items.3.title"),
							content: t(
								"privacy.sections.purposes.items.3.description"
							),
						},
						{
							title: t("privacy.sections.purposes.items.4.title"),
							content: t(
								"privacy.sections.purposes.items.4.description"
							),
						},
					]}
				/>
			</SectionCard>

			{/* 4. Blockchain Transparency */}
			<SectionCard
				title={t("privacy.sections.cryptoWallet.title")}
				intro={t("privacy.sections.cryptoWallet.intro")}
				outro={t("privacy.sections.cryptoWallet.outro")}
				icon={Lock}
			>
				<ListSection
					items={[
						{
							content: t(
								"privacy.sections.cryptoWallet.points.0"
							),
						},
						{
							content: t(
								"privacy.sections.cryptoWallet.points.1"
							),
						},
						{
							content: t(
								"privacy.sections.cryptoWallet.points.2"
							),
						},
						{
							content: t(
								"privacy.sections.cryptoWallet.points.3"
							),
						},
					]}
				/>
			</SectionCard>

			{/* 5. Sharing & Disclosure */}
			<SectionCard
				title={t("privacy.sections.dataSharing.title")}
				intro={t("privacy.sections.dataSharing.intro")}
				outro={t("privacy.sections.dataSharing.noSelling")}
				classNames={{ outro: "font-medium" }}
			>
				<ContentSection>
					<p>{t("privacy.sections.dataSharing.para")}</p>
				</ContentSection>
				<ListSection
					items={[
						{
							content: t("privacy.sections.dataSharing.items.0"),
						},
						{
							content: t("privacy.sections.dataSharing.items.1"),
						},
						{
							content: t("privacy.sections.dataSharing.items.2"),
						},
					]}
				/>
			</SectionCard>

			{/* 6. Security Measures */}
			<SectionCard
				title={t("privacy.sections.security.title")}
				intro={t("privacy.sections.security.intro")}
				outro={t("privacy.sections.security.warning")}
				classNames={{ outro: "font-medium text-foreground" }}
				icon={Shield}
			>
				<ListSection
					items={[
						{
							content: t("privacy.sections.security.items.0"),
						},
						{
							content: t("privacy.sections.security.items.1"),
						},
						{
							content: t("privacy.sections.security.items.2"),
						},
						{
							content: t("privacy.sections.security.items.3"),
						},
						{
							content: t("privacy.sections.security.items.4"),
						},
					]}
				/>
			</SectionCard>

			{/* 7. Cookies & Analytics */}
			<SectionCard
				title={t("privacy.sections.cookies.title")}
				intro={t("privacy.sections.cookies.intro")}
				outro={t("privacy.sections.cookies.outro")}
			>
				<ListSection
					items={[
						{
							content: t("privacy.sections.cookies.items.0"),
						},
						{
							content: t("privacy.sections.cookies.items.1"),
						},
						{
							content: t("privacy.sections.cookies.items.2"),
						},
					]}
				/>
			</SectionCard>

			{/* 8. Underage Use Policy */}
			<SectionCard
				title={t("privacy.sections.minAge.title")}
				intro={t("privacy.sections.minAge.intro")}
				variant="warning"
			>
				<p className="font-medium text-foreground">
					{t("privacy.sections.minAge.content")}
				</p>
				<ListSection
					items={[
						{
							content: t("privacy.sections.minAge.items.0"),
						},
						{
							content: t("privacy.sections.minAge.items.1"),
						},
						{
							content: t("privacy.sections.minAge.items.2"),
						},
					]}
				/>
			</SectionCard>

			{/* 9. Data Breach Response */}
			<SectionCard title={t("privacy.sections.breach.title")}>
				<p>{t("privacy.sections.breach.content")}</p>

				<ListSection
					items={[
						{
							content: t("privacy.sections.breach.items.0"),
						},
						{
							content: t("privacy.sections.breach.items.1"),
						},
						{
							content: t("privacy.sections.breach.items.2"),
						},
					]}
				/>
			</SectionCard>

			{/* 10. Policy Updates */}
			<SectionCard title={t("privacy.sections.changes.title")}>
				<p>{t("privacy.sections.changes.content")}</p>
			</SectionCard>

			{/* 11. Contact Us */}
			<SectionCard
				title={t("privacy.sections.contact.title")}
				icon={Mail}
			>
				<p>{t("privacy.sections.contact.intro")}</p>
				<div className="mt-4 space-y-2">
					<Link
						href={`mailto:support@${siteDomain}`}
						className="text-primary hover:underline font-medium block"
					>
						{`📧 ${siteDomain}`}
					</Link>
					<Link
						href={`https://${siteDomain}`}
						className="text-primary hover:underline font-medium block"
						target="_blank"
						rel="noopener noreferrer"
					>
						{`🌐 https://${siteDomain}`}
					</Link>
				</div>
			</SectionCard>
		</div>
	);
}
