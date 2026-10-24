import { MessageAISchemaType } from "@/validations/AI.zod";
import { Suggestions } from "./general.types";

export interface LoadingStateType {
  isLoading: boolean;
  isFinal?: boolean;
  success?: boolean;
}

export interface DisplayMessagesType {
  messages: MessageAISchemaType[];
}

export interface SendMessageType {
  href: string;
  userMessage: string;
  onSend: ({ message }: { message: string }) => void;
  setUserMessage: (message: string) => void;
}

export interface onSendType {
  onSend: ({ message }: { message: string }) => void;
}

export interface SuggestionsType {
  suggestions: Suggestions[];
  onSend: ({ message }: { message: string }) => void;
}

export interface ChatProgressUI {
  ui:
    | "Budget"
    | "GroupSize"
    | "TravelInterest"
    | "SpecialRequirements"
    | "TripDuration"
    | "Final";
}

export interface SelectByIconType {
  id: number;
  title: string;
  desc: string;
  icon: string;
  color?: string;
  prompt: string;
}

export interface TripPlanType {
  _id?: string;
  destination: string;
  duration: string;
  origin: string;
  budget: string;
  travel_interests: string;
  special_requirements: string;
  group_size: string;
  hotels: HotelType[];
  itinerary: ItineraryType[];
}

export interface HotelType {
  hotel_name: string;
  hotel_address: string;
  price_per_night: string;
  hotel_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  description: string;
}

export interface ItineraryType {
  day: number;
  day_plan: string;
  best_time_to_visit_day: string;
  activities: ActivityType[];
}

export interface ActivityType {
  place_name: string;
  place_details: string;
  place_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  place_address: string;
  ticket_pricing: string;
  time_travel_each_location: string;
  best_time_to_visit: string;
}
