"use client";

import Link from "next/link";
import Image from "next/image";
import { Game } from "@/types/games/gameList.types";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useDynamicAuth } from "@/hooks/useDynamicAuth";
import { Play, Star, ChevronRight } from "lucide-react";
import { useTranslations } from "@/lib/locale-provider";

// --- Skeleton: A Visual Echo of the Final Layout ---
const Layout3Skeleton = () => (
	<div className="w-full space-y-8">
		{/* Header */}
		<div className="text-center space-y-2">
			<Skeleton className="h-8 w-64 mx-auto bg-muted animate-pulse" />
			<Skeleton className="h-4 w-96 mx-auto bg-muted animate-pulse" />
		</div>

		{/* Sliders Container */}
		<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
			{/* Slider 1 Skeleton */}
			<div className="space-y-4">
				<Skeleton className="h-6 w-48 bg-muted animate-pulse" />
				<Skeleton className="h-80 w-full rounded-xl bg-muted animate-pulse" />
			</div>

			{/* Slider 2 Skeleton */}
			<div className="space-y-4">
				<Skeleton className="h-6 w-48 bg-muted animate-pulse" />
				<Skeleton className="h-80 w-full rounded-xl bg-muted animate-pulse" />
			</div>
		</div>
	</div>
);

// --- Enhanced Game Card for Main Slider ---
const FeaturedGameCard = ({ game }: { game: Game }) => {
	const router = useRouter();
	const { isLoggedIn, login } = useDynamicAuth();
	const tHero = useTranslations("hero");

	const queryParams = new URLSearchParams({
		vendor: game.vendor_name,
		gameType: game.own_game_type,
		gpId: String(game.gp_id),
	}).toString();
	const gameUrl = `/play/${game.game_id}?${queryParams}`;

	const handleCardClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (isLoggedIn) {
			router.push(gameUrl);
		} else {
			login();
		}
	};

	return (
		<Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 h-[400px] cursor-pointer">
			{/* Full Background Image */}
			<div className="absolute inset-0">
				<Image
					src={game.full_url_game_image || ""}
					alt={game.game_name}
					fill
					className=" transition-transform duration-700 group-hover:scale-110"
				/>
			</div>

			{/* Semi-transparent Gray Overlay */}
			<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

			{/* Content Overlay */}
			<div className="relative h-full flex flex-col justify-between p-6 text-white">
				{/* Top Section - Badges and Play Button */}
				<div className="flex items-start justify-between">
					<Badge
						variant="secondary"
						className="bg-white/20 text-white backdrop-blur-sm border border-white/30 shadow-lg"
					>
						{game.provider_name}
					</Badge>

					<Button
						size="icon"
						onClick={handleCardClick}
						className="rounded-full bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300 hover:scale-110"
					>
						<Play className="h-5 w-5 text-foreground" />
					</Button>
				</div>

				{/* Bottom Section - Game Info */}
				<div className="space-y-3">
					<div className="flex items-center gap-2">
						<Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
						<span className="text-sm text-white/80 font-medium">
							{tHero("layout3.featuredGameLabel")}
						</span>
					</div>

					<h3 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
						{game.game_name}
					</h3>
				</div>
			</div>
		</Card>
	);
};

