import { ReactNode } from "react";

export default function OfflineLayout({
	children,
}: {
	children: ReactNode;
}) {
	// Simple layout for offline page - no providers needed
	// since the user might not have internet to load external resources
	return <>{children}</>;
}
