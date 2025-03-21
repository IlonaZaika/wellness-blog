"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardProps } from "@/types/cardTypes";

interface CardsSwiperProps<T extends CardProps> {
  cards: T[];
  hasPreviewModal: boolean;
  renderCard: (card: T) => React.ReactNode;
}

export default function CardsSwiper<T extends CardProps>({
  cards,
  hasPreviewModal,
  renderCard,
}: CardsSwiperProps<T>) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div className="py-6 flex flex-col items-center w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={8}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          710: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{ clickable: true }}
        className="w-[80vw] relative pb-16"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div className="p-2 relative w-[300px] h-[250px] mx-auto mb-10 overflow-hidden transition-transform hover:scale-105">
              {renderCard(card)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox Modal */}
      {hasPreviewModal && previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-3xl max-h-6xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 hover:bg-opacity-80"
            >
              <X />
            </button>
            <Image
              src={previewImage}
              alt="Enlarged view"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
