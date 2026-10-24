import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";

// Define the schema for Hotel based on the provided structure
const hotelSchema = new mongoose.Schema({
  hotel_name: { type: String, required: true },
  hotel_address: { type: String, required: true },
  price_per_night: { type: String, required: true },
  hotel_image_url: { type: String, required: true },
  geo_coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
});

// Export the MongoDB model for Hotel
const HotelModel =
  mongoose.models.hotel || mongoose.model("hotel", hotelSchema);

export default HotelModel;
export type Hotel = InferSchemaType<typeof hotelSchema>;
export type HotelDocument = HydratedDocument<Hotel>;
