"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { TripPlan } from "@/db/models/TripPlan.model";
import { apiPaths } from "@/helpers/routes.helper";

export const useSaveTripPlanMutation = () => {
	const queryClient = useQueryClient();
	const saveTripPlanMutationFn = async ({
		userId,
		destination,
		duration,
		origin,
		budget,
		travel_interests,
		special_requirements,
		group_size,
		hotels,
		itinerary,
	}: TripPlan) => {
		const response = await axiosInstance.post(
			apiPaths.TRIPS_ROUTES.POST.CREATE_TRIP,
			{
				userId,
				destination,
				duration,
				origin,
				budget,
				travel_interests,
				special_requirements,
				group_size,
				hotels,
				itinerary,
			},
		);

		return response;
	};

	return useMutation({
		mutationFn: saveTripPlanMutationFn,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["trip-plans"] });
		},
	});
};
