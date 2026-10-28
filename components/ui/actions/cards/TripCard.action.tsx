"use client";
import { TripPlanType } from "@/types/create-trip.types";
import { useGetUnsplashImagesRetryOnFail } from "@/hooks/queries/useUnsplashImages.query";
import TripCard from "@/components/ui/organisms/cards/trip-planner/Trip.card";
const TripCardAction = ({ trip }: { trip: TripPlanType }) => {
  const { imageSrc, setFailedImage } = useGetUnsplashImagesRetryOnFail(
    trip.thumbnail,
    2,
    "/travel-placeholder.jpg",
  );

  return (
    <TripCard trip={trip} imageSrc={imageSrc} setFailedImage={setFailedImage} />
  );
};

export default TripCardAction;
