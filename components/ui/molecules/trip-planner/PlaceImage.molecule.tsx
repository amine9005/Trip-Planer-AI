"use client";
import { useGetUnsplashImagesRetryOnFail } from "@/hooks/queries/useUnsplashImages.query";
import { BlurImageMolecule } from "../blur-image/BlurImage.molecule";
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

  const place_holder_image = "/travel-placeholder.jpg";
  const imgPath = imageSrc ? imageSrc : place_holder_image;

  return (
    <BlurImageMolecule
      loading="eager"
      className="rounded-xl object-cover w-full h-120 shadow pb-2"
      width={400}
      height={200}
      setFailedImage={setFailedImage}
      url={imgPath}

      alt={name}
      place_holder_image={place_holder_image}
      src={imgPath}
    />
  );
};

export default PlaceImageMolecule;
