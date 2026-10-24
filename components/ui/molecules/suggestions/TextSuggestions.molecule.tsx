"use client";
import { P } from "@/components/ui/atoms/text/Text";
import { SuggestionsType } from "@/types/create-trip.types";
import { DisplayType } from "@/types/general.types";
import Link from "next/link";

const TextSuggestionsMolecule = ({
  suggestions,
  display,
  onSend,
}: SuggestionsType & DisplayType) => {
  return (
    <Link
      href={"/create-new-trip"}
      className={`w-full   ${display === "horizontal" ? "items-center" : "w-full "}`}
    >
      <div
        className={`flex  mt-1 md:mt-4 gap-4  ${display === "horizontal" ? "flex-row mx-auto w-10/12 md:w-full items-center justify-between" : "flex-col w-11/12"}`}
      >
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="flex items-start  gap-2 border rounded-full p-2.5 cursor-pointer hover:bg-primary/25 hover:scale-105 transition-transform duration-200"
            onClick={() => onSend({ message: item.title })}
          >
            {item.icon}
            {display === "horizontal" ? (
              <P className="text-sm hidden md:flex">{item.title}</P>
            ) : (
              <P className="text-sm">{item.title}</P>
            )}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default TextSuggestionsMolecule;
