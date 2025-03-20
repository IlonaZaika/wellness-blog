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
    <div className="bg-bgBase rounded-lg overflow-hidden">
      <div className="relative w-full h-56">
        <Image src={imageUrl} fill className="object-cover" alt={imageAlt} />
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
