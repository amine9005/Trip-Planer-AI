import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import SuggestionsAction from "../../actions/trip-planner/Suggestions.action";

const UserWelcomeMolecule = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <H2 size={"xl"} className="text-center">
        {" "}
        Start Planing Your
        <strong className="text-primary"> Trip</strong> Using{" "}
        <strong className="text-primary"> AI</strong>
      </H2>
      <P size={"sm"} className="mt-2 text-center mb-4" variant={"muted"}>
        Discover personalized travel itineraries, find the best travel
        destinations and experiences with AI-assisted travel planner. Plan your
        trip with ease and comfort, without worrying about the details. Start
        planning your trip now and enjoy your journey!
      </P>
      <SuggestionsAction display={"vertical"} />
    </div>
  );
};

export default UserWelcomeMolecule;
