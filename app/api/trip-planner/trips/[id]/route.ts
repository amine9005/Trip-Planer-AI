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

    const trips = await TripPlanModel.find({ userId: id })
      .populate("hotels")
      .populate({ path: "itinerary", populate: { path: "activities" } });

    // console.log("trips ", trips);
    return NextResponse.json(
      { message: "Trips Retrieved Successfully", trips: trips },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Get Trips Internal Server Error", error },
      { status: 500 },
    );
  }
}
