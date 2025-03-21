"use client";
import { qualificationImages } from "@/constants/qualifications";
import CardsSwiper from "./CardsSwiper";
import { QualificationCardProps } from "@/types/cardTypes";
import { QualificationCard } from "./Cards";

export default function Testimonials() {
  return (
    <CardsSwiper<QualificationCardProps>
      cards={qualificationImages}
      hasPreviewModal={true}
      renderCard={(card) => <QualificationCard {...card} />}
    />
  );
}
