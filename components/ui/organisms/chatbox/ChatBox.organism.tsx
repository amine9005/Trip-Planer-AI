"use client";
import SendMessageMolecule from "@/components/ui/molecules/sendMessage/SendMessage.molecule";

import {
  DisplayMessagesType,
  LoadingStateType,
  SendMessageType,
} from "@/types/create-trip.types";
import DisplayMessagesMolecule from "@/components/ui/molecules/display-messages/DisplayMessages.molecule";

const ChatBoxOrganism = ({
  isLoading,
  isFinal,
  success,
  userMessage,
  onSend,
  setUserMessage,
  messages,
}: LoadingStateType & DisplayMessagesType & SendMessageType) => {
  return (
    <div className="flex flex-col h-[85vh] ">
      {/* Display Messages */}
      <section className="flex-1 overflow-y-auto md:p-4 ">
        <DisplayMessagesMolecule
          isFinal={isFinal}
          isLoading={isLoading}
          success={success}
          messages={messages}
        />
      </section>
      {/* User Input */}
      <section>
        <SendMessageMolecule
          href={""}
          isLoading={isLoading}
          success={success}
          isFinal={isFinal}
          onSend={onSend}
          setUserMessage={setUserMessage}
          userMessage={userMessage}
        />
      </section>
    </div>
  );
};

export default ChatBoxOrganism;
