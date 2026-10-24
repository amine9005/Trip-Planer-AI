"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { heading2Variants } from "./heading2.variants";

function H2({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"h2"> &
	VariantProps<typeof heading2Variants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "h2";

	return (
		<Comp
			data-slot="h2"
			className={cn(heading2Variants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { H2 };
