"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  userId: string;
  limit?: number;
}

export const useUserDataMutation = () => {
  const queryClient = useQueryClient();
  const useUserDataMutationFn = async ({ userId, limit }: props) => {
    const response = await axiosInstance.post("/api/user/update", {
      userId,
      limit,
    });
    return response;
  };

  return useMutation({
    mutationFn: useUserDataMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