// --- Compact Game Card for Side Slider ---
const CompactGameCard = ({ game }: { game: Game }) => {
	const router = useRouter();
	const { isLoggedIn, login } = useDynamicAuth();
	const tGames = useTranslations("games");

	const queryParams = new URLSearchParams({
		vendor: game.vendor_name,
		gameType: game.own_game_type,
		gpId: String(game.gp_id),
	}).toString();
	const gameUrl = `/play/${game.game_id}?${queryParams}`;

	const handleCardClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (isLoggedIn) {
			router.push(gameUrl);
		} else {
			login();
		}
	};

	return (
		<Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-[400px]">
			{/* Full Background Image */}
			<div className="absolute inset-0">
				<Image
					src={game.full_url_game_image || ""}
					alt={game.game_name}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-110"
				/>
			</div>

			{/* Semi-transparent Gray Overlay */}
			<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

			{/* Play Button Overlay - appears on hover */}
			<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
				<Button
					size="icon"
					onClick={handleCardClick}
					className="rounded-full bg-primary hover:bg-primary/90 shadow-lg scale-75 hover:scale-90 transition-transform duration-200"
				>
					<Play className="h-4 w-4 text-foreground" />
				</Button>
			</div>

			{/* Content Overlay */}
			<div className="relative h-full flex flex-col justify-between p-4 text-white">
				{/* Top Section - Provider Badge */}
				<div className="flex justify-end">
					<Badge
						variant="outline"
						className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs"
					>
						{game.provider_name}
					</Badge>
				</div>

				{/* Bottom Section - Game Info */}
				<div className="space-y-3">
					<h4 className="font-semibold text-white text-lg group-hover:text-foreground transition-colors duration-300 leading-tight">
						{game.game_name}
					</h4>

					<div className="flex items-center justify-between">
						<span className="text-xs text-white/80">
							{game.provider_name}
						</span>

						<Link
							href={gameUrl}
							onClick={handleCardClick}
							className="inline-flex items-center gap-1 text-xs text-white hover:text-foreground transition-colors duration-200 font-medium px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
						>
							{tGames("playNow")}
							<ChevronRight className="h-3 w-3" />
						</Link>
					</div>
				</div>
			</div>
		</Card>
	);
};

// --- The Main `Layout3` Component ---
interface Layout3Props {
	mainGame: Game;
	sideGames: Game[];
	isLoading?: boolean;
}

export const Layout3 = ({
	mainGame,
	sideGames,
	isLoading = false,
}: Layout3Props) => {
	const featuredPlugin = useRef(
		Autoplay({
			delay: 4000,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
		})
	);
	const explorePlugin = useRef(
		Autoplay({
			delay: 3000,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
		})
	);
	const tHero = useTranslations("hero");

	if (isLoading) return <Layout3Skeleton />;
	if (!mainGame || !sideGames || sideGames.length < 4) return null;

	// Create featured games array (main game + first 3 side games)
	const featuredGames = [mainGame, ...sideGames.slice(0, 3)];

	return (
		<div className="w-full space-y-8 py-8">
			{/* Header Section */}
			{/* <div className="text-center space-y-3">
				<h1 className="text-4xl font-semibold tracking-tight text-foreground">
					{tHero("layout3.headerTitle")}
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					{tHero("layout3.headerSubtitle")}
				</p>
			</div> */}

			{/* Dual Slider Layout */}
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
				{/* Slider 1: Featured Games */}
				<div className="space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-semibold text-foreground">
							{tHero("layout3.slider1Title")}
						</h2>
						<Badge
							variant="outline"
							className="text-primary border-primary/30"
						>
							{tHero("layout3.slider1Badge")}
						</Badge>
					</div>

					<div className="relative">
						<Carousel
							plugins={[featuredPlugin.current]}
							className="w-full"
							opts={{
								align: "start",
								loop: true,
								slidesToScroll: 1,
							}}
						>
							<CarouselContent>
								{featuredGames.map((game, index) => (
									<CarouselItem
										key={`featured-${game.game_id}-${index}`}
									>
										<FeaturedGameCard game={game} />
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-border/50" />
							<CarouselNext className="right-4 bg-background/80 hover:bg-background border-border/50" />
						</Carousel>
					</div>
				</div>

				{/* Slider 2: More to Explore */}
				<div className="space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-semibold text-foreground">
							{tHero("layout3.slider2Title")}
						</h2>
						<Badge
							variant="outline"
							className="text-secondary-foreground border-secondary/30"
						>
							{tHero("layout3.slider2Badge")}
						</Badge>
					</div>

					<div className="relative">
						<Carousel
							plugins={[explorePlugin.current]}
							className="w-full"
							opts={{
								align: "start",
								loop: true,
								slidesToScroll: 1,
							}}
						>
							<CarouselContent>
								{sideGames.map((game, index) => (
									<CarouselItem
										key={`explore-${game.game_id}-${index}`}
										className="basis-full sm:basis-1/2"
									>
										<CompactGameCard game={game} />
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-border/50" />
							<CarouselNext className="right-4 bg-background/80 hover:bg-background border-border/50" />
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
};
