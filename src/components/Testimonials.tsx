"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The massage therapy sessions have truly changed my life. I feel more relaxed and rejuvenated than ever before!",
    date: "May 17, 2023",
    company: "Webflow",
  },
  {
    id: 2,
    text: "The massage therapy sessions have truly changed my life. I feel more relaxed and rejuvenated than ever before!",
    date: "May 17, 2023",
    company: "Webflow",
  },
  {
    id: 3,
    text: "The massage therapy sessions have truly changed my life. I feel more relaxed and rejuvenated than ever before!",
    date: "May 17, 2023",
    company: "Webflow",
  },
  {
    id: 4,
    text: "The massage therapy sessions have truly changed my life. I feel more relaxed and rejuvenated than ever before!",
    date: "May 17, 2023",
    company: "Webflow",
  },
  {
    id: 5,
    text: "The massage therapy sessions have truly changed my life. I feel more relaxed and rejuvenated than ever before!",
    date: "May 17, 2023",
    company: "Webflow",
  },
  {
    id: 6,
    text: "The massage therapy sessions have truly changed my life. I feel more relaxed and rejuvenated than ever before!",
    date: "May 17, 2023",
    company: "Webflow",
  },
  {
    id: 7,
    text: "The massage therapy sessions have truly changed my life. I feel more relaxed and rejuvenated than ever before!",
    date: "May 17, 2023",
    company: "Webflow",
  },
];

export default function Testimonials() {
  return (
    <div className="p-10 text-center relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full"
        id="prevBtn"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full"
        id="nextBtn"
      >
        <ChevronRight size={24} />
      </button>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        navigation={{ nextEl: "#nextBtn", prevEl: "#prevBtn" }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="p-8"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="bg-white p-6 rounded-lg text-center flex flex-col items-center justify-center"
          >
            <div className="flex gap-1 mb-3 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
            <p className="p-custom text-center">{testimonial.text}</p>
            <div className="mt-4 text-sm text-textGrey font-inter flex items-center gap-2 pb-6 justify-center">
              <span>{testimonial.date}</span>
              <span className="w-px h-6 bg-textGrey"></span>
              <span className="font-medium text-textGrey">
                {testimonial.company}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
