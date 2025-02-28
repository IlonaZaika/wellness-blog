import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className="bg-bgBase shadow-md rounded-lg overflow-hidden">
      <div className="relative w-full h-56">
        <Image src={imageUrl} fill className="object-cover" alt={title} />
      </div>
      <div className="px-4 py-3">
        <h4 className="h4-custom mt-4">{title}</h4>
        <p className="p-custom mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
