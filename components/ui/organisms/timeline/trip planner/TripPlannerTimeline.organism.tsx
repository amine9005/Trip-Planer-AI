import { Calendar, Users, Wallet } from "lucide-react";
import { Timeline } from "@/components/ui/organisms/timeline/Timeline.organism";

import { H2 } from "@/components/ui/atoms/heading/heading2";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import ItineraryCard from "@/components/ui/actions/trip-planner/Itinerary.display";
import { TripPlanType } from "@/types/create-trip.types";
import HotelCardAction from "@/components/ui/actions/cards/HotelCard.action";

const TripPlannerTimelineOrganism = ({
  tripPlan,
}: {
  tripPlan: TripPlanType;
}) => {
  const data = [
    {
      title: "Hotels",
      content: (
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {tripPlan?.hotels.map((hotel, idx) => {
            return (
              <BlurFade
                onlyOnce={false}
                key={idx}
                delay={0.3 + idx * 0.1}
                inView
              >
                <HotelCardAction hotel={hotel} idx={idx} />
              </BlurFade>
            );
          })}
        </div>
      ),
    },
    ...tripPlan?.itinerary.map((dayData) => ({
      title: `Day ${dayData.day}`,
      content: <ItineraryCard dayData={dayData} />,
    })),
  ];
  return (
    <div className="relative lg:mx-3 min-h-[85vh] scrollbar-none [&::-webkit-scrollbar]:hidden w-full col-span-2 gap-2">
      <Timeline
        data={data}
        mainTitle={
          <H2 className="justify-center items-center text-center" size={"xl"}>
            Your Trip Itinerary From{" "}
            <strong className="text-primary">{tripPlan?.origin}</strong> To{" "}
            <strong className="text-primary">{tripPlan?.destination}</strong> Is
            Ready
          </H2>
        }
        mainDescription={
          <div className="flex flex-row gap-5 items-center">
            <div className="flex gap-2 item-center">
              <Calendar className="size-5" />
              {tripPlan?.duration}
            </div>
            <div className="flex gap-2 item-center">
              <Wallet className="size-5" />
              {tripPlan?.budget}
            </div>
            <div className="flex gap-2 item-center">
              <Users className="size-5" />
              {tripPlan?.group_size}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TripPlannerTimelineOrganism;
