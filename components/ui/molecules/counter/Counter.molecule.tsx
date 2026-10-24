"use client";
import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/atoms/button/button";

interface Props {
  title: string;
  alias: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function CounterMolecule({ title, alias, count, setCount }: Props) {
  return (
    <div className="flex flex-col items-center mt-2 p-4">
      <h2 className="text-lg font-semibold mb-2">{title} </h2>

      <div className="flex items-center gap-4 p-4">
        <Button
          className="rounded-full w-11 h-11 p-4"
          onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
        >
          <MinusIcon className="size-6 text-white" />
        </Button>

        <span className="text-2xl font-bold  text-center">
          {count} {alias}
        </span>

        <Button
          className="rounded-full w-11 h-11 p-4"
          onClick={() => setCount((prev) => prev + 1)}
        >
          <PlusIcon className="size-6 text-white" />
        </Button>
      </div>
    </div>
  );
}

export default CounterMolecule;
