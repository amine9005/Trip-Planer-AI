import { getAuth } from "@/lib/auth";
// import { getClient } from "@/db/mongoose";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
// import mongoose from "mongoose";
const auth = await getAuth();

// const db = await getClient();

export async function POST(req: NextRequest) {
  const { referenceId, returnUrl } = await req.json();

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
    const data = await auth.api.createBillingPortal({
      body: {
        referenceId, // Reference id of the subscription.
        returnUrl, // Return URL to redirect back after exiting the billing portal.
        disableRedirect: false, // Disable the automatic redirect to the billing page. @default false
      },
      // This endpoint requires session cookies.
      headers: await headers(),
    });

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
