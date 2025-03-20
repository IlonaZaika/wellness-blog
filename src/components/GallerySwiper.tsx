"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/certificate1.jpg",
  "/certificate2.jpg",
  "/certificate3.jpg",
  "/certificate4.jpg",
  "/certificate5.jpg",
  "/certificate6.jpg",
  "/certificate7.jpg",
  "/certificate8.jpg",
  "/certificate9.jpg",
  "/certificate10.jpg",
  "/certificate11.jpg",
  "/certificate12.jpg",
];

export default function GallerySwiper() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Swiper Gallery */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{ clickable: true }}
        className="w-[80vw] max-w-4xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div
              className="relative w-[300px] h-[300px] mx-auto overflow-hidden transition-transform hover:scale-105"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Certificate ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4 mt-4">
        <button className="prev-btn p-2 bg-white rounded-full shadow-md hover:scale-110 transition">
          <ChevronLeft />
        </button>
        <button className="next-btn p-2 bg-white rounded-full shadow-md hover:scale-110 transition">
          <ChevronRight />
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 hover:bg-opacity-80"
            >
              <X />
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
