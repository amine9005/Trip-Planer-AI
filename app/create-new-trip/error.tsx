"use client";
import { Button } from "@/components/ui/atoms/button/button";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <H2 className="text-center" variant={"error"}>
        Something went wrong!
      </H2>
      <Button
        variant={"default"}
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </Button>
    </main>
  );
}
