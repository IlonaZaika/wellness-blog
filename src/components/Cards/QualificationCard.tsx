"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { QualificationCardProps } from "@/types/cardTypes";

function QualificationCard({
  imageSrc,
  imageAlt,
  id,
  setPreviewImage,
}: QualificationCardProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.div
      className="relative px-2 flex-shrink-0 w-[300px] h-[300px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
      animate={{
        scale: hovered === id ? 1.1 : 1,
        opacity: hovered === id ? 1 : 0.8,
      }}
      transition={{ duration: 0.3 }}
      onClick={() => setPreviewImage(imageSrc)}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={200}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}

export default QualificationCard;
