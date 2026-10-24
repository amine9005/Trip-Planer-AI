import React, { useEffect, useState } from "react";
import { ActivityType } from "@/types/create-trip.types";
// import { useGooglePlacesImagesMutation } from "@/hooks/mutations/useGooglePlacesApiMutation.hook";
import ActivityCard from "@/components/ui/organisms/cards/trip-planner/Activity.card";
import { useUnsplashImagesQuery } from "@/hooks/queries/useUnsplashImages.query";

const ActivityCardAction = ({ activity }: { activity: ActivityType }) => {
	// const { mutateAsync: placeDetails } = useGooglePlacesImagesMutation();
	const { mutateAsync: getPlaceImage } = useUnsplashImagesQuery();

	const [placeImage, setPlaceImage] = useState<string>("");

	useEffect(() => {
		const fetchPlaceImage = async () => {
			try {
				const resp = await getPlaceImage({
					placeName: activity.place_name,
					per_page: 1,
					page_number: 1,
				});
				setPlaceImage(resp.data.data.results[0].urls.small);
			} catch (e) {
				console.log("error fetching place image: ", e);
			}
		};

		fetchPlaceImage();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activity.place_name]);
	return <ActivityCard activity={activity} place_image={placeImage} />;
};

export default ActivityCardAction;
