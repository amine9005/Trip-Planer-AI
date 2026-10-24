import { PricingCardProps, SubscriptionDataType } from "@/types/pricing.types";
import { User } from "better-auth";
import { PricingGridOrganism } from "@/components/ui/organisms/pricing/PricingGrid.organism";
import { PricingListData } from "@/components/ui/constants/trip-planner/TripPlanner.constants";

interface Props {
  error: Error | null;
  isPending: boolean;
  isLoadingUserData: boolean;
  userData: User | undefined;
  pricingList: PricingCardProps[];
  data: SubscriptionDataType | undefined | null;
}

const PricingGridContent = ({
  error,
  isPending,
  isLoadingUserData,
  userData,
  data,
}: Props) => {
  return (
    <PricingGridOrganism
      data={data}
      error={error}
      isPending={isPending}
      isLoadingUserData={isLoadingUserData}
      userData={userData}
      pricingList={PricingListData}
    />
  );
};

export default PricingGridContent;
