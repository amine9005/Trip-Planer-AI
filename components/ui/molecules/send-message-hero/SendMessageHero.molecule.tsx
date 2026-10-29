"use client";
import SendMessageMolecule from "@/components/ui/molecules/sendMessage/SendMessage.molecule";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessage.submit";
import { useAIMessagesStore } from "@/store/AI/messages.store";

const SendMessageHeroMolecule = () => {
  const isLoading = useAIMessagesStore((state) => state.isLoading);
  const { onSend, setUserMessage, userMessage } = useAiSendMessageHook();

  return (
    <SendMessageMolecule
      href={"create-new-trip"}
      isLoading={isLoading}
      onSend={onSend}
      isFinal={false}
      setUserMessage={setUserMessage}
      userMessage={userMessage}
    />
  );
};

export default SendMessageHeroMolecule;
