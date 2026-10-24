import { P } from "@/components/ui/atoms/text/Text";
import { Loader2Icon } from "lucide-react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <Loader2Icon className="animate-spin size-10" />
        <P>Loading...</P>
      </div>
    </div>
  );
}
