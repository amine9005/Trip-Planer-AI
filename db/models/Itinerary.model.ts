import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";
import ActivitiesModel from "./Activities.model";

// Define the schema for Itinerary based on the provided structure
const itinerarySchema = new mongoose.Schema({
  day: { type: String, required: true },
  day_plan: { type: String, required: true },
  best_time_to_visit_day: { type: String, required: true },
  activities: [
    { type: mongoose.Schema.ObjectId, ref: ActivitiesModel.modelName },
  ],
});

// Export the MongoDB model for Itinerary
const ItineraryModel =
  mongoose.models.itinerary || mongoose.model("itinerary", itinerarySchema);

export default ItineraryModel;
export type Itinerary = InferSchemaType<typeof itinerarySchema>;
export type ItineraryDocument = HydratedDocument<Itinerary>;
