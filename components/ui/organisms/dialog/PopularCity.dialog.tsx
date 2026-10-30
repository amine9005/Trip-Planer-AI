import { ImageStackCarousel } from "@/components/ui/Effects/ImageStackCarousel";
import { CityList } from "@/types/create-trip.types";
import { motion } from "motion/react";
import PlaceImageMolecule from "@/components/ui/molecules/trip-planner/PlaceImage.molecule";
import CreateNewTripMolecule from "@/components/ui/molecules/create-new-trip/CreateNewTrip.molecule";
import { BlurFade } from "../../Effects/blur-fade";
import { P } from "../../atoms/text/Text";

const PopularCityDialog = ({ data }: { data: CityList }) => {
  const placesStack = data.places.map((name, idx) => {
    return {
      node: (
        <PlaceImageMolecule
          key={idx}
          name={name}
          retry_count={1}
          failed_image_path="/travel-placeholder.jpg"
        />
      ),
    };
  });

  return (
    <div className="w-full grid grid-cols-1 gap-20">
      <BlurFade delay={0.1}>
        <ImageStackCarousel stack={placesStack} />
      </BlurFade>
      <div className="flex w-full flex-col justify-between py-4">
        <div>
          <BlurFade delay={0.1} inView>
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {data.title}
            </h3>
          </BlurFade>
          {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
              Project Sub Title
            </p> */}
          <P className="mt-4 text-lg text-gray-500 dark:text-neutral-300">
            {data.description.split(" ").map((word: string, index: number) => (
              <BlurFade
                key={index}
                inView
                delay={0.2 + index * 0.02}
                className="inline-block"
              >
                {word}&nbsp;
              </BlurFade>
            ))}
          </P>
          <BlurFade delay={0.3} inView>
            <CreateNewTripMolecule destination={data.title} />
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default PopularCityDialog;
