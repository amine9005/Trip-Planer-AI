import Link from "next/link";
import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import BillingPortalButtonMolecule from "@/components/ui/molecules/billing-portal-button/BillingPortalButton.molecule";
import { PricingCardProps, SubscriptionDataType } from "@/types/pricing.types";
import { User } from "better-auth";
import { P } from "@/components/ui/atoms/text/Text";
import PaymentButtonMolecule from "@/components/ui/molecules/payment-button/PaymentButton.molecule";

const PortalBaseSubscriptionAction = ({
  pricing,
  userData,
  data,
}: {
  pricing: PricingCardProps;
  userData: User | undefined;
  data: SubscriptionDataType | null | undefined;
}) => {
  // console.log("data ", data);
  if (!userData)
    return (
      <Link
        className={buttonVariants({
          size: "lg",
          width: "lg",
          variant: "default",
        })}
        href={"/sign-in"}
      >
        Sign In
      </Link>
    );

  if (data) {
    if (pricing.title.toUpperCase() === data.plan.toUpperCase()) {
      return (
        <div className="flex justify-between items-center">
          <H2 variant={"primary"}> Current Active Plan</H2>
        </div>
      );
    } else {
      return (
        <BillingPortalButtonMolecule
          referenceId={userData?.id}
          returnUrl="/pricing"
          text={
            pricing.title.toLocaleUpperCase() === "FREE"
              ? "Manage Subscription"
              : "Upgrade"
          }
        />
      );
    }
  }
  if (!data) {
    if (pricing.title.toUpperCase() === "FREE") {
      return (
        <div>
          <P className="text-lg" variant={"primary"}>
            You are currently using a free plan
          </P>
        </div>
      );
    } else {
      return (
        <PaymentButtonMolecule
          successUrl={pricing.successUrl!}
          cancelUrl={pricing.cancelUrl!}
          returnUrl={pricing.returnUrl!}
          plan={pricing.plan!}
          href={pricing.href}
          text={pricing.buttonText}
        />
      );
    }
  }
};

export default PortalBaseSubscriptionAction;
