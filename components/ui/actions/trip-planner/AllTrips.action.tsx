"use client";
import { P } from "@/components/ui/atoms/text/Text";
import { Loader2Icon } from "lucide-react";
import TripCard from "@/components/ui/organisms/cards/trip-planner/Trip.card";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import GetStartedButtonMolecule from "@/components/ui/molecules/get-started-button/GetStartedButton.molecule";
import { useUserQuery } from "@/hooks/queries/useUser.query";
import { useTripsQuery } from "@/hooks/queries/useTripPlanner.query";

const AllTripsAction = () => {
  const { data: userData, isPending: isLoadingUserData } = useUserQuery();
  const { error, data, isPending } = useTripsQuery(userData?.user.id);

  // console.log(
  //   "data ",
  //   JSON.stringify(data) + " isPending " + isPending + " error " + error,
  //   "userId ",
  //   userData?.user.id,
  // );

  if (error) {
    console.log("userDataError  ", error);
    return (
      <div className="flex justify-center items-center h-screen p-16">
        <P size={"xl"} variant={"error"}>
          {"Failed To Load Pricing Information."}
        </P>
      </div>
    );
  }

  if ((!data && userData) || isLoadingUserData || isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="justify-center flex-col flex items-center w-full h-[85vh] gap-5">
        <H2>Looks Like You Have No Trips!</H2>
        <GetStartedButtonMolecule />
      </div>
    );
  }

  return (
    <div className="relative flex mx-auto justify-center items-center w-full ">
      <div className="relative grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-8 mt-10 max-w-7xl">
        {data &&
          data.map(async (item, idx) => {
            return (
              <BlurFade
                onlyOnce={false}
                key={idx}
                delay={0.3 + idx * 0.1}
                inView
              >
                <TripCard
                  key={idx}
                  trip={item}
                  // imageSrc2={
                  //   item.itinerary[1].activities[0].place_image_url
                  //     ? item.itinerary[1].activities[0].place_image_url
                  //     : undefined
                  // }
                />
              </BlurFade>
            );
          })}
      </div>
    </div>
  );
};

export default AllTripsAction;
