import { BlurFade } from "@/components/ui/Effects/blur-fade";
import Hero1Organism from "@/components/ui/organisms/heroes/Hero1.organism";
import { PopularCityListOrganism } from "@/components/ui/organisms/popular-city-list/PopularCityList.organism";

export default async function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Hero1Organism />
      <BlurFade delay={0.2} onlyOnce={false} inView>
        <PopularCityListOrganism />
      </BlurFade>
    </main>
  );
}
