"use client";

import ActivityCard from "@/components/ui/organisms/cards/trip-planner/Activity.card";
import { useGetUnsplashImagesRetryOnFail } from "@/hooks/queries/useUnsplashImages.query";
import { ActivityType } from "@/types/create-trip.types";

const ActivityCardAction = ({ activity }: { activity: ActivityType }) => {
  const { imageSrc, setFailedImage } = useGetUnsplashImagesRetryOnFail(
    activity.place_name,
    2,
    "/travel-placeholder.jpg",
  );

  return (
    <ActivityCard
      imageSrc={imageSrc}
      activity={activity}
      setFailedImage={setFailedImage}
    />
  );
};

export default ActivityCardAction;
