"use client";
import {
  Carousel,
  Card,
} from "@/components/ui/organisms/carousels/apple-cards-carousel";
import { PopularCityListData } from "@/components/ui/constants/trip-planner/TripPlanner.constants";
import PopularCityDialog from "@/components/ui/organisms/dialog/PopularCity.dialog";

export function PopularCityListOrganism() {
  const data = PopularCityListData.map((item) => ({
    category: item.title,
    title: item.shortDescription,
    src: item.thumbnail,
    content: <PopularCityDialog data={item} />,
  }));

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full max-w-7xl h-full pt-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destinations To Visit
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
