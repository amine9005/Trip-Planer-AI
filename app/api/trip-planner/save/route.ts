import ActivitiesModel, { Activities } from "@/db/models/Activities.model";
import HotelModel, { Hotel } from "@/db/models/Hotel.model";
import ItineraryModel from "@/db/models/Itinerary.model";
import TripPlanModel from "@/db/models/TripPlan.model";
import { ItineraryType } from "@/types/create-trip.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      userId,
      destination,
      duration,
      origin,
      budget,
      travel_interests,
      special_requirements,
      group_size,
      hotels,
      itinerary,
    } = await req.json();

    // const hotelsDoc = await saveArrayToMongoDB({
    //   collection: hotels,
    //   db_name: "hotel",
    //   mongoDbModel: HotelModel,
    // });
    // console.log("Hotels ", hotels);

    // console.log("Hotels ", hotels);
    const hotelsDoc = await Promise.all(
      hotels.map(async (item: Hotel) => {
        const hotel = await HotelModel.create({
          ...item,
        });
        return hotel._id;
      }),
    );

    const itinerariesDoc = await Promise.all(
      itinerary.map(async (item: ItineraryType) => {
        const activitiesArray = item.activities;

        const activitiesDoc = await Promise.all(
          activitiesArray.map(async (act: Activities) => {
            const actResp = await ActivitiesModel.create({
              ...act,
            });
            return actResp._id;
          }),
        ).catch((e) => {
          console.log(e);
          return NextResponse.json(
            { message: "Failed to create activity in DB", error: e },
            { status: 500 },
          );
        });

        // console.log("activities doc ", activitiesDoc);

        const model = await ItineraryModel.create({
          ...item,
          activities: activitiesDoc,
        });
        return model._id;
      }),
    );

    const tripPlan = await TripPlanModel.create({
      userId,
      destination,
      duration,
      origin,
      budget,
      travel_interests,
      special_requirements,
      group_size,
      hotels: hotelsDoc,
      itinerary: itinerariesDoc,
    });

    console.log("Trip Plan: ", tripPlan);

    return NextResponse.json(
      {
        message: "Trip Plan Created Successfully ",
        data: tripPlan,
      },
      { status: 201 },
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Failed to  create trip plan ", e },
      { status: 500 },
    );
  }
}
