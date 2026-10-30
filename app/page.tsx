import Hero1Organism from "@/components/ui/organisms/heroes/Hero1.organism";
import { PopularCityListOrganism } from "@/components/ui/organisms/popular-city-list/PopularCityList.organism";

export default async function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Hero1Organism />
      <PopularCityListOrganism />
    </main>
  );
}
