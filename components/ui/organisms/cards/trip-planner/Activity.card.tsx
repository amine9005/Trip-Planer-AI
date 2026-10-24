import Image from "next/image";
import { ActivityType } from "@/types/create-trip.types";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { ExternalLink, TicketCheckIcon, Timer } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/atoms/button/button.variants";

const ActivityCard = ({
  activity,
  place_image,
}: {
  activity: ActivityType;
  place_image: string;
}) => {
  return (
    <div className={"flex flex-col justify-between gap-2 h-120 max-h-120"}>
      <Image
        src={place_image ? place_image : "/travel-placeholder.jpg"}
        width={400}
        height={200}
        alt={"/travel-placeholder.jpg"}
        className="object-cover rounded-xl w-full h-50 mb-2"
      />
      <H2 size={"lg"}>{activity.place_name}</H2>
      <P variant={"muted"} className="line-clamp-2">
        {activity.place_details}
      </P>
      <P className="flex justify-between items-center" variant={"info"}>
        <TicketCheckIcon /> {activity.ticket_pricing}
      </P>
      <P variant={"warning"} className="flex justify-between items-center">
        <Timer className="size-5" />
        {activity.best_time_to_visit}
      </P>
      <Link
        href={`https://www.google.com/maps/search/?api=1&query=${activity.place_name}`}
        target="_"
        className={` ${buttonVariants({
          variant: "secondary",
          width: "full",
        })}`}
      >
        View <ExternalLink className="size-5" />
      </Link>
    </div>
  );
};

export default ActivityCard;
