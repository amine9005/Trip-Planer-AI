"use client";
import { ChatProgressUI } from "@/types/create-trip.types";
import { JSX } from "react";
import SelectByIconOrganism from "@/components/ui/organisms/tripPlanner/SelectByIcon.organism";

import SelectDaysAction from "@/components/ui/molecules/select-days/SelectDays.molecule";
import FinalTripAction from "@/components/ui/actions/trip-planner/FinalTrip.action";
import {
  SelectBudgetOptions,
  SelectTravelList,
} from "@/components/ui/constants/trip-planner/text-suggestions/trip-planner.display";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessage.submit";

const DisplaySelectUIAction = ({ ui }: ChatProgressUI): JSX.Element => {
  const { onSend } = useAiSendMessageHook();

  switch (ui) {
    case "GroupSize":
      return <SelectByIconOrganism items={SelectTravelList} onSend={onSend} />;
    case "Budget":
      return (
        <SelectByIconOrganism items={SelectBudgetOptions} onSend={onSend} />
      );
    case "TripDuration":
      return <SelectDaysAction />;
    case "Final":
      return <FinalTripAction />;
    default:
      return <div></div>;
  }
};

export default DisplaySelectUIAction;
