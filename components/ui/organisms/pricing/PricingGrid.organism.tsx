"use client";

import { Loader2Icon } from "lucide-react";

import { P } from "@/components/ui/atoms/text/Text";
import PricingCard from "../pricing/Pricing.card";
import { PricingCardProps, SubscriptionDataType } from "@/types/pricing.types";
import { User } from "better-auth";

interface Props {
  error: Error | null;
  isPending: boolean;
  isLoadingUserData: boolean;
  userData: User | undefined;
  pricingList: PricingCardProps[];
  data: SubscriptionDataType | undefined | null;
}
export const PricingGridOrganism = ({
  error,
  isPending,
  isLoadingUserData,
  userData,
  pricingList,
  data,
}: Props) => {
  // console.log(
  //   "data is ",
  //   JSON.stringify(data) + " isPending " + isPending + " error " + error,
  // );

  if (error) {
    console.log("userDataError  ", error);
    return (
      <div className="flex justify-center items-center h-screen p-16">
        <P size={"xl"} variant={"error"}>
          {"Failed To Load Pricing Information."}
        </P>
      </div>
    );
  }

  if (
    (userData && data === undefined) ||
    data === null ||
    isLoadingUserData ||
    isPending
  ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }

  return (
    <section id="pricing" className="w-full max-w-7xl mx-auto  py-8">
      <h2 className="text-xl md:text-2xl font-bold text-center">
        <span className="bg-linear-to-r from-[#ffffff] to-primary uppercase text-transparent bg-clip-text">
          {" "}
          AI Powered{" "}
        </span>
        Trip Planning Get{" "}
        {/* <span className="bg-linear-to-r from-[#ffffff] to-primary uppercase text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span> */}
        Unlimited Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8"></h3>
      <div className="grid md:grid-cols-2 gap-8">
        {pricingList.map((pricing: PricingCardProps, idx) => (
          <PricingCard
            key={idx}
            pricing={pricing}
            data={data}
            userData={userData}
          />
        ))}
      </div>
    </section>
  );
};
