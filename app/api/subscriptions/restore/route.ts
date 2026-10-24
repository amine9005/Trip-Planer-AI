import { getAuth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const auth = await getAuth();

export async function POST(req: NextRequest) {
	const { referenceId, subscriptionId } = await req.json();

	try {
		const data = await auth.api.restoreSubscription({
			body: {
				referenceId, // Reference id of the subscription to restore. Defaults based on customerType.
				subscriptionId, // The id of the subscription to restore.
			},
			// This endpoint requires session cookies.
			headers: await headers(),
		});

		return NextResponse.json({ data: data }, { status: 200 });
	} catch (e) {
		return NextResponse.json({ error: e }, { status: 500 });
	}
}
