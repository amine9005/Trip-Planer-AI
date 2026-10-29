"use effect";
import { useUserQuery } from "@/hooks/queries/useUser.query";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessage.submit";

const CreateNewTripMolecule = ({ destination }: { destination: string }) => {
  const { data: user } = useUserQuery();
  const { onSend } = useAiSendMessageHook();

  const link = user ? "/create-new-trip" : "/sign-in";
  const text = user ? "New Trip To " + destination : "Get Started";
  return (
    <Link href={link}>
      <span
        className={
          buttonVariants({
            variant: "default",
            size: "sm",
          }) + " min-w-60 mt-4"
        }
        onClick={() => onSend({ message: "Trip To " + destination })}
      >
        {text}
      </span>
    </Link>
  );
};

export default CreateNewTripMolecule;
