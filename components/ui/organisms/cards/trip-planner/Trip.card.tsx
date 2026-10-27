"use client";
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
import { useEffect, useState } from "react";
import { useUnsplashImagesQuery } from "@/hooks/queries/useUnsplashImages.query";
const TripCard = ({ trip }: { trip: TripPlanType }) => {
  // console.log("trip name ", trip.origin + " To " + trip.destination);
  // console.log("image1 ", imageSrc);

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // // const [itineraryCount,setItineraryCount] = useState(0);
  // const [activityCount, setActivityCount] = useState(0);

  // const update_image = () => {
  //   if (trip.itinerary[0].activities.length < activityCount) {
  //     setImageSrc(trip.itinerary[0].activities[activityCount].place_image_url);
  //     setActivityCount(activityCount + 1);
  //   }
  //   console.log("count: ", activityCount);
  // };
  const { mutateAsync: getPlaceImage, error } = useUnsplashImagesQuery();
  const [failedImage, setFailedImage] = useState<boolean>(false);

  useEffect(() => {
    const get_an_available_image = async () => {
      const res = await getPlaceImage({
        placeName: trip.itinerary[0].activities[0].place_name,
      });
      setImageSrc(res.data.data.results[0].urls.small);
    };
    get_an_available_image();
  }, [trip.itinerary, error, getPlaceImage, failedImage]);

  return (
    <div className="relative justify-between items-center flex flex-col gap-1 hover:scale-105 transition-all duration-300 hover:opacity-85 h-130 max-h-130">
      <Image
        src={imageSrc ? imageSrc : "/travel-placeholder.jpg"}
        width={400}
        height={200}
        onError={() => {
          // console.log("image error From Next JS: ", e);
          setFailedImage(true);
          setImageSrc("/Nature-Image.jpg");
          // update_image();
          // setImageSrc("/travel-placeholder.jpg"); // Set a default image if the error persists
        }}
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
