"use client";

import { useGetUnsplashImagesRetryOnFail } from "@/hooks/queries/useUnsplashImages.query";
import Image from "next/image";
interface Props {
  name: string;
  retry_count: number;
  failed_image_path: string;
}

const PlaceImageMolecule = ({
  name,
  retry_count,
  failed_image_path,
}: Props) => {
  const { imageSrc, setFailedImage } = useGetUnsplashImagesRetryOnFail(
    name,
    retry_count,
    failed_image_path,
  );

  return (
    <Image
      src={imageSrc ? imageSrc : failed_image_path}
      width={400}
      height={200}
      loading="eager"
      quality={75}
      onError={() => {
        setFailedImage(true);
      }}
      alt={name}
      className="rounded-xl object-cover w-full h-120 shadow pb-2"
    />
  );
};

export default PlaceImageMolecule;
