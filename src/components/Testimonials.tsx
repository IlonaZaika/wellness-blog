"use client";
import ReviewCard from "./Cards/ReviewCard";

import CardsSwiper from "./CardsSwiper";
import { ReviewCardProps } from "@/types/cardTypes";

const reviewCards: ReviewCardProps[] = [
  {
    id: "1",
    stars: 5,
    text: "The massage therapy sessions have truly changed my life. I feel more relaxed and rejuvenated than ever before!",
    date: "2024-03-20",
    company: "Company A",
  },
  {
    id: "2",
    stars: 4,
    text: "Good",
    date: "2024-03-18",
    company: "Company B",
  },
  {
    id: "3",
    stars: 5,
    text: "The massage therapy sessions have truly changed my life. I feel more relaxed and rejuvenated than ever before!I feel more relaxed and rejuvenated than ever before!I feel more relaxed and rejuvenated than ever before!",
    date: "2024-03-20",
    company: "Company A",
  },
  {
    id: "4",
    stars: 4,
    text: "Good",
    date: "2024-03-18",
    company: "Company B",
  },
  {
    id: "5",
    stars: 5,
    text: "Great!",
    date: "2024-03-20",
    company: "Company A",
  },
  {
    id: "6",
    stars: 4,
    text: "Good",
    date: "2024-03-18",
    company: "Company B",
  },
  {
    id: "7",
    stars: 5,
    text: "Great!",
    date: "2024-03-20",
    company: "Company A",
  },
  {
    id: "8",
    stars: 4,
    text: "Good",
    date: "2024-03-18",
    company: "Company B",
  },
  {
    id: "9",
    stars: 5,
    text: "Great!",
    date: "2024-03-20",
    company: "Company A",
  },
  {
    id: "10",
    stars: 4,
    text: "Good",
    date: "2024-03-18",
    company: "Company B",
  },
];

export default function Testimonials() {
  return (
    <CardsSwiper<ReviewCardProps>
      cards={reviewCards}
      hasPreviewModal={false}
      renderCard={(card) => <ReviewCard {...card} />}
    />
  );
}
