import { NextRequest, NextResponse } from "next/server";
// import { getClient } from "@/db/mongoose";
// import SubscriptionModel from "@/db/models/Subscription.model";
import { headers } from "next/headers";
import { getAuth } from "@/lib/auth";
import { Subscription } from "@better-auth/stripe";
const auth = await getAuth();

// const db = await getClient();
export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const user_id = (await params).id;
	try {
		// console.log("title ", title, "description: ", description);
		// console.log("getting subscription " + user_id);
		const subscriptions = await auth.api.listActiveSubscriptions({
			query: {
				referenceId: user_id, // Reference id of the subscription to list.
			},
			// This endpoint requires session cookies.
			headers: await headers(),
		});

		const activeSubscription = subscriptions.find(
			(sub: Subscription) =>
				sub.status === "active" || sub.status === "trialing",
		);

		return NextResponse.json(
			{
				message: "Subscription Retrieved Successfully",
				result: activeSubscription,
			},
			{
				status: 200,
			},
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Internal Server Error", error },
			{ status: 500 },
		);
	}
}
