import CreateNewTripPage from "@/components/ui/pages/CreateNewTrip.page";
import { authIsRequired } from "@/helpers/authHelper.helper";

const page = async () => {
  await authIsRequired();
  return <CreateNewTripPage />;
};

export default page;
