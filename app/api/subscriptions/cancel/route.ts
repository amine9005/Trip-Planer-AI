// import { getClient } from "@/db/mongoose";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
// import mongoose from "mongoose";
import { getAuth } from "@/lib/auth";
const auth = await getAuth();

// const db = await getClient();

export async function POST(req: NextRequest) {
  const { referenceId, returnUrl, subscriptionId } = await req.json();

  // const user = await db
  //   .collection("user")
  //   .findOne({ _id: new mongoose.Types.ObjectId(referenceId) });
  // console.log(
  //   "subscription details from server: ",
  //   plan,
  //   successUrl,
  //   cancelUrl,
  //   returnUrl,
  // );
  try {
    const data = await auth.api.cancelSubscription({
      body: {
        referenceId, // Reference id of the subscription to cancel. Defaults based on customerType.
        subscriptionId, // The id of the subscription to cancel.
        returnUrl, // required, URL to take customers to when they click on the billing portal's link to return to your website.
      },
      // This endpoint requires session cookies.
      headers: await headers(),
    });

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
