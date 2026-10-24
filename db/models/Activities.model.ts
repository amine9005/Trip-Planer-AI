import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";

// Define the schema for Place based on the provided structure
const activitiesSchema = new mongoose.Schema({
  place_name: { type: String, required: true },
  place_details: { type: String, required: true },
  place_image_url: { type: String, required: true },
  place_address: { type: String, required: true },
  geo_coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  ticket_pricing: { type: String, required: true },
  time_travel_each_location: { type: String, required: true },
  best_time_to_visit: { type: String, required: true },
});

// Export the MongoDB model for Activities
const ActivitiesModel =
  mongoose.models.activities || mongoose.model("activities", activitiesSchema);

export default ActivitiesModel;
export type Activities = InferSchemaType<typeof activitiesSchema>;
export type PlaceDocument = HydratedDocument<Activities>;
