import React from "react";
import Image from "next/image";

interface OfferItemCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
}

const OfferItemCard: React.FC<OfferItemCardProps> = ({
  title,
  imageUrl,
  imageAlt,
  description,
}) => {
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
};

export default OfferItemCard;
