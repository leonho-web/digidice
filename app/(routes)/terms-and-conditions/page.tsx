"use client";

import {
	PageHeader,
	SectionCard,
	ListSection,
	ContentSection,
} from "@/components/features/legal";
import {
	Shield,
	Wallet,
	Lock,
	AlertTriangle,
	Scale,
	Users,
	Gamepad2,
	Gift,
	Ban,
	RefreshCw,
	Mail,
} from "lucide-react";
import { useT } from "@/hooks/useI18n";
import Link from "next/link";

export default function TermsPage() {
	const t = useT();

	const siteDomain = window?.location?.hostname || "digidice.games";
	return (
		<div className="container mx-auto space-y-8 consistent-padding-x consistent-padding-y">
			<PageHeader
				title={t("terms.title")}
				lastUpdated={t("terms.lastUpdated")}
			/>

			{/* 1. Who Runs DigiDice.games */}
			<SectionCard title={t("terms.sections.ownership.title")}>
				<ContentSection>
					<p>{t("terms.sections.ownership.content1")}</p>
					<p className="mt-2">
						{t("terms.sections.ownership.content2")}
					</p>
				</ContentSection>
			</SectionCard>

			{/* 2. What You're Agreeing To */}
			<SectionCard
				title={t("terms.sections.notice.title")}
				outro={t("terms.sections.notice.outro")}
				classNames={{ outro: "font-medium text-foreground mt-2" }}
				variant="warning"
				icon={AlertTriangle}
			>
				<ContentSection>
					<p className="font-medium text-foreground">
						{t("terms.sections.notice.content")}
					</p>

					<ListSection
						items={[
							{ content: t("terms.sections.notice.items.0") },
							{ content: t("terms.sections.notice.items.1") },
							{ content: t("terms.sections.notice.items.2") },
							{ content: t("terms.sections.notice.items.3") },
							{ content: t("terms.sections.notice.items.4") },
						]}
					/>

					<p className="font-medium text-foreground mt-2">
						{t("terms.sections.notice.content2")}
					</p>
				</ContentSection>
			</SectionCard>

			{/* 3. The Basics */}
			<SectionCard title={t("terms.sections.general.title")} icon={Scale}>
				<ListSection
					items={[
						{ content: t("terms.sections.general.items.0") },
						{ content: t("terms.sections.general.items.1") },
						{ content: t("terms.sections.general.items.2") },
						{ content: t("terms.sections.general.items.3") },
						{ content: t("terms.sections.general.items.4") },
					]}
				/>
			</SectionCard>

			{/* 4. Your Wallet, Login, and Security */}
			<SectionCard
				title={t("terms.sections.account.title")}
				icon={Wallet}
			>
				<ListSection
					title={t("terms.sections.account.walletLogin.title")}
					items={[
						{
							content: t(
								"terms.sections.account.walletLogin.items.0"
							),
						},
						{
							content: t(
								"terms.sections.account.walletLogin.items.1"
							),
						},
					]}
				/>

				<ListSection
					title={t("terms.sections.account.registration.title")}
					items={[
						{
							content: t(
								"terms.sections.account.registration.items.0"
							),
						},
						{
							content: t(
								"terms.sections.account.registration.items.1"
							),
						},
					]}
				/>

				<ListSection
					title={t("terms.sections.account.security.title")}
					items={[
						{
							content: t(
								"terms.sections.account.security.items.0"
							),
						},
						{
							content: t(
								"terms.sections.account.security.items.1"
							),
						},
						{
							content: t(
								"terms.sections.account.security.items.2"
							),
						},
					]}
				/>
			</SectionCard>

			{/* 5. Who Can Play and What You Promise */}
			<SectionCard
				title={t("terms.sections.eligibility.title")}
				intro={t("terms.sections.eligibility.intro")}
				outro={t("terms.sections.eligibility.outro")}
				classNames={{
					intro: "font-medium text-foreground",
					outro: "font-medium text-foreground",
				}}
			>
				<ListSection
					items={[
						{ content: t("terms.sections.eligibility.items.0") },
						{ content: t("terms.sections.eligibility.items.1") },
						{ content: t("terms.sections.eligibility.items.2") },
						{ content: t("terms.sections.eligibility.items.3") },
						{ content: t("terms.sections.eligibility.items.4") },
						{ content: t("terms.sections.eligibility.items.5") },
					]}
				/>
			</SectionCard>

			{/* 6. Where You Can't Play */}
			<SectionCard
				title={t("terms.sections.restricted.title")}
				variant="warning"
				icon={Ban}
			>
				<ContentSection>
					<p className="font-medium text-foreground">
						{t("terms.sections.restricted.content1")}
					</p>
					<p className="ml-2 mt-2">
						{t("terms.sections.restricted.content2")}
					</p>
					<p className="font-medium text-foreground mt-2">
						{t("terms.sections.restricted.content3")}
					</p>
				</ContentSection>
			</SectionCard>

			{/* 7. Crypto Deposits and Withdrawals */}
			<SectionCard title={t("terms.sections.crypto.title")} icon={Wallet}>
				<ListSection
					title={t("terms.sections.crypto.policy.title")}
					items={[
						{ content: t("terms.sections.crypto.policy.items.0") },
						{ content: t("terms.sections.crypto.policy.items.1") },
					]}
				/>

				<ListSection
					title={t("terms.sections.crypto.deposits.title")}
					items={[
						{
							content: t(
								"terms.sections.crypto.deposits.items.0"
							),
						},
					]}
				/>

				<ListSection
					title={t("terms.sections.crypto.withdrawals.title")}
					items={[
						{
							content: t(
								"terms.sections.crypto.withdrawals.items.0"
							),
						},
						{
							content: t(
								"terms.sections.crypto.withdrawals.items.1"
							),
						},
					]}
				/>
			</SectionCard>

			{/* 8. NO KYC POLICY */}
			<SectionCard
				title={t("terms.sections.kyc.title")}
				intro={t("terms.sections.kyc.intro")}
				outro={t("terms.sections.kyc.outro")}
				icon={Lock}
			>
				<ContentSection>
					<p className="mt-2">{t("terms.sections.kyc.content1")}</p>
				</ContentSection>

				<ListSection
					items={[
						{ content: t("terms.sections.kyc.items.0") },
						{ content: t("terms.sections.kyc.items.1") },
						{ content: t("terms.sections.kyc.items.2") },
					]}
				/>
			</SectionCard>

			{/* 9. FAIR PLAY, CONDUCT & SECURITY */}
			<SectionCard
				title={t("terms.sections.fairPlay.title")}
				icon={Shield}
				intro={t("terms.sections.fairPlay.intro")}
			>
				<ListSection
					items={[
						{ content: t("terms.sections.fairPlay.items.0") },
						{ content: t("terms.sections.fairPlay.items.1") },
						{ content: t("terms.sections.fairPlay.items.2") },
						{ content: t("terms.sections.fairPlay.items.3") },
					]}
				/>
				<p className="mt-4 font-medium text-foreground">
					{t("terms.sections.fairPlay.outro1")}
				</p>
				<p className="mt-2">{t("terms.sections.fairPlay.outro2")}</p>
			</SectionCard>

			{/* 10. BONUSES & PROMOTIONS */}
			<SectionCard title={t("terms.sections.bonuses.title")} icon={Gift}>
				<ListSection
					items={[
						{ content: t("terms.sections.bonuses.items.0") },
						{ content: t("terms.sections.bonuses.items.1") },
						{ content: t("terms.sections.bonuses.items.2") },
					]}
				/>
			</SectionCard>

			{/* 11. GAME RULES & RESULTS */}
			<SectionCard
				title={t("terms.sections.playingRules.title")}
				icon={Gamepad2}
			>
				<ListSection
					items={[
						{ content: t("terms.sections.playingRules.items.0") },
						{ content: t("terms.sections.playingRules.items.1") },
						{ content: t("terms.sections.playingRules.items.2") },
					]}
				/>
			</SectionCard>

			{/* 12. LIMITATIONS & INTERRUPTIONS */}
			<SectionCard
				title={t("terms.sections.errors.title")}
				intro={t("terms.sections.errors.intro")}
			>
				<ListSection
					items={[
						{ content: t("terms.sections.errors.items.0") },
						{ content: t("terms.sections.errors.items.1") },
						{ content: t("terms.sections.errors.items.2") },
						{ content: t("terms.sections.errors.items.3") },
					]}
				/>
				<p className="mt-4">{t("terms.sections.errors.outro1")}</p>
			</SectionCard>

			{/* 13. ACCOUNT SUSPENSION & FUNDS */}
			<SectionCard
				title={t("terms.sections.suspension.title")}
				intro={t("terms.sections.suspension.intro")}
			>
				<ListSection
					items={[
						{ content: t("terms.sections.suspension.items.0") },
						{ content: t("terms.sections.suspension.items.1") },
						{ content: t("terms.sections.suspension.items.2") },
					]}
				/>
				<p className="mt-4">{t("terms.sections.suspension.outro1")}</p>
			</SectionCard>

			{/* 14. RESPONSIBLE GAMING */}
			<SectionCard
				title={t("terms.sections.responsibleGaming.title")}
				icon={Users}
			>
				<ListSection
					items={[
						{
							content: t(
								"terms.sections.responsibleGaming.items.0"
							),
						},
						{
							content: t(
								"terms.sections.responsibleGaming.items.1"
							),
						},
					]}
				/>
			</SectionCard>

			{/* 15. INTELLECTUAL PROPERTY */}
			<SectionCard title={t("terms.sections.ip.title")}>
				<ContentSection>
					<p>{t("terms.sections.ip.content1")}</p>
				</ContentSection>
			</SectionCard>

			{/* 16. LIMITATION OF LIABILITY */}
			<SectionCard title={t("terms.sections.liability.title")}>
				<ListSection
					items={[
						{ content: t("terms.sections.liability.items.0") },
						{ content: t("terms.sections.liability.items.1") },
					]}
				/>
			</SectionCard>

			{/* 17. DISPUTE RESOLUTION */}
			<SectionCard
				title={t("terms.sections.disputes.title")}
				icon={Scale}
			>
				<ContentSection>
					<p>{t("terms.sections.disputes.content")}</p>
				</ContentSection>
			</SectionCard>

			{/* 18. AMENDMENTS */}
			<SectionCard
				title={t("terms.sections.amendments.title")}
				icon={RefreshCw}
			>
				<ContentSection>
					<p>{t("terms.sections.amendments.content")}</p>
				</ContentSection>
			</SectionCard>

			{/* 19. MISCELLANEOUS */}
			<SectionCard title={t("terms.sections.miscellaneous.title")}>
				<ListSection
					items={[
						{ content: t("terms.sections.miscellaneous.items.0") },
					]}
				/>
			</SectionCard>

			{/* 20. CONTACT */}
			<SectionCard title={t("terms.sections.contact.title")} icon={Mail}>
				<ContentSection>
					<p>{t("terms.sections.contact.intro")}</p>
					<div className="mt-4 space-y-2">
						<Link
							href={`https://${siteDomain}`}
							className="text-primary hover:underline font-medium block"
							target="_blank"
							rel="noopener noreferrer"
						>
							{`🌐 https://${siteDomain}`}
						</Link>
					</div>
				</ContentSection>
			</SectionCard>
		</div>
	);
}
