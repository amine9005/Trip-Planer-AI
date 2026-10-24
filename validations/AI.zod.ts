import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const messageValidation = z
  .string()
  .min(3, { message: "Username must be at least 3 char longs" })
  .max(256, { message: "Username cannot exceed 32 characters" });

export const roleValidation = z.enum(["user", "assistant"], {
  message: "Invalid Role",
});

export const uiStateValidation = z
  .enum(
    [
      "Budget",
      "GroupSize",
      "TripDuration",
      "TravelInterest",
      "SpecialRequirements",
      "Final",
    ],
    {
      message: "Invalid UI",
    },
  )
  .optional();

export const MessageAISchema = z.object({
  role: roleValidation,
  message: messageValidation,
  ui: uiStateValidation,
});

export const MessageArraySchema = z.object({
  messages: z.array(MessageAISchema).default([]),
});

export type MessageAISchemaType = z.infer<typeof MessageAISchema>;
export type MessageAIFormType = UseFormReturn<MessageAISchemaType>;

export type MessageArraySchemaType = z.infer<typeof MessageArraySchema>;
export type MessageArrayFormType = UseFormReturn<MessageArraySchemaType>;
