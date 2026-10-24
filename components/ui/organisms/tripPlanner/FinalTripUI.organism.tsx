import { GlobeIcon } from "lucide-react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { Button } from "@/components/ui/atoms/button/button";

const FinalTripUIOrganism = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary rounded-lg">
      <GlobeIcon className="text-primary text-4xl animate-bounce" />
      <H2 className="mt-3 font-semibold" size={"lg"} variant={"primary"}>
        ✈️ Planning Your Dream Trip...
      </H2>
      <P className="mt-1 text-center text-white" variant={"secondary"}>
        Gathering best Destinations, activities and travel details for you.
      </P>

      <Button disabled className="mt-2 w-full">
        View Trip
      </Button>
    </div>
  );
};

export default FinalTripUIOrganism;
