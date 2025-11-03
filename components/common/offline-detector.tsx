"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifiSlash, faCircleCheck } from "@fortawesome/pro-light-svg-icons";

export function OfflineDetector() {
	const [isOnline, setIsOnline] = useState(true);
	const [showBanner, setShowBanner] = useState(false);
	const router = useRouter();

	useEffect(() => {
		// Check initial online status
		setIsOnline(navigator.onLine);

		const handleOnline = () => {
			setIsOnline(true);
			setShowBanner(true);
			// Hide success banner after 3 seconds
			setTimeout(() => {
				setShowBanner(false);
			}, 3000);
		};

		const handleOffline = () => {
			setIsOnline(false);
			setShowBanner(true);
			// Redirect to offline page after a brief delay
			setTimeout(() => {
				router.push("/offline");
			}, 2000);
		};

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, [router]);

	if (!showBanner) return null;

	return (
		<div
			className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
				isOnline
					? "bg-green-500/90 text-white"
					: "bg-destructive/90 text-white"
			} animate-slide-down`}
		>
			<div className="flex items-center gap-3">
				<FontAwesomeIcon
					icon={isOnline ? faCircleCheck : faWifiSlash}
					className={`w-5 h-5 ${isOnline ? "" : "animate-pulse"}`}
				/>
				<span className="font-semibold">
					{isOnline
						? "Connection restored!"
						: "You're offline. Redirecting..."}
				</span>
			</div>
		</div>
	);
}
