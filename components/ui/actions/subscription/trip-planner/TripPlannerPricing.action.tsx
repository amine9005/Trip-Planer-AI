"use client";

import { PricingCardProps } from "@/types/pricing.types";
import PricingGridContent from "@/components/ui/organisms/pricing/PricingGrid.content";
import {
  useGetSubscriptionQuery,
  useUserQuery,
} from "@/hooks/queries/useUser.query";

const pricingList: PricingCardProps[] = [
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
    successUrl: "/payment-success",
    cancelUrl: "/payment-cancel",
    redirectUrl: "/payment-success",
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
    successUrl: "/payment-success",
    cancelUrl: "/payment-cancel",
    redirectUrl: "/payment-success",
    billing: "/month",
  },
];

export const TripPlannerPricing = () => {
  const { data: userData, isPending: isLoadingUserData } = useUserQuery();
  const { error, data, isPending } = useGetSubscriptionQuery(userData?.user.id);

  // console.log(
  //   "data ",
  //   JSON.stringify(data) + " isPending " + isPending + " error " + error,
  // );

  return (
    <PricingGridContent
      data={data}
      error={error}
      isPending={isPending}
      isLoadingUserData={isLoadingUserData}
      userData={userData?.user}
      pricingList={pricingList}
    />
  );
};
