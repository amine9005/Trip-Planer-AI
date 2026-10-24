import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { Hotel } from "@/db/models/Hotel.model";
import { ExternalLink, Star, Wallet } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HotelCard = ({
  hotel,
  idx,
  imageSrc,
}: {
  hotel: Hotel;
  idx: number;
  imageSrc?: string;
}) => {
  return (
    <div
      key={idx}
      className="flex flex-col justify-between gap-1 h-120 max-h-120"
    >
      <Image
        src={imageSrc ? imageSrc : "/hotel-building-concept.jpg"}
        width={400}
        height={200}
        alt={"/hotel-building-concept.jpg"}
        className="rounded-xl object-cover w-full h-50 shadow pb-2"
      />
      <H2 className="font-semibold" size={"lg"}>
        {hotel.hotel_name}
      </H2>
      <P className="font-semibold " size={"default"} variant={"muted"}>
        {hotel.hotel_address}
      </P>
      <div className="flex justify-between w-full gap-4">
        <P className="flex flex-row gap-4" variant={"success"}>
          {" "}
          <Wallet className="size-6 " /> {hotel.price_per_night}
        </P>
        <P className="flex gap-2" variant={"warning"}>
          {" "}
          <Star className="fill-amber-400" /> {hotel.rating}{" "}
        </P>
      </div>
      <P className="line-clamp-2" variant={"default"}>
        {hotel.description}
      </P>
      <Link
        href={`https://www.google.com/maps/search/?api=1&query=${hotel.hotel_name}`}
        target="_"
        className={`mt-2 ${buttonVariants({
          variant: "secondary",
          width: "full",
        })}`}
      >
        View
        <ExternalLink className="size-5" />
      </Link>
    </div>
  );
};

export default HotelCard;
