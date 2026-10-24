"use client";
import { useEffect, useState } from "react";
import HotelCard from "@/components/ui/organisms/cards/trip-planner/Hotel.card";
import { Hotel } from "@/db/models/Hotel.model";
import { useGooglePlacesImagesMutation } from "@/hooks/mutations/useGooglePlacesApiMutation.hook";
import { useUnsplashImagesQuery } from "@/hooks/queries/useUnsplashImages.query";

const HotelCardAction = ({ hotel, idx }: { hotel: Hotel; idx: number }) => {
  const { mutateAsync: placeDetails } = useGooglePlacesImagesMutation();
  const { mutateAsync: getPlaceImage } = useUnsplashImagesQuery();

  const [placeImage, setPlaceImage] = useState<string>("");

  useEffect(() => {
    getPlaceImage({ placeName: hotel.hotel_name, per_page: 1, page_number: 1 })
      .then((res) => {
        // console.log("place image: ", res.data.data.results[0].urls.small);

        setPlaceImage(res.data.data.results[0].urls.small);
      })
      .catch((err) => console.log(err));

    placeDetails({ placeName: hotel.hotel_name })
      .then((res) => {
        // console.log("place details: ", res);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotel.hotel_name]);

  return <HotelCard hotel={hotel} idx={idx} imageSrc={placeImage} />;
};

export default HotelCardAction;
