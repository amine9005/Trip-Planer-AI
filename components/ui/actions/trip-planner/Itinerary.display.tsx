import { P } from "@/components/ui/atoms/text/Text";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import { ItineraryType } from "@/types/create-trip.types";
import ActivityCardAction from "@/components/ui/actions/trip-planner/ActivityCard.action";

const ItineraryCard = ({ dayData }: { dayData: ItineraryType }) => {
  return (
    <div>
      <P className={"mb-4"}>
        Best Time To Visit:{" "}
        <strong className="text-primary">
          {dayData.best_time_to_visit_day}
        </strong>
      </P>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {dayData.activities.map((activity, idx) => (
          <BlurFade onlyOnce={false} key={idx} delay={0.3 + idx * 0.1} inView>
            <ActivityCardAction key={idx} activity={activity} />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default ItineraryCard;
