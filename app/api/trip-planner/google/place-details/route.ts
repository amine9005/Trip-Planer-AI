import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { placeName } = await req.json();
    const BASE_URL = "https://places.googleapis.com/v1/places:searchText";
    const config = {
      headers: {
        "content-type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
        "X-Goog-FieldMask": [
          "places.displayName",
          "places.photos",
          "places.id",
        ],
      },
    };

    const result = await axios.post(BASE_URL, { textQuery: placeName }, config);

    return NextResponse.json(
      {
        message: "Data Fetched successfully From Google Maps ",
        data: result.data,
      },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Failed to fetch place data from google ", e },
      { status: 500 },
    );
  }
}
