"use client";
import { useState } from "react";
import { Button } from "@/components/ui/atoms/button/button";

import CounterMolecule from "@/components/ui/molecules/counter/Counter.molecule";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessage.submit";

function SelectDaysAction() {
	const [days, setDays] = useState(3);
	const { onSend } = useAiSendMessageHook();

	return (
		<div className="flex flex-col items-center mt-2 pb-4 p-2 border rounded-2xl bg-secondary">
			<CounterMolecule
				alias="Days"
				count={days}
				setCount={setDays}
				title="How many days do you want to travel ?"
			/>
			<Button
				className="text-white rounded-lg"
				onClick={() =>
					onSend({
						message: days > 1 ? days.toString() + " Days Trip " : " Day Trip",
					})
				}
			>
				Confirm
			</Button>
		</div>
	);
}

export default SelectDaysAction;
