"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { apiPaths } from "@/helpers/routes.helper";

interface props {
  plan: string;
  successUrl: string;
  cancelUrl: string;
  returnUrl?: string;
  subscriptionId?: string | null;
}

export const useUpdateSubscriptionMutationHook = () => {
  const queryClient = useQueryClient();
  const useSubscriptionMutationFn = async ({
    plan,
    successUrl,
    cancelUrl,
    returnUrl,
    subscriptionId,
  }: props) => {
    // console.log("subscription details", plan, successUrl, cancelUrl, returnUrl);

    const response = await axiosInstance.post(
      apiPaths.SUBSCRIPTION_ROUTES.POST.UPDATE,
      {
        plan,
        successUrl,
        cancelUrl,
        returnUrl,
        subscriptionId,
      },
    );
    return response;
  };

  return useMutation({
    mutationFn: useSubscriptionMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscriptions"] });
    },
  });
};

export const useGetBillingPortalHook = () => {
  const queryClient = useQueryClient();
  const useGetBillingPortalHookFn = async ({
    referenceId,
    returnUrl,
  }: {
    referenceId: string;
    returnUrl: string;
  }) => {
    // console.log("subscription details", plan, successUrl, cancelUrl, returnUrl);

    const response = await axiosInstance.post(
      apiPaths.SUBSCRIPTION_ROUTES.POST.PORTAL,
      {
        referenceId,
        returnUrl,
      },
    );
    return response;
  };

  return useMutation({
    mutationFn: useGetBillingPortalHookFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscription"] });
    },
  });
};

export const useRestoreSubscriptionHook = () => {
  const queryClient = useQueryClient();
  const useRestoreSubscriptionHookHookFn = async ({
    referenceId,
    subscriptionId,
  }: {
    referenceId: string;
    subscriptionId: string;
  }) => {
    // console.log("subscription details", plan, successUrl, cancelUrl, returnUrl);

    const response = await axiosInstance.post(
      apiPaths.SUBSCRIPTION_ROUTES.POST.RESTORE,
      {
        referenceId,
        subscriptionId,
      },
    );
    return response;
  };

  return useMutation({
    mutationFn: useRestoreSubscriptionHookHookFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscription"] });
    },
  });
};

export const useCancelSubscriptionHook = () => {
  const queryClient = useQueryClient();
  const useCancelSubscriptionHookHookFn = async ({
    referenceId,
    subscriptionId,
    returnUrl,
  }: {
    referenceId: string;
    subscriptionId: string;
    returnUrl: string;
  }) => {
    // console.log("subscription details", plan, successUrl, cancelUrl, returnUrl);

    const response = await axiosInstance.post(
      apiPaths.SUBSCRIPTION_ROUTES.POST.CANCEL,
      {
        referenceId,
        subscriptionId,
        returnUrl,
      },
    );
    return response;
  };

  return useMutation({
    mutationFn: useCancelSubscriptionHookHookFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscription"] });
    },
  });
};
