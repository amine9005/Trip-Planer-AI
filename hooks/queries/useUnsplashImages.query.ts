"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { apiPaths } from "@/helpers/routes.helper";
import { useEffect, useRef, useState } from "react";

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

export const useGetUnsplashImagesRetryOnFail = (
  image_name: string,
  retry_count: number = 5,
  failed_image_path: string,
) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const { mutateAsync: getPlaceImage, error } = useUnsplashImagesQuery();
  const [failedImage, setFailedImage] = useState<boolean>(false);
  const [requestedImages, setRequestedImages] = useState<boolean>(false);
  const currentRetries = useRef<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const unsplashImages = useRef<any>(null);

  useEffect(() => {
    const get_an_available_image = async () => {
      if (!requestedImages) {
        try {
          const res = await getPlaceImage({
            placeName: image_name,
            page_number: 1,
            per_page: retry_count,
          });
          unsplashImages.current = res.data.data.results;
          console.log("unsplash images: ", unsplashImages.current);
          setImageSrc(unsplashImages.current[0].urls.small);
        } catch (e) {
          console.log("error in getting images from unsplash: ", e);
          setImageSrc(failed_image_path);
        }
        setRequestedImages(true);
      }

      if (requestedImages) {
        if (currentRetries.current < retry_count && !failedImage && !error) {
          currentRetries.current += 1;
          // console.log("current retries: ", currentRetries.current);
          // console.log("data ", unsplashImages.current);
          if (
            unsplashImages.current &&
            unsplashImages.current.length > 0 &&
            unsplashImages.current.length < retry_count - 1
          ) {
            setImageSrc(
              unsplashImages.current[currentRetries.current].urls.small,
            );
          } else {
            unsplashImages.current = retry_count;
          }
        }
        if (currentRetries.current >= retry_count) {
          setImageSrc(failed_image_path);
        }
      }
    };
    get_an_available_image();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image_name, error, getPlaceImage, failedImage]);

  return { imageSrc, setFailedImage };
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
