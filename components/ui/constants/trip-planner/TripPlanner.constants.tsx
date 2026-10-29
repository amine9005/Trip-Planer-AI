import { CityList } from "@/types/create-trip.types";
import { PricingCardProps } from "@/types/pricing.types";

export const PricingListData: PricingCardProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Get Started And Create beautiful Trips For You, Your Family And Friends",
    buttonText: "Get Started",
    benefitList: ["10 Trip Plans Per Month"],
    href: "/sign-in",
    plan: "free",
    successUrl: "/pricing",
    returnUrl: "/pricing",
    cancelUrl: "/pricing",
    redirectUrl: "/pricing",
    billing: "/month",
  },
  {
    title: "Premium",
    popular: 1,
    price: 4.99,
    description: "Best For Serious Explorers and Travelers.",
    buttonText: "Upgrade",
    benefitList: [
      "Unlimited Trip Plans",
      "90 Days Trip History",
      "24/7 Email Support",
      "3D Place On Map",
    ],
    href: "/sign-in",
    plan: "premium",
    successUrl: "/pricing",
    returnUrl: "/pricing",
    cancelUrl: "/pricing",
    redirectUrl: "/pricing",
    billing: "/month",
  },

  {
    title: "Explorer",
    popular: 0,
    price: 45.99,
    description: "Best For Serious Explorers and Travelers and Journalist.",
    buttonText: "Upgrade",
    benefitList: [
      "Unlimited Trip Plans",
      "90 Days Trip History",
      "24/7 Email Support",
      "3D Place On Map",
    ],
    href: "/sign-in",
    plan: "yearly",
    successUrl: "/pricing",
    returnUrl: "/pricing",
    cancelUrl: "/pricing",
    redirectUrl: "/pricing",
    billing: "/year",
  },
];

export const PopularCityListData: CityList[] = [
  {
    title: "Paris, France",

    description:
      "The City of Light is a premier destination for culture, romance, and gastronomy. Trip planners should focus on iconic landmarks like the Eiffel Tower and the Louvre, complemented by leisurely neighborhood explorations through Montmartre and Le Marais, river cruises along the Seine, and world-class culinary experiences.",

    shortDescription:
      "Explore the City of Lights – Eiffel Tower, Louvre & more",

    thumbnail:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2600&auto=format&fit=crop",
    places: [
      "The Eiffel Tower",
      "The Louvre Museum",
      "The Palace of Versailles",
      "Mont-Saint-Michel ",
      "The French Riviera",
    ],
  },

  {
    title: "New York, USA",

    description:
      "A high-energy global metropolis known for its distinct skyline and cultural diversity. Key itinerary highlights include Broadway shows, world-renowned museums (Met, MoMA), expansive green space in Central Park, and distinct neighborhood flavors spanning Manhattan to Brooklyn.",

    shortDescription: "Experience NYC – Times Square, Central Park, Broadway",

    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    places: [
      "Statue of Liberty",
      "Central Park",
      "Times Square",
      "Empire State Building",
      "Brooklyn Bridge",
    ],
  },

  {
    title: "Tokyo, Japan",

    description:
      "A captivating blend of ultramodern innovation and ancient tradition. Travelers can experience neon-lit skyscrapers, bustling retail districts like Shibuya and Shinjuku, and Michelin-starred dining alongside tranquil Shinto shrines, historic temples like Senso-ji, and reliable, world-class public transit that makes planning seamless.",

    shortDescription: "Discover Tokyo – Shibuya, Cherry Blossoms, Temples",

    thumbnail:
      "https://images.unsplash.com/photo-1522547902298-51566e4fb383?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    places: [
      "Senso-ji Temple",
      "Tokyo Tower",
      "Shibuya Crossing",
      "Meiji Shrine",
      "Tokyo Skytree",
    ],
  },

  {
    title: "Rome, Italy",

    description:
      "An open-air living museum steeped in millennia of Western history. Essential for travelers interested in classical archaeology, Renaissance art, and hearty Italian cuisine. Planners should prioritize pre-booked access for anchor attractions like the Colosseum, Roman Forum, and Vatican City, while leaving time to wander picturesque cobblestone piazzas.",

    shortDescription: "Walk through History – Colosseum, Vatican, Roman Forum",

    thumbnail:
      "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    places: [
      "Colosseum",
      "Trevi Fountain",
      "Pantheon",
      "St. Peter's Basilica",
      "Roman Forum",
    ],
  },

  {
    title: "Dubai, UAE",

    description:
      "A futuristic desert hub defined by cutting-edge architecture, luxury shopping, and family-friendly entertainment. It offers high-impact attractions such as the Burj Khalifa, massive experiential malls, and the Palm Jumeirah, paired with desert safaris, beach resorts, and traditional souks along Dubai Creek.",

    shortDescription: "Luxury and Innovation – Burj Khalifa, Desert Safari",

    thumbnail:
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    places: [
      "Burj Khalifa",
      "Burj Al Arab",
      "The Dubai Mall",
      "Palm Jumeirah",
      "Museum of the Future",
    ],
  },

  {
    title: "India",

    description:
      "A vast, subcontinent-scale destination celebrated for its profound spirituality, rich heritage, and regional diversity. Most first-time trip planners opt for the classic 'Golden Triangle' (Delhi, Agra's Taj Mahal, and Jaipur's royal palaces), while travelers seeking nature, wellness, or coastal retreats often expand itineraries toward Kerala, Goa, or the Himalayas.",

    shortDescription: "Harbour Views – Opera House, Bondi Beach & Wildlife",

    thumbnail:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    places: [
      "Taj Mahal",
      "Red Fort",
      "Gateway of India",
      "Hawa Mahal",
      "Qutub Minar",
    ],
  },
];
