"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { CardProps } from "@/types/cardTypes";

const images: CardProps[] = [
  {
    id: "1",
    imageUrl: "/massage-therapy.jpg",
    imageAlt: "massage-therapy session",
  },
  {
    id: "2",
    imageUrl: "/nordic-walking.jpg",
    imageAlt: "nordic walking session",
  },
];

export default function ImageSwiper() {
  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: "",
          prevEl: "",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="overflow-hidden"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src={image.imageUrl || "/noimg.jpg"}
                alt={image.imageAlt || "Default Image"}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
