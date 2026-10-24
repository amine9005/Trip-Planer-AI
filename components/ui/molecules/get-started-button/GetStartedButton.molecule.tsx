"use client";
import { buttonVariants } from "@/components/ui/atoms/button/button";
import { useUserQuery } from "@/hooks/queries/useUser.query";
import Link from "next/link";

const GetStartedButtonMolecule = () => {
	const { data: user } = useUserQuery();
	// console.log("user ", user);

	const link = user ? "create-new-trip" : "/sign-in";
	const text = user ? "Create New Trip" : "Get Started";

	return (
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
	);
};

export default GetStartedButtonMolecule;
