"use client";
import { cn } from "cn";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ExtendedImageProps {
  url?: string | null;
  extended_quality?: number;
  setFailedImage?: (value: boolean) => void;
  place_holder_image?: string;
}

export const BlurImageMolecule = ({
  height,
  width,
  src,
  quality = 75,
  className,
  alt,
  url,
  extended_quality,
  place_holder_image,
  setFailedImage,
  loading = "lazy",
  ...rest
}: ImageProps & ExtendedImageProps) => {
  const [isLoading, setLoading] = useState(true);

  const imageLoader = ({
    src,
    width,
    quality,
    height,
  }: {
    src?: string | null;
    width?: number | `${number}`;
    quality?: number | `${number}`;
    height?: number | `${number}`;
  }) => {
    if (!url) {
      return src as string;
    }
    return url as string;
  };

  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      onError={() => {
        if (setFailedImage) {
          setFailedImage(true);
        }
      }}
      src={src as string}
      width={width}
      loader={() =>
        imageLoader({ src: url, width, height, quality: extended_quality })
      }
      height={height}
      quality={quality}
      loading={loading}
      decoding="async"
      blurDataURL={typeof src === "string" ? src : place_holder_image}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
