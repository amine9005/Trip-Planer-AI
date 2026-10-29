"use client";
import { ListChecks, Loader2Icon, MapIcon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";
import TripPlannerTimelineOrganism from "@/components/ui/organisms/timeline/trip planner/TripPlannerTimeline.organism";
import { useParams } from "next/navigation";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import GlobalMapOrganism from "@/components/ui/organisms/map/GlobalMap.organism";
import { useEffect, useState } from "react";
import SelectPageMolecule from "@/components/ui/molecules/select-page/SelectPage.molecule";
import { useAIMessagesStore } from "@/store/AI/messages.store";
import { useUserQuery } from "@/hooks/queries/useUser.query";
import { useGetTripByIdQuery } from "@/hooks/queries/useTripPlanner.query";

const ViewTripAction = () => {
  const { data: userData, isPending: isLoadingUserData } = useUserQuery();
  const params = useParams<{ id: string }>();
  // console.log("params ", params);

  const [smallScreen, setSmallScreen] = useState(true);
  const [loading, setLoading] = useState(true);
  const activeIndex = useAIMessagesStore((state) => state.switchView);
  const setActiveIndex = useAIMessagesStore((state) => state.setSwitchView);

  const switch_page_mobile = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div className="overflow-y-scroll">
            <TripPlannerTimelineOrganism tripPlan={data!} />
          </div>
        );
      case 1:
        return <GlobalMapOrganism />;
      default:
    }
  };

  const page_name_by_index = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div className="flex flex-row items-center gap-4">
            {" "}
            <ListChecks /> Itinerary{" "}
          </div>
        );
      case 1:
        return (
          <div className="flex flex-row items-center gap-4">
            {" "}
            <MapIcon /> Map{" "}
          </div>
        );
      default:
        return (
          <div className="flex flex-row items-center gap-4">
            {" "}
            <ListChecks /> Itinerary{" "}
          </div>
        );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // console.log("window size: ", window.innerWidth);

      if (window.innerWidth > 600) {
        setSmallScreen(false);
      } else {
        setSmallScreen(true);
        setActiveIndex(0);
      }
      setLoading(false);
    };
    handleResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { error, data, isPending } = useGetTripByIdQuery(params?.id);

  // console.log(
  //   "data ",
  //   JSON.stringify(data),
  //   " error ",
  //   error,
  //   "isLoadingUserData ",
  //   isLoadingUserData,
  //   " is Pending ",
  //   isPending,
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

  if ((!data && userData) || isLoadingUserData || isPending || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="justify-center flex-col flex items-center w-full h-[85vh] gap-5">
        <H2 variant={"error"}>
          Failed To Load Trip Data! Please Try Again Later.
        </H2>
      </div>
    );
  }

  if (smallScreen) {
    return (
      <div>
        <SelectPageMolecule
          minPage={0}
          maxPage={1}
          alias={page_name_by_index()}
          setCount={setActiveIndex}
          count={activeIndex}
        />

        {switch_page_mobile()}
      </div>
    );
    // Render ChatBoxAction on small screen
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 mt-2 md:mt-8">
      <div className="col-span-3 max-h-[85vh] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
        <TripPlannerTimelineOrganism tripPlan={data!} />
      </div>
      <div className="col-span-2 ">
        <GlobalMapOrganism tripData={data} />
      </div>
    </div>
  );
};

export default ViewTripAction;
