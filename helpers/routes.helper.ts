export const BASE_URL = process.env.BETTER_AUTH_URL;
// console.log("BASE_URL: ", BASE_URL);

export const apiPaths = {
  SUBSCRIPTION_ROUTES: {
    GET: {
      SUBSCRIPTION_BY_ID: "api/subscriptions/",
    },
    POST: {
      UPDATE: "/api/subscriptions/update",
      PORTAL: "/api/subscriptions/portal",
      RESTORE: "/api/subscriptions/restore",
      CANCEL: "/api/subscriptions/restore",
    },
  },

  USER: {
    POST: {
      UPDATE_DATA: "/api/user/update",
    },
  },
  TRIPS_ROUTES: {
    GET: {
      ALL_TRIPS: "/api/trip-planner/trips/",
      TRIP_BY_ID: "/api/trip-planner/trips/get/",
    },
    POST: {
      CREATE_TRIP: "api/trip-planner/save",
    },
  },
  IMAGES_ROUTES: {
    POST: {
      UNSPLASH: "/api/trip-planner/unsplash-photos",
    },
  },

  AI_ROUTES: {
    POST: {
      GOOGLE: "/api/ai-model/google",
    },
  },

  PLACES_DETAILS_ROUTES: {
    POST: {
      GOOGLE: "/api/trip-planner/google/place-details",
    },
  },
};
