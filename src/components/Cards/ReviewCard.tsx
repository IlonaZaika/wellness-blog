"use client";

import { useEffect, useRef, useState } from "react";
import { ReviewCardProps } from "@/types/cardTypes";
import { Star } from "lucide-react";

function ReviewCard({ stars, text, date, company }: ReviewCardProps) {
  const [maxHeight, setMaxHeight] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const updateHeight = () => {
        const allCards = document.querySelectorAll(".review-card");
        const heights = Array.from(allCards).map(
          (card) => card.getBoundingClientRect().height
        );
        setMaxHeight(Math.max(...heights));
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="review-card bg-white p-6 rounded-lg w-full flex flex-col justify-between shadow-md"
      style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
    >
      {/* Star Ratings */}
      <div className="flex gap-1 mb-2 justify-center">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
        ))}
      </div>

      {/* Review Text Container */}
      <div className="flex-1 p-custom flex items-center justify-center text-center">
        {text}
      </div>

      {/* Review Metadata */}
      <div className="mt-4 text-sm text-textGrey flex items-center gap-2 justify-center">
        <span>{date}</span>
        <span className="w-px h-4 text-textGreen border border-l-textGrey"></span>
        <span>{company}</span>
      </div>
    </div>
  );
}

export default ReviewCard;
