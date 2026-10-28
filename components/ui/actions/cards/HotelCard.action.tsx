"use client";
import HotelCard from "@/components/ui/organisms/cards/trip-planner/Hotel.card";
import { Hotel } from "@/db/models/Hotel.model";
// import { useGooglePlacesImagesMutation } from "@/hooks/mutations/useGooglePlacesApiMutation.hook";
import { useGetUnsplashImagesRetryOnFail } from "@/hooks/queries/useUnsplashImages.query";

const HotelCardAction = ({ hotel, idx }: { hotel: Hotel; idx: number }) => {
  const { imageSrc, setFailedImage } = useGetUnsplashImagesRetryOnFail(
    hotel.hotel_name,
    2,
    "/hotel-building-concept.jpg",
  );

  return (
    <HotelCard
      hotel={hotel}
      idx={idx}
      imageSrc={imageSrc}
      setFailedImage={setFailedImage}
    />
  );
};

export default HotelCardAction;
