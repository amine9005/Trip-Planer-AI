import { getAuth } from "@/lib/auth";
// import { getClient } from "@/db/mongoose";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// const db = await getClient();
const auth = await getAuth();

export async function POST(req: NextRequest) {
  const { plan, successUrl, cancelUrl, returnUrl, subscriptionId } =
    await req.json();
  console.log(
    "subscription details from server: ",
    plan,
    " success url: ",
    successUrl,
    " cancel Url: ",
    cancelUrl,
    " return url: ",
    returnUrl,
    " stripeSubscriptionId: ",
    subscriptionId,
  );
  try {
    const data = await auth.api.upgradeSubscription({
      body: {
        plan, // required, The name of the plan to upgrade to.

        successUrl, // required, The URL to which Stripe should send customers when payment or setup is complete.
        cancelUrl, // required, If set, checkout shows a back button and customers will be directed here if they cancel payment.
        returnUrl: returnUrl ? returnUrl : "", // The URL to return to from the Billing Portal (used when upgrading existing subscriptions)
        subscriptionId: subscriptionId ? subscriptionId : undefined, // The ID of the subscription to upgrade. This parameter is optional and is used to upgrade an existing subscription.
        scheduleAtPeriodEnd: false, // Schedule the plan change at the end of the current billing period instead of applying it immediately.
      },
      // This endpoint requires session cookies.
      headers: await headers(),
    });

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
