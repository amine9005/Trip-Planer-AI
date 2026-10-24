"use client";
import { useAIMessagesStore } from "@/store/AI/messages.store";
import TripPlaceHolderImageAction from "./TripPlaceHolderImage.action";
import TripPlannerTimelineOrganism from "@/components/ui/organisms/timeline/trip planner/TripPlannerTimeline.organism";

const TripPlannerAction = () => {
  const tripPlan = useAIMessagesStore((state) => state.tripPlan);

  if (!tripPlan) {
    return <TripPlaceHolderImageAction />;
  }

  return <TripPlannerTimelineOrganism tripPlan={tripPlan} />;
};

export default TripPlannerAction;
