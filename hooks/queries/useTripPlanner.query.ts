import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { TripPlanType } from "@/types/create-trip.types";
import { useUnsplashImagesQuery } from "@/hooks/queries/useUnsplashImages.query";
import { apiPaths } from "@/helpers/routes.helper";

export function useGetRandomPlaceHolderImageQuery(placeName: string) {
	const { mutateAsync: getImageFn } = useUnsplashImagesQuery();

	const getRandomImageByName = async ({ placeName }: { placeName: string }) => {
		const max = 9;
		const min = 0;
		const choice = Math.floor(Math.random() * (max - min)) + min;
		const page_number = Math.floor(Math.random() * (max - min)) + min;
		const res = await getImageFn({
			placeName,
			page_number,
			per_page: 10,
		});

		return res.data.data.results[choice].urls.regular;
	};
	return useQuery({
		queryFn: () => getRandomImageByName({ placeName }),
		queryKey: ["placeholder-image"],
		staleTime: Infinity,
	});
}

// Custom hook to fetch trips using React Query
export const useTripsQuery = (id: string | undefined) => {
	// Define the API endpoint for fetching the trips
	// console.log("id ", id);
	const fetchTrips = async (): Promise<TripPlanType[] | null> => {
		if (!id) return null; // Return an empty array if no id is provided
		const response = await axiosInstance.get(
			apiPaths.TRIPS_ROUTES.GET.ALL_TRIPS + id,
		);
		return response.data.trips;
	};
	return useQuery({
		queryFn: fetchTrips,
		queryKey: ["trips"],
		staleTime: 60,
	});
};

// Custom hook to fetch trips using React Query
export const useGetTripByIdQuery = (id: string | undefined) => {
	// Define the API endpoint for fetching the trips
	// console.log("id ", id);
	const fetchTrips = async (): Promise<TripPlanType | null> => {
		// console.log("id", id);
		if (!id) return null; // Return an empty array if no id is provided
		const response = await axiosInstance.get(
			apiPaths.TRIPS_ROUTES.GET.TRIP_BY_ID + id,
		);
		return response.data.trip;
	};
	return useQuery({
		queryFn: fetchTrips,
		queryKey: [`trip:` + id],
		staleTime: 60,
	});
};
