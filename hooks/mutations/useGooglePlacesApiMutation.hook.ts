"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { apiPaths } from "@/helpers/routes.helper";

interface props {
  placeName: string;
}

export const useGooglePlacesImagesMutation = () => {
  const queryClient = useQueryClient();
  const useGooglePlacesImagesMutationFn = async ({ placeName }: props) => {
    const response = await axiosInstance.post(
      apiPaths.PLACES_DETAILS_ROUTES.POST.GOOGLE,
      {
        placeName,
      },
    );
    return response;
  };

  return useMutation({
    mutationFn: useGooglePlacesImagesMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["place-details"] });
    },
  });
};
