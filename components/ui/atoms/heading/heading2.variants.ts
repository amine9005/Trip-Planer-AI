import { cva } from "class-variance-authority";

const heading2Variants = cva("text-xl font-bold leading-[2px]", {
  variants: {
    variant: {
      default: "text-black dark:text-white",
      primary: "text-primary",
      secondary: "text-secondary",
      warning: "text-yellow-500",
      info: "text-blue-500",
      success: "text-green-500",
      error: "text-red-500",
    },
    size: {
      default: "text-2xl",
      sm: "text-sm",
      md: "text-md",
      xs: "text-xs",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export { heading2Variants };
