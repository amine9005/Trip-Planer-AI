"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { textVariants } from "./text.variants";

function P({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="p"
      className={cn(textVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { P };
