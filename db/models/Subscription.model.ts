import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    plan: { type: String, required: true },
    period: { type: String, required: true },
    startDate: { type: Date, default: Date.now, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true },
);

const SubscriptionModel =
  mongoose.models.subscription ||
  mongoose.model("subscription", subscriptionSchema);
export default SubscriptionModel;
export type Subscription = InferSchemaType<typeof subscriptionSchema>;
export type SubscriptionDocument = HydratedDocument<Subscription>;

// import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";

// const subscriptionSchema = new mongoose.Schema(
//   {
//     stripeCustomerId: { type: String, required: true },
//     stripeSubscriptionId: { type: String, required: true },
//     referenceId: { type: String, required: true },
//     status: { type: String, required: true },
//     billingInterval: { type: String, required: true },
//     cancelAtPeriodEnd: { type: Boolean, required: true },
//     seats: { type: Number, required: true },
//     plan: { type: String, required: true },
//     periodStart: { type: Date, required: true },
//     periodEnd: { type: Date, required: true },
//     cancelAt: { type: Date, required: true, default: null },
//     canceledAt: { type: Date, required: true, default: null },
//   },
//   { timestamps: true },
// );

// const SubscriptionModel =
//   mongoose.models.subscription ||
//   mongoose.model("subscription", subscriptionSchema);
// export default SubscriptionModel;
// export type Subscription = InferSchemaType<typeof subscriptionSchema>;
// export type SubscriptionDocument = HydratedDocument<Subscription>;
