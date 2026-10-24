import { H2 } from "@/components/ui/atoms/heading/heading2";
import { SelectByIconType } from "@/types/create-trip.types";
import Link from "next/link";
import { P } from "@/components/ui/atoms/text/Text";

const SelectByIconOrganism = ({
  items,
  onSend,
}: {
  items: SelectByIconType[];
  onSend: ({ message }: { message: string }) => void;
}) => {
  return (
    <div className="flex sm:grid sm:grid-cols-2 justify-center items-center mt-4 gap-2 ">
      {items.map((Item, index) => (
        <Link
          key={index}
          className="flex h-45 flex-col bg-secondary p-3 border-2 hover:scale-90 transition-all duration-300 rounded-2xl hover:border-primary cursor-pointer gap-2 justify-center items-center"
          href={"/create-new-trip"}
          onClick={() => onSend({ message: Item.prompt })}
        >
          <div
            className={`rounded-full flex justify-center items-center p-2 ${Item?.color}`}
          >
            <H2>{Item.icon}</H2>
          </div>
          <H2 size={"md"} variant={"default"}>
            {Item.title}
          </H2>
          <P className="text-center" variant={"default"} size={"sm"}>
            {Item.desc}
          </P>
        </Link>
      ))}
    </div>
  );
};

export default SelectByIconOrganism;
