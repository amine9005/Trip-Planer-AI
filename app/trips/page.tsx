import AllTripsAction from "@/components/ui/actions/trip-planner/AllTrips.action";
import { authIsRequired } from "@/helpers/authHelper.helper";

const page = async () => {
  await authIsRequired();

  return <AllTripsAction />;
};

export default page;
