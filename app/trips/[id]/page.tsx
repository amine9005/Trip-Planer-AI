import ViewTripAction from "@/components/ui/actions/trip-planner/ViewTrip.action";
import { authIsRequired } from "@/helpers/authHelper.helper";

const page = async () => {
  await authIsRequired();
  return <ViewTripAction />;
};

export default page;
