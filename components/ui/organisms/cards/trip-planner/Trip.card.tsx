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
import { TripPlanType } from "@/types/create-trip.types";
import { BlurImageMolecule } from "@/components/ui/molecules/blur-image/BlurImage.molecule";

const TripCard = ({
  trip,
  imageSrc,
  setFailedImage,
}: {
  trip: TripPlanType;
  imageSrc: string | null;
  setFailedImage: (value: boolean) => void;
}) => {
  // console.log("trip image: ", imageSrc);
  const place_holder_image = "/travel-placeholder.jpg";
  const imgPath = imageSrc ? imageSrc : place_holder_image;

  return (
    <div className="relative justify-between items-center flex flex-col gap-1 hover:scale-105 transition-all duration-300 hover:opacity-85 h-130 max-h-130">
      <BlurImageMolecule
        loading="eager"
        className="rounded-xl object-cover w-full h-50 shadow pb-2"
        width={400}
        height={200}
        setFailedImage={setFailedImage}
        url={imgPath}
        alt={trip.thumbnail}
        place_holder_image={place_holder_image}
        src={imgPath}
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
