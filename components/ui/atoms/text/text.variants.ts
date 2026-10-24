import { cva } from "class-variance-authority";

const textVariants = cva("text-sm font-medium leading-none", {
  variants: {
    variant: {
      default: "text-gray-500 dark:text-white",
      warning: "text-yellow-500",
      info: "text-blue-500",
      success: "text-green-500",
      error: "text-red-500",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted-foreground",
      title: "text-primary font-bold",
      description: "text-muted-foreground",
      neutral: "text-black dark:text-white",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      xs: "text-xs",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export { textVariants };
