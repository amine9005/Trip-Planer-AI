import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";
import HotelModel from "./Hotel.model";
import ItineraryModel from "./Itinerary.model";
const tripPlanSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    destination: { type: String, required: true },
    duration: { type: String, required: true },
    origin: { type: String, required: true },
    budget: { type: String, required: true },
    travel_interests: { type: String, required: true },
    special_requirements: { type: String, required: true },
    group_size: { type: String, required: true },
    hotels: [{ type: mongoose.Schema.ObjectId, ref: HotelModel.modelName }],
    itinerary: [
      { type: mongoose.Schema.ObjectId, ref: ItineraryModel.modelName },
    ],
  },
  { timestamps: true },
);

const TripPlanModel =
  mongoose.models.tripPlan || mongoose.model("tripPlan", tripPlanSchema);

export default TripPlanModel;
export type TripPlan = InferSchemaType<typeof tripPlanSchema>;
export type TripPlanDocument = HydratedDocument<TripPlan>;
