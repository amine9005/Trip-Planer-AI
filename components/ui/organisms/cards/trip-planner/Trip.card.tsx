import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import {
  ArrowRightSquare,
  Clock,
  LucideMessageCircleWarning,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TripPlanType } from "@/types/create-trip.types";
const TripCard = ({
  trip,
  imageSrc,
}: {
  trip: TripPlanType;
  imageSrc?: string;
}) => {
  console.log("trip name ", trip.origin + " To " + trip.destination);
  console.log("image1 ", imageSrc);
  return (
    <div className="relative justify-between items-center flex flex-col gap-1 hover:scale-105 transition-all duration-300 hover:opacity-85 h-130 max-h-130">
      <Image
        src={imageSrc ? imageSrc : "/Nature-Image.jpg"}
        width={400}
        height={200}
        alt={"Destination Image"}
        className="rounded-xl object-cover w-full h-50 shadow pb-2"
      />
      <H2 className="font-semibold" size={"lg"}>
        {trip.origin} To {trip.destination}
      </H2>
      <P className="font-semibold " size={"default"} variant={"muted"}>
        {trip.travel_interests}
      </P>
      <div className="flex-col mt-4 w-full space-y-2">
        <P className="flex flex-row gap-4 justify-between">
          {" "}
          <span className="flex flex-row gap-2">
            <Wallet className="size-6 " /> Budget
          </span>
          <span className="text-amber-300">{trip.budget} </span>
        </P>
        <P className="flex flex-row gap-4 justify-between">
          {" "}
          <span className="flex flex-row gap-2">
            <Users className="size-6 " /> Group Size
          </span>
          <span className="text-amber-300">{trip.group_size} </span>
        </P>
        <P className="flex flex-row gap-4 justify-between">
          {" "}
          <span className="flex flex-row gap-2">
            <Clock className=" size-6" /> Trip Duration
          </span>
          <span className="text-amber-300">{trip.duration} </span>
        </P>
        <P className="flex flex-row gap-4 justify-between">
          {" "}
          <span className="flex flex-row gap-2">
            <LucideMessageCircleWarning className=" size-6" /> Special
            requirements:
          </span>
        </P>
      </div>

      <span className="line-clamp-2 overflow-y-hidden text-amber-300">
        {trip.special_requirements}
      </span>
      <Link
        href={`/trips/${trip._id}`}
        target="_"
        className={`mt-2 ${buttonVariants({
          variant: "default",
          width: "full",
        })}`}
      >
        View
        <ArrowRightSquare className="size-5" />
      </Link>
    </div>
  );
};

export default TripCard;
