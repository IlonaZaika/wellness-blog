import Image from "next/image";
import { CardProps } from "@/types/cardTypes";

function ImageCard({ imageUrl, imageAlt }: CardProps) {
  return (
    <Image
      src={imageUrl || "/noimg.jpg"}
      alt={imageAlt || "Default Image"}
      width={400}
      height={400}
      className="object-cover"
    />
  );
}

export default ImageCard;
