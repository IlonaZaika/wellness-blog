import { ServiceCardProps } from "@/types/cardTypes";
import Image from "next/image";
import ActionButton from "../ActionLink";

function ServiceCard({
  title,
  description,
  price,
  duration,
  imageUrl,
  imageAlt,
  callToAction,
}: ServiceCardProps) {
  return (
    <div className="w-[280px] md:w-[300px] bg-bgGreen rounded-2xl p-4 min-h-full flex flex-col justify-between ">
      {/* Title */}
      <h4 className="font-rokkit text-textGreen text-2xl text-center">
        {title}
      </h4>

      {/* Duration & Price */}
      <p className="font-rokkit font-light py-2 text-center">
        {duration} | ${price}
      </p>

      {/* Image */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={300}
        height={200}
        className="object-cover rounded-lg"
      />

      {/* Description */}
      <p className="py-6 text-textGrey font-inter font-light text-sm text-center flex-grow">
        {description}
      </p>
      {/* Call to Action Button */}
      <div className="flex justify-center">
        <ActionButton
          href="#"
          variant="secondary"
          label={callToAction}
          className="bg-white block rounded-2xl w-3/4 text-center "
        />
      </div>
    </div>
  );
}

export default ServiceCard;
