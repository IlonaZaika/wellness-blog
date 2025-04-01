import React from "react";
import Image from "next/image";
import { OfferItemCardProps } from "@/types/cardTypes";

function OfferItemCard({
  title,
  imageUrl,
  imageAlt,
  description,
}: OfferItemCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
          alt={imageAlt}
        />
      </div>
      <div className="p-4 md:px-6 md:pb-6">
        <h4 className="h4-custom mt-4 font-medium text-textGrey text-center md:text-left">
          {title}
        </h4>
        <p className="p-custom mt-2 text-center md:text-left">{description}</p>
      </div>
    </div>
  );
}

export default OfferItemCard;
