"use client";
import { useGetRandomPlaceHolderImageQuery } from "@/hooks/queries/useTripPlanner.query";
import Image from "next/image";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { Loader2Icon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";

const TripPlaceHolderImageAction = () => {
  const {
    data: placeImage,
    isLoading,
    error,
  } = useGetRandomPlaceHolderImageQuery("travel");

  console.log("data: ", placeImage);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[85vh] w-full col-span-1 lg:col-span-2 gap-2">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }

  if (error) {
    console.log("error ", error);
    return (
      <div className="flex justify-center items-center h-[85vh] w-full col-span-1 lg:col-span-2 gap-2">
        <div className="relative">
          <Image
            src={"/Nature-Image.jpg"}
            alt="/Nature-Image.jpg"
            width={1080}
            height={720}
            className="rounded-2xl object-cover w-3xl h-2/3 border-none"
          />
          <H2 className=" absolute top-8 left-8 " size="3xl">
            Start Chatting To Create A New Trip...{" "}
          </H2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[85vh] w-full col-span-1 lg:col-span-2 gap-2">
      <div className="relative">
        <Image
          src={placeImage}
          alt={"/Nature-Image.jpg"}
          width={1080}
          height={720}
          className="rounded-2xl object-cover w-60 md:w-100 lg:w-3xl h-2/3 border-none"
        />
        <H2 className=" absolute top-8 left-8 " size="3xl">
          Start Chatting To Create A New Trip...{" "}
        </H2>
      </div>
    </div>
  );
};

export default TripPlaceHolderImageAction;
