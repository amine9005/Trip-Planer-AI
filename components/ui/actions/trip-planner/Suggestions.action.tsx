"use client";
import TextSuggestionsMolecule from "@/components/ui/molecules/suggestions/TextSuggestions.molecule";
import { TripPlannerSuggestions } from "@/components/ui/constants/trip-planner/text-suggestions/trip-planner.display";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessage.submit";
import { DisplayType } from "@/types/general.types";
const SuggestionsAction = ({ display }: DisplayType) => {
  const { onSend } = useAiSendMessageHook();
  return (
    <TextSuggestionsMolecule
      onSend={onSend}
      display={display}
      suggestions={TripPlannerSuggestions}
    />
  );
};

export default SuggestionsAction;
