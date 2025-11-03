"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWifiSlash,
	faRotateRight,
	faPlugCircleXmark,
	faSignalSlash,
	faCloudSlash,
	faSparkles,
} from "@fortawesome/pro-light-svg-icons";

export default function OfflinePage() {
	const [isOnline, setIsOnline] = useState(false);
	const [isChecking, setIsChecking] = useState(false);

	useEffect(() => {
		// Check initial online status
		setIsOnline(navigator.onLine);

		// Listen for online/offline events
		const handleOnline = () => {
			setIsOnline(true);
			// Auto-reload when connection is restored
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		};

		const handleOffline = () => {
			setIsOnline(false);
		};

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	const handleRetry = () => {
		setIsChecking(true);
		// Check if we're online and reload
		if (navigator.onLine) {
			window.location.reload();
		} else {
			// Show feedback and stop checking after a moment
			setTimeout(() => {
				setIsChecking(false);
			}, 1500);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-card to-background relative overflow-hidden flex items-center justify-center">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Floating disconnected elements */}
				<div className="absolute top-20 left-10 w-8 h-8 bg-destructive/20 rounded-full animate-float opacity-20" />
				<div className="absolute top-40 right-20 w-6 h-6 bg-muted/30 rounded-full animate-float animation-delay-300 opacity-15" />
				<div className="absolute bottom-32 left-1/4 w-10 h-10 bg-destructive/10 rounded-full animate-float animation-delay-150 opacity-25" />

				{/* Disconnected signal effects */}
				<div className="absolute top-1/4 right-1/4 text-destructive/20">
					<FontAwesomeIcon
						icon={faSignalSlash}
						className="w-6 h-6 animate-pulse"
					/>
				</div>
				<div className="absolute bottom-1/3 left-1/3 text-muted/20">
					<FontAwesomeIcon
						icon={faCloudSlash}
						className="w-8 h-8 animate-pulse animation-delay-300"
					/>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					{/* Main Offline Display */}
					<div className="mb-12">
						<div className="flex justify-center items-center gap-4 mb-8">
							<div className="relative">
								<div className="absolute inset-0 bg-destructive/20 rounded-full blur-xl animate-pulse" />
								<div className="relative p-8 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-full">
									<FontAwesomeIcon
										icon={faWifiSlash}
										className="w-24 h-24 text-destructive animate-pulse"
									/>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-destructive via-destructive/80 to-muted bg-clip-text text-transparent">
								No Internet Connection
							</h1>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
								Looks like you&apos;re offline. Please check
								your internet connection and try again.
							</p>

							{isOnline && (
								<div className="flex justify-center items-center gap-2 text-sm text-primary animate-bounce">
									<FontAwesomeIcon
										icon={faSparkles}
										className="w-4 h-4"
									/>
									<span className="font-semibold">
										Connection restored! Reloading...
									</span>
									<FontAwesomeIcon
										icon={faSparkles}
										className="w-4 h-4"
									/>
								</div>
							)}
						</div>
					</div>

					{/* Status Card */}
					<Card className="mb-12 casino-sidebar-glass border-destructive/20 shadow-lg">
						<CardContent className="p-8">
							<div className="flex justify-center mb-4">
								<div className="p-4 bg-destructive/10 rounded-full">
									<FontAwesomeIcon
										icon={faPlugCircleXmark}
										className="w-8 h-8 text-destructive animate-pulse"
									/>
								</div>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Connection Lost
							</h3>
							<p className="text-muted-foreground text-lg mb-6">
								You&apos;re currently offline. Some features may
								not be available until your connection is
								restored.
							</p>

							{/* Connection Status Indicator */}
							<div className="flex items-center justify-center gap-3 text-sm">
								<div
									className={`w-3 h-3 rounded-full ${
										isOnline
											? "bg-green-500 animate-pulse"
											: "bg-destructive"
									}`}
								/>
								<span
									className={
										isOnline
											? "text-green-500"
											: "text-destructive"
									}
								>
									{isOnline
										? "Online - Reconnecting..."
										: "Offline"}
								</span>
							</div>
						</CardContent>
					</Card>

					{/* Action Button */}
					<div className="flex justify-center mb-12">
						<Button
							size="lg"
							onClick={handleRetry}
							disabled={isChecking}
							className="casino-theme-button h-14 text-lg relative overflow-hidden group min-w-[200px]"
						>
							<FontAwesomeIcon
								icon={faRotateRight}
								className={`w-5 h-5 mr-2 transition-transform ${
									isChecking ? "animate-spin" : ""
								}`}
							/>
							{isChecking ? "Checking..." : "Try Again"}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
						</Button>
					</div>

					{/* Troubleshooting Tips */}
					<div className="grid sm:grid-cols-3 gap-4">
						{[
							{
								icon: faWifiSlash,
								title: "Check WiFi",
								description:
									"Ensure your WiFi or mobile data is turned on",
							},
							{
								icon: faSignalSlash,
								title: "Check Signal",
								description:
									"Move to an area with better signal strength",
							},
							{
								icon: faRotateRight,
								title: "Restart",
								description:
									"Try restarting your device or router",
							},
						].map((tip, index) => (
							<Card
								key={index}
								className={`casino-button-glass border-border/50 transition-all duration-300 animate-fade-in-up`}
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<CardContent className="p-6 text-center">
									<div className="flex justify-center mb-3">
										<div className="p-3 bg-muted/10 rounded-full">
											<FontAwesomeIcon
												icon={tip.icon}
												className="w-6 h-6 text-muted-foreground"
											/>
										</div>
									</div>
									<h4 className="font-semibold mb-2 text-sm">
										{tip.title}
									</h4>
									<p className="text-xs text-muted-foreground">
										{tip.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Footer Message */}
					<div className="mt-16 pt-8 border-t border-border/50">
						<p className="text-sm text-muted-foreground">
							This page is cached and available offline.
							<span className="text-primary font-medium">
								{" "}
								We&apos;ll reconnect you as soon as
								you&apos;re back online!
							</span>
						</p>
					</div>
				</div>
			</div>

			{/* Ambient glow effects */}
			<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-destructive/5 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-muted/5 rounded-full blur-3xl animate-pulse animation-delay-300" />
		</div>
	);
}
