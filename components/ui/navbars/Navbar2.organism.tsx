"use client";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuLink,
} from "@/components/ui/atoms/navigation-menu/navigation-menu";

import { buttonVariants } from "@/components/ui/atoms/button/button";
import Link from "next/link";
import MenuButtonMolecule from "@/components/ui/molecules/menu-button/MenuButton.molecule";
import { motion } from "motion/react";
import { useState } from "react";
import { Plane } from "lucide-react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { useUserQuery } from "@/hooks/queries/useUser.query";
interface RouteProps {
	href: string;
	label: string;
}
const routeList: RouteProps[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Pricing",
		href: "/pricing",
	},
];

const Navbar2Organism = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data: user } = useUserQuery();

	const link = user ? "/create-new-trip" : "/sign-in";
	const text = user ? "Create New Trip" : "Get Started";

	return (
		<header
			className={`sticky border-b top-0 z-50 w-full dark:border-b-slate-700 overflow-x-hidden
      bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 min-h-15`}
		>
			<NavigationMenu className="flex overflow-hidden flex-col items-center justify-center">
				<NavigationMenuList className="px-2 md:px-12 w-screen min-h-14 flex justify-between md:grid md:grid-cols-3 ">
					<NavigationMenuItem className="font-bold ">
						<Link
							rel="noreferrer noopener"
							href="/"
							className="ml-2 font-bold text-xl flex col-span-1"
						>
							<Plane className="size-8 text-primary" />
							<H2>Trip Planner AI</H2>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuList className="hidden md:flex gap-2 col-span-1">
						{routeList.map((route: RouteProps, i) => (
							<NavigationMenuItem key={i}>
								<NavigationMenuLink asChild className="hover:bg-transparent ">
									<Link
										rel="noreferrer noopener"
										href={route.href}
										className="text-[17px] hover:scale-105 transition-transform duration-200 hover:text-primary"
									>
										{route.label}
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
						{user && (
							<NavigationMenuItem>
								<NavigationMenuLink asChild className="hover:bg-transparent ">
									<Link
										rel="noreferrer noopener"
										href={"/trips"}
										className="text-[17px] hover:scale-105 transition-transform duration-200 hover:text-primary"
									>
										My Trips
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						)}
					</NavigationMenuList>
					<MenuButtonMolecule isOpen={isOpen} setIsOpen={setIsOpen} />
					<div className="hidden md:flex w-full justify-end">
						<Link
							className={buttonVariants({
								variant: "default",
								size: "sm",
								className: "py-4",
								width: "lg",
							})}
							href={link}
						>
							{text}
						</Link>
					</div>{" "}
				</NavigationMenuList>

				<motion.div
					initial={{ height: 0 }}
					animate={{ height: isOpen ? "auto" : "0px" }}
					transition={{ duration: 0.3 }}
				>
					<NavigationMenuList className="md:hidden flex flex-col justify-center items-center">
						{routeList.map((route: RouteProps, i) => (
							<NavigationMenuItem key={i}>
								<NavigationMenuLink asChild>
									<Link
										onClick={() => setIsOpen(false)}
										rel="noreferrer noopener"
										href={route.href}
										className={`text-[17px] ${buttonVariants({
											variant: "ghost",
										})}`}
									>
										{route.label}
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
						<NavigationMenuItem className="mb-4">
							<NavigationMenuLink asChild>
								<Link
									onClick={() => setIsOpen(false)}
									className={buttonVariants({
										variant: "default",
										size: "sm",
										className: "py-4",
										width: "lg",
									})}
									href={link}
								>
									{text}
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						{user && (
							<NavigationMenuItem>
								<NavigationMenuLink asChild className="hover:bg-transparent ">
									<Link
										rel="noreferrer noopener"
										href={"/trips"}
										className="text-[17px] hover:scale-105 transition-transform duration-200 hover:text-primary"
									>
										My Trips
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						)}
					</NavigationMenuList>
				</motion.div>
			</NavigationMenu>
		</header>
	);
};

export default Navbar2Organism;
