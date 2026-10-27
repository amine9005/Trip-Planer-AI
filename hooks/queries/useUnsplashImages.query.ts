"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { apiPaths } from "@/helpers/routes.helper";

interface props {
  placeName: string;
  page_number?: number;
  per_page?: number;
  w?: number;
  h?: number;
}

export const useUnsplashImagesQuery = () => {
  const queryClient = useQueryClient();
  const useUnsplashImagesQueryFn = async ({
    placeName,
    page_number = 1,
    per_page = 1,
    w = 500,
    h = 500,
  }: props) => {
    const response = await axiosInstance.post(
      apiPaths.IMAGES_ROUTES.POST.UNSPLASH,
      {
        placeName,
        page_number,
        per_page,
        w,
        h,
      },
    );
    return response;
  };

  return useMutation({
    mutationFn: useUnsplashImagesQueryFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["unsplash-images"] });
    },
  });
};

export const checkIfImageIsAvailable = async (url: string) => {
  try {
    const resp = await axiosInstance.get(url);
    console.log("is image available resp: ", resp);
    return resp;
  } catch (error) {
    console.log("is image available error: ", error);
    return null;
  }
};
