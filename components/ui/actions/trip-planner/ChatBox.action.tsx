"use client";
import ChatBoxOrganism from "@/components/ui/organisms/chatbox/ChatBox.organism";
import { useEffect } from "react";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessage.submit";
import { useTripPlanHook } from "@/hooks/submit/useTripPlan.submit";

const ChatBoxAction = () => {
	const { isLoading, messages, userMessage, setUserMessage, onSend, isFinal } =
		useAiSendMessageHook();

	const { generateTripAndSaveTrip } = useTripPlanHook();

	useEffect(() => {
		console.log("use final: ", isFinal);

		if (isFinal) generateTripAndSaveTrip();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFinal]);

	return (
		<ChatBoxOrganism
			href={""}
			isLoading={isLoading}
			isFinal={isFinal}
			messages={messages}
			userMessage={userMessage}
			setUserMessage={setUserMessage}
			onSend={onSend}
		/>
	);
};

export default ChatBoxAction;
