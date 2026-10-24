import { getSession } from "@/helpers/authHelper.helper";
import { apiPaths } from "@/helpers/routes.helper";
import axiosInstance from "@/lib/axios";
import { SubscriptionDataType } from "@/types/pricing.types";
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

// Custom hook to fetch User using React Query
export const useUserQuery = () => {
  // Define the API endpoint for fetching the User
  const fetchUser = async () => {
    const response = await getSession();

    return response ? response : null;
  };
  return useQuery({
    queryFn: fetchUser,
    queryKey: ["user"],
    staleTime: 5,
  });
};

export const useGetSubscriptionQuery = (id: string | undefined) => {
  const getSubscription = async (): Promise<SubscriptionDataType | null> => {
    if (!id) return null;
    const resp = await axiosInstance.get(
      apiPaths.SUBSCRIPTION_ROUTES.GET.SUBSCRIPTION_BY_ID + id,
    );
    // console.log("response from server ", resp);
    return resp.data.result ? resp.data.result : null;
  };

  return useQuery({
    queryFn: getSubscription,
    queryKey: ["subscription"],
    staleTime: 15,
  });
};
