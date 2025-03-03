"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

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

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextSlide = () =>
    setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  const prevSlide = () =>
    setCurrent((prev) => (prev > 0 ? prev - 1 : images.length - 1));

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative mt-6 flex items-center w-[80vw] max-w-4xl">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        {/* Image Container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (300 + 16)}px)`,
              width: `${images.length * (300 + 16)}px`,
            }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-[300px] h-[300px] overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelectedImage(src)}
                animate={{
                  scale: hovered === index ? 1.1 : 1,
                  opacity: hovered === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="mt-4 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 hover:bg-opacity-80"
              >
                <X />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
