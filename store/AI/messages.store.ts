import { TripPlanType } from "@/types/create-trip.types";
import { MessageAISchemaType } from "@/validations/AI.zod";
import { create } from "zustand";

type MessagesState = {
  messages: MessageAISchemaType[];
  tripPlan: TripPlanType | null;
  switchView: number;
  isLoading: boolean;
  isFinal: boolean;
  isLoadingResult: boolean;
  updateMap: boolean;
  success: boolean;
  userMessage: string;
  setIsLoading: (value: boolean) => void;
  setTripPlan: (value: TripPlanType) => void;
  setSuccess: (value: boolean) => void;
  setIsFinal: (value: boolean) => void;
  setMessages: (value: MessageAISchemaType[]) => void;
  setUserMessage: (value: string) => void;
  setSwitchView: (value: number) => void;
  setIsLoadingResult: (value: boolean) => void;
  setUpdateMap: (value: boolean) => void;
};

export const useAIMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  isLoading: false,
  tripPlan: null,
  isFinal: false,
  success: false,
  userMessage: "",
  isLoadingResult: false,
  updateMap: false,
  switchView: 1,
  setIsLoadingResult: (value) => set({ isLoadingResult: value }),
  setTripPlan: (value) => set({ tripPlan: value }),
  setSuccess: (value) => set({ success: value }),
  setUserMessage: (value) => set({ userMessage: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setIsFinal: (value) => set({ isFinal: value }),
  setMessages: (value) => set({ messages: value }),
  setSwitchView: (value) => set({ switchView: value }),
  setUpdateMap: (value) => set({ updateMap: value }),
}));
