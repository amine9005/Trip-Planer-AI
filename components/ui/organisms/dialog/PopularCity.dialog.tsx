import { ImageStackCarousel } from "@/components/ui/Effects/ImageStackCarousel";
import { CityList } from "@/types/create-trip.types";
import { motion } from "motion/react";
import PlaceImageMolecule from "@/components/ui/molecules/trip-planner/PlaceImage.molecule";
import CreateNewTripMolecule from "@/components/ui/molecules/create-new-trip/CreateNewTrip.molecule";

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
      <ImageStackCarousel stack={placesStack} />
      <div className="flex w-full flex-col justify-between py-4">
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -20,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <h3 className="text-2xl font-bold text-black dark:text-white">
            {data.title}
          </h3>
          {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
              Project Sub Title
            </p> */}
          <motion.p className="mt-4 text-lg text-gray-500 dark:text-neutral-300">
            {data.description.split(" ").map((word: string, index: number) => (
              <motion.span
                key={index}
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: 0.02 * index,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
          <CreateNewTripMolecule destination={data.title} />
        </motion.div>
      </div>
    </div>
  );
};

export default PopularCityDialog;
