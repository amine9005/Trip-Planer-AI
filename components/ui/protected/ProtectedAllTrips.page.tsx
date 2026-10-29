import AllTripsAction from "@/components/ui/actions/trip-planner/AllTrips.action";
import { authIsRequired } from "@/helpers/authHelper.helper";

const ProtectedAllTripsPage = async () => {
  await authIsRequired();

  return <AllTripsAction />;
};

export default ProtectedAllTripsPage;
