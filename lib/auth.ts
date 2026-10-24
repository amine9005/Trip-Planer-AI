"use server";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { bearer } from "better-auth/plugins";
import { stripe } from "@better-auth/stripe";
import Stripe from "stripe";
import { getClient } from "@/db/mongoose";
// import mongoose from "mongoose";
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var _auth: any | null;
}

let cached = global._auth;

const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export async function getAuth() {
  const db = await getClient();

  if (!cached) {
    console.log("creating new auth instance");
    cached = betterAuth({
      database: mongodbAdapter(db),
      emailAndPassword: {
        enabled: true,
      },
      user: {
        additionalFields: {
          limit: {
            type: "number",
            required: true,
            defaultValue: 10,
            input: false, // allow user to set role - false with hide this field,
          },
        },
      },

      plugins: [
        nextCookies(),
        stripe({
          stripeClient,
          stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
          createCustomerOnSignUp: true,
          subscription: {
            enabled: true,
            authorizeReference: async ({ user, referenceId, action }) => {
              // Check if the user has permission to manage subscriptions for this reference
              if (
                action === "upgrade-subscription" ||
                action === "cancel-subscription" ||
                action === "restore-subscription"
              ) {
                return user.id === referenceId;
              }
              return true;
            },
            plans: [
              {
                name: "free", // the name of the plan, it'll be automatically lower cased when stored in the database
                priceId: "price_1UMcaeCLEGaxLDrwAQEBbjdj", // the price ID from stripe
                limits: {
                  limit: 10,
                },
              },
              {
                name: "premium",
                priceId: "price_1UMaarCLEGaxLDrwLtOiHjsX",
                annualDiscountPriceId: "price_1UMafRCLEGaxLDrwbLp0VLOp", // (optional) the price ID for annual billing with a discount
                limits: {
                  limit: 10000,
                },
              },
              {
                name: "yearly",
                priceId: "price_1UMafRCLEGaxLDrwbLp0VLOp",
                annualDiscountPriceId: "price_1UMafRCLEGaxLDrwbLp0VLOp", // (optional) the price ID for annual billing with a discount
                limits: {
                  limit: 10000,
                },
              },
            ],
          },
        }),
      ],
    });
  }
  console.log("returning cached auth");
  return cached;
}
