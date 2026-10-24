import { TripPlan } from "@/db/models/TripPlan.model";
import { useAIMessagesStore } from "@/store/AI/messages.store";
import { MessageAISchemaType } from "@/validations/AI.zod";
import { useSaveTripPlanMutation } from "@/hooks/mutations/useSaveTripPlanMutation.hook";
import { useAI_Mutation } from "@/hooks/mutations/useAI-Model.mutation";
import { useUserQuery } from "@/hooks/queries/useUser.query";
import { aiResponseToJSON } from "@/helpers/AiUtils.helper";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessage.submit";

export function useTripPlanHook() {
  const { mutateAsync: saveTripPlaMt } = useSaveTripPlanMutation();
  const setSuccess = useAIMessagesStore((state) => state.setSuccess);
  const success = useAIMessagesStore((state) => state.success);
  const setUpdateMap = useAIMessagesStore((state) => state.setUpdateMap);
  const { mutateAsync: sendMessage } = useAI_Mutation();
  const isLoadingResult = useAIMessagesStore((state) => state.isLoadingResult);
  const setIsLoadingResult = useAIMessagesStore(
    (state) => state.setIsLoadingResult,
  );

  const { data } = useUserQuery();

  const { messages, isFinal } = useAiSendMessageHook();

  const setTripPlan = useAIMessagesStore((state) => state.setTripPlan);
  const tripPlan = useAIMessagesStore((state) => state.tripPlan);

  const saveTripPlan = async (tripPlan: TripPlan) => {
    try {
      if (!data) {
        console.log("no user data");
        return;
      }

      tripPlan.userId = data.user.id;

      const resp = await saveTripPlaMt(tripPlan);

      // console.log("save trip ", resp);
      return resp;
    } catch (e) {
      console.log("error saving trip ", e);
      return null;
    }
  };

  const generateTrip = async ({
    isFinal,
    messages,
  }: {
    isFinal: boolean;
    messages: MessageAISchemaType[];
  }) => {
    // console.log("is final ", isFinal);

    if (isFinal) {
      try {
        // console.log("generating trip Itinerary...");
        const tripItinerary = await sendMessage({
          messages: messages,
          isFinal: isFinal,
        });

        // console.log("tripItinerary: ", tripItinerary);
        setSuccess(true);

        return tripItinerary;
      } catch (error) {
        console.log(error);
        setSuccess(false);
        return null;
      }
    }
  };

  const generateTripAndSaveTrip = async () => {
    // console.log("finalizing");
    setIsLoadingResult(true);
    const trip_string = await generateTrip({ messages, isFinal });
    // console.log("trip string: ", trip_string);

    if (trip_string) {
      try {
        const result = aiResponseToJSON(trip_string);
        // console.log("result json ", result);
        setTripPlan(result.trip_plan);
        // console.log("trip plan result ", result.trip_plan);
        await saveTripPlan(result.trip_plan);
        setUpdateMap(true);
        setSuccess(true);
      } catch (e) {
        console.log("error ", e);
      }
    } else {
      setSuccess(false);
    }
    setIsLoadingResult(false);
  };

  return {
    saveTripPlan,
    generateTripAndSaveTrip,
    success,
    isLoadingResult,
    tripPlan,
  };
}
