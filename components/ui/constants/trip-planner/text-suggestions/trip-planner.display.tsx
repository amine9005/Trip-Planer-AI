import { Globe, Landmark, Plane, Send } from "lucide-react";

export const TripPlannerSuggestions = [
  {
    title: "Create A New Trip",
    icon: <Globe className="size-5 text-blue-500" />,
  },
  {
    title: "Inspire Me Where To Go",
    icon: <Plane className="size-5 text-green-500" />,
  },
  {
    title: "Discover Hidden Gems",
    icon: <Landmark className="size-5 text-orange-500" />,
  },
  {
    title: "Adventure Destination",
    icon: <Send className="size-5 text-yellow-500" />,
  },
];

export const SelectTravelList = [
  {
    id: 1,

    title: "Just Me",

    desc: "A sole traveler in exploration",

    icon: "✈️",

    prompt: "Solo",
  },

  {
    id: 2,

    title: "A Couple",

    desc: "Two travels in tandem",

    icon: "🥂",

    prompt: "Couple",
  },

  {
    id: 3,

    title: "Family",

    desc: "A group of 3-5 people",

    icon: "🏡",

    prompt: "Family of 3-5 people ",
  },

  {
    id: 4,

    title: "Friends",

    desc: "A group of 5 to 10 People",

    icon: "⛵",

    prompt: "friends, 5 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,

    title: "Cheap",

    desc: "Stay conscious of costs",

    icon: "💵",

    color: "bg-green-100 text-green-600",

    prompt: "Low budget",
  },

  {
    id: 2,

    title: "Moderate",

    desc: "Keep cost on the average side",

    icon: "💰",

    color: "bg-yellow-100 text-yellow-600",

    prompt: "Medium budget",
  },

  {
    id: 3,

    title: "Luxury",

    desc: "Don't worry about cost",

    icon: "💸",

    color: "bg-purple-100 text-purple-600",

    prompt: "High budget",
  },
];
