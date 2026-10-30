"use client";
import { P } from "@/components/ui/atoms/text/Text";
import { Loader2Icon } from "lucide-react";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import GetStartedButtonMolecule from "@/components/ui/molecules/get-started-button/GetStartedButton.molecule";
import { useUserQuery } from "@/hooks/queries/useUser.query";
import { useTripsQuery } from "@/hooks/queries/useTripPlanner.query";
import TripCardAction from "@/components/ui/actions/cards/TripCard.action";

const AllTripsAction = () => {
  const { data: userData } = useUserQuery();
  const { error, data } = useTripsQuery(userData?.user.id);

  // console.log(
  //   "data ",
  //   JSON.stringify(data) + " isPending " + isPending + " error " + error,
  //   "userId ",
  //   userData?.user.id,
  // );

  // if (!userData) {
  //   redirect("/sign-in");
  // }

  if (error) {
    console.log("userDataError  ", error);
    return (
      <div className="flex justify-center items-center h-screen p-16">
        <P size={"xl"} variant={"error"}>
          {
            "Failed To Load Your Trips Information. Check Your Internet Connection And Try Again."
          }
        </P>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="justify-center flex-col flex items-center w-full h-[85vh] gap-5">
        <H2>Looks Like You Have No Trips!</H2>
        <GetStartedButtonMolecule />
      </div>
    );
  }

  return (
    <div className="relative  flex mx-auto justify-center items-center w-full ">
      <div className="relative  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5  gap-8 mt-10 max-w-7xl">
        {data.map((item, idx) => {
          return (
            <BlurFade onlyOnce={false} key={idx} delay={0.3 + idx * 0.1} inView>
              <TripCardAction key={idx} trip={item} />
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
};

export default AllTripsAction;
