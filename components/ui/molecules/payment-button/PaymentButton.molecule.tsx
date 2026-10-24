"use client";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/atoms/button/button";
import { useEffect, useState } from "react";
import { isAuthenticatedAction } from "@/app/api/actions/auth/auth.controller";
import { useUpdateSubscriptionMutationHook } from "@/hooks/mutations/useSubscription.mutation";
import { Loader2 } from "lucide-react";
interface Props {
  plan: string;
  successUrl: string;
  cancelUrl: string;
  returnUrl?: string;
  subscriptionId?: string | null;
  text?: string;
  href: string;
}
const PaymentButtonMolecule = ({
  cancelUrl,
  plan,
  successUrl,
  returnUrl,
  subscriptionId,
  text,
  href,
}: Props) => {
  const [user, setUser] = useState(false);
  const [loading, seLoading] = useState(false);
  const { mutateAsync: updateSubscription } =
    useUpdateSubscriptionMutationHook();

  useEffect(() => {
    const setUserData = async () => {
      setUser(await isAuthenticatedAction());
    };

    setUserData();
  });

  const handle_click = async ({
    plan,
    successUrl,
    cancelUrl,
    returnUrl,
    subscriptionId,
    href,
  }: Props) => {
    if (user) {
      seLoading(true);

      const resp = await updateSubscription({
        plan,
        successUrl,
        cancelUrl,
        returnUrl,
        subscriptionId,
      });
      console.log("resp: ", resp);
      seLoading(false);
      redirect(resp.data.data.url);
    } else {
      // console.log("user not authenticated");
      seLoading(false);

      redirect(href);
    }
  };

  return (
    <Button
      onClick={() =>
        handle_click({
          plan,
          successUrl,
          cancelUrl,
          returnUrl,
          href,
          subscriptionId,
        })
      }
      disabled={loading}
    >
      {text}
      {loading && <Loader2 className="size-5 animate-spin" />}
    </Button>
  );
};

export default PaymentButtonMolecule;
