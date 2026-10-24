import { GlobeIcon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";
import { H2 } from "@/components/ui/atoms/heading/heading2";

interface Props {
  title: string | React.ReactNode;
  desc: string;
}

const ProcessingResultsMolecule = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center my-2 bg-secondary rounded-lg">
      <GlobeIcon className="text-primary text-4xl animate-bounce" />
      <H2 className="mt-3 font-semibold" size={"lg"} variant={"primary"}>
        {title}
      </H2>
      <P className="mt-1 text-center text-white" variant={"secondary"}>
        {desc}
      </P>
    </div>
  );
};

export default ProcessingResultsMolecule;
