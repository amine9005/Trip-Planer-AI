import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { ArrowDown } from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/atoms/hero-video-dialog/hero-video-dialog";

import SuggestionsAction from "@/components/ui/actions/trip-planner/Suggestions.action";
import SendMessageHeroMolecule from "@/components/ui/molecules/send-message-hero/SendMessageHero.molecule";
import { BlurFade } from "@/components/ui/Effects/blur-fade";

const Hero1Organism = () => {
  return (
    <div className="mt-10 md:mt-21 w-full flex flex-col items-center space-y-6 max-w-5xl">
      {/* Content */}
      <BlurFade delay={0.1} onlyOnce={false} inView>
        <div className="space-y-6 flex flex-col justify-center items-center w-full">
          <H2 className="text-2xl md:text-5xl font-bold text-center">
            {" "}
            Hey, I&apos;m Your Personal{" "}
            <div className="text-primary">{"\n"}Trip Planner</div>
          </H2>
          <P className="text-md md:text-xl max-md:text-center  md:mt-8">
            Tell Me What You Want And I Will Handle The Rest: Flights , Hotels,
            trip plan - all in seconds
          </P>
        </div>
      </BlurFade>
      {/* Input Box */}
      <BlurFade delay={0.2} className="w-full h-full" onlyOnce={false} inView>
        <SendMessageHeroMolecule />
      </BlurFade>
      {/* Suggestions List */}
      <SuggestionsAction display={"horizontal"} />
      <BlurFade delay={0.7} onlyOnce={false} inView>
        <H2 className="mt-8 md:my-7 md:mt-14 gap-2 flex flex-col md:flex-row justify-center items-center">
          Not Sure What To Do ?{" "}
          <strong className="flex">
            Watch This <ArrowDown className="ml-5 size-9 text-bold" />
          </strong>
        </H2>
      </BlurFade>

      {/* Video Section */}
      <BlurFade delay={0.1} onlyOnce={false} inView>
        <div className="md:mt-12 border border-gray-400 p-1 md:p-4 lg:p-6 rounded-xl">
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc=""
            thumbnailSrc="/Hero-Thumbnail.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </BlurFade>
    </div>
  );
};

export default Hero1Organism;
