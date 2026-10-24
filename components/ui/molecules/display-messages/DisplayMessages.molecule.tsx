import { Loader2Icon } from "lucide-react";
import {
  DisplayMessagesType,
  LoadingStateType,
} from "@/types/create-trip.types";
import UserWelcomeMolecule from "@/components/ui/molecules/trip-planner/UserWelcome.molecule";
import DisplaySelectUIAction from "@/components/ui/actions/trip-planner/DisplaySelectUI.action";

const DisplayMessagesMolecule = ({
  messages,
  isLoading,
  isFinal,
}: LoadingStateType & DisplayMessagesType) => {
  return (
    <>
      {messages && messages.length > 0 ? (
        messages.map((message, index) =>
          message.role === "user" ? (
            <div key={index} className="flex justify-end mt-2">
              <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                {message.message}
              </div>
            </div>
          ) : (
            <div key={index} className="flex justify-start mt-2">
              <div className="max-w-lg bg-gray-800 text-white px-4 py-2 rounded-lg">
                {message.message}
                {message.ui && <DisplaySelectUIAction ui={message.ui} />}
              </div>
            </div>
          ),
        )
      ) : (
        <UserWelcomeMolecule />
      )}
      {isLoading && !isFinal && (
        <div className="flex justify-start mt-2">
          <div className="max-w-lg bg-gray-800 text-white px-4 py-2 rounded-lg">
            <Loader2Icon className="animate-spin size-5" />
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayMessagesMolecule;
