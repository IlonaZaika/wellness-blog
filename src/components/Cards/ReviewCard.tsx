import { useState } from "react";
import { ReviewCardProps } from "@/types/cardTypes";
import { Star } from "lucide-react";

function ReviewCard({ stars, text, date, company }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const MAX_CHAR = 40; // Maximum characters before truncating
  const isTextLong = text.length > MAX_CHAR;
  const displayedText = !isTextLong
    ? text
    : expanded
      ? text
      : `${text.slice(0, MAX_CHAR)}...`;

  return (
    <div className="bg-white p-6 rounded-lg w-full h-full flex flex-col items-center justify-center shadow-md">
      {/* Star Ratings */}
      <div className="flex gap-1 mb-3 justify-center">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
        ))}
      </div>

      {/* Review Text Container */}
      <div
        className={`flex-1 p-2 p-custom transition-all flex items-center text-center ${
          isTextLong ? "overflow-y-auto max-h-[150px]" : "items-center"
        }`}
      >
        {displayedText}
      </div>

      {/* Show More / Show Less Button */}
      {isTextLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="font-inter text-accent text-sm hover:underline"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}

      {/* Review Metadata */}
      <div className="mt-4 text-sm text-textGrey font-inter flex items-center gap-2 pb-4 justify-center">
        <span>{date}</span>
        <span className="w-px h-4 bg-textGrey"></span>
        <span className="text-textGrey">{company}</span>
      </div>
    </div>
  );
}

export default ReviewCard;
