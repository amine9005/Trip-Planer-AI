import { useAIMessagesStore } from "@/store/AI/messages.store";
import { useAI_Mutation } from "@/hooks/mutations/useAI-Model.mutation";
import { useRef } from "react";
import { MessageAISchemaType } from "@/validations/AI.zod";
import {
  useGetSubscriptionQuery,
  useUserQuery,
} from "@/hooks/queries/useUser.query";
import { useUserDataMutation } from "@/hooks/mutations/useUpdateUserData.mutation";
import toast from "react-hot-toast";

export function useAiSendMessageHook() {
  const { mutateAsync: sendMessage } = useAI_Mutation();
  const messages = useAIMessagesStore((state) => state.messages);
  const isLoading = useAIMessagesStore((state) => state.isLoading);
  const isFinal = useAIMessagesStore((state) => state.isFinal);
  const userMessage = useAIMessagesStore((state) => state.userMessage);
  const setUserMessage = useAIMessagesStore((state) => state.setUserMessage);
  const setIsLoading = useAIMessagesStore((state) => state.setIsLoading);
  const setIsFinal = useAIMessagesStore((state) => state.setIsFinal);
  const setMessages = useAIMessagesStore((state) => state.setMessages);
  const { isLoading: isLoadingUserData, data: userData } = useUserQuery();
  const { data: subscriptionData, isLoading: isLoadingSubscription } =
    useGetSubscriptionQuery(userData?.user.id);
  const { mutateAsync: updateUserData } = useUserDataMutation();
  const messageArrayRef = useRef<MessageAISchemaType[]>(messages);

  const onSend = async ({ message }: { message: string }) => {
    // console.log("isFinal ", isFinal);
    if (
      isLoading ||
      message.length < 2 ||
      isFinal ||
      isLoadingUserData ||
      isLoadingSubscription ||
      !userData
    )
      return;

    // console.log("User limit: ", subscriptionData);
    if (!subscriptionData) {
      if (userData.user.limit <= 0) {
        toast.error("You have reached your limit! Please upgrade your plan.");
        console.log("user limit reached");
        return;
      }
    }

    setIsLoading(true);

    messageArrayRef.current.push({ role: "user", message });
    setMessages(messageArrayRef.current);

    setUserMessage("");

    try {
      const resp = await sendMessage({
        messages: messageArrayRef.current,
        isFinal: false,
      });

      // console.log("ai row response ", resp);
      const aiMsg = JSON.parse(
        resp.data.message.slice(
          resp.data.message.indexOf("{"),
          resp.data.message.lastIndexOf("}") + 1,
        ),
      );

      messageArrayRef.current.push({
        role: "assistant",
        message: aiMsg.resp,
        ui: aiMsg.ui,
      });

      setIsFinal(aiMsg.ui === "Final");

      if (aiMsg.ui === "Final" && !subscriptionData) {
        await updateUserData({
          userId: userData.user.id,
          limit: (userData.user.limit as number) - 1,
        });
      }
    } catch (error) {
      console.log(error);
      messageArrayRef.current.push({
        role: "assistant",
        message: "Something went wrong please try again!",
      });
    }

    setMessages(messageArrayRef.current);
    setIsLoading(false);
  };

  return { onSend, userMessage, isLoading, setUserMessage, messages, isFinal };
}
