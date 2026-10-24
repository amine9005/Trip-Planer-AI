import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import TripPlanModel from "@/db/models/TripPlan.model";

await getClient();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  // console.log("getting trips id ", id);
  try {
    // console.log("title ", title, "description: ", description);

    const trip = await TripPlanModel.findOne({ _id: id })
      .populate("hotels")
      .populate({ path: "itinerary", populate: { path: "activities" } });

    // console.log("trips ", trips);
    return NextResponse.json(
      { message: "Trip Retrieved Successfully", trip: trip },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Get Trip Internal Server Error", error },
      { status: 500 },
    );
  }
}
