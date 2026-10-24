"use client";
import { Button } from "@/components/ui/atoms/button/button";

import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { ReactNode } from "react";
interface Props {
  alias: string | ReactNode;
  maxPage: number;
  minPage: number;
  setCount: (value: number) => void;
  count: number;
}

function SelectPageMolecule({
  count,
  alias,
  minPage,
  maxPage,
  setCount,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-between   my-2 p-0.5">
      <div className="flex w-full items-center justify-between gap-4  ">
        <Button
          className="rounded-full w-15"
          variant={"outline"}
          onClick={() => setCount(count > minPage ? count - 1 : minPage)}
        >
          <ArrowLeftToLine className="size-6 text-white" />
        </Button>

        <span className="text-2xl font-bold  text-center">{alias}</span>

        <Button
          className="rounded-full w-15"
          variant={"outline"}
          onClick={() => setCount(count < maxPage ? count + 1 : maxPage)}
        >
          <ArrowRightToLine className="size-6 text-white" />
        </Button>
      </div>
    </div>
  );
}

export default SelectPageMolecule;
