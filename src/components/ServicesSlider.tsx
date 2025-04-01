"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./Cards/ServiceCard";

// Define the structure of a service
interface Service {
  name: string;
  price: number;
  duration: string;
  description: string;
}

// Define the services object with proper typing
const services: Record<string, Service[]> = {
  Relaxation: [
    {
      name: "Swedish Massage",
      price: 100,
      duration: "60 min",
      description:
        " Unwind with soothing massage techniques that melt away stress, improve sleep, and restore your energy",
    },
    {
      name: "Thai Massage",
      price: 100,
      duration: "60 min",
      description: "Combines yoga, acupressure...",
    },
    {
      name: "Swedish Massagess",
      price: 100,
      duration: "60 min",
      description: "A classic massage...",
    },
    {
      name: "Thai Massages",
      price: 100,
      duration: "60 min",
      description: "Combines yoga, acupressure...",
    },
    {
      name: "Swedish Massage11",
      price: 100,
      duration: "60 min",
      description: "A classic massage...",
    },
    {
      name: "Thai Massage22",
      price: 100,
      duration: "60 min",
      description: "Combines yoga, acupressure...",
    },
    {
      name: "Swedish Massage1",
      price: 100,
      duration: "60 min",
      description: "A classic massage...",
    },
    {
      name: "Thai Massage2",
      price: 100,
      duration: "60 min",
      description: "Combines yoga, acupressure...",
    },
  ],
  "Facial Care": [
    {
      name: "Classic Facial1",
      price: 80,
      duration: "45 min",
      description: "A rejuvenating facial...",
    },
  ],
  Therapeutic: [
    {
      name: "Classic Facial",
      price: 80,
      duration: "45 min",
      description: "A rejuvenating facial...",
    },
  ],
  Mobility: [
    {
      name: "Classic Facial",
      price: 80,
      duration: "45 min",
      description: "A rejuvenating facial...",
    },
  ],
  "Group Trainings": [
    {
      name: "Classic Facial",
      price: 80,
      duration: "45 min",
      description: "A rejuvenating facial...",
    },
  ],
};

const ServicesSlider = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof services>("Relaxation");
  const sliderRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && categoryFromUrl in services) {
      setActiveTab(categoryFromUrl as keyof typeof services);
    }
  }, [searchParams]);

  const scrollAmount = 500; // Adjusted for larger images
  const scrollLeft = () =>
    sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  const scrollRight = () =>
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });

  return (
    <div className="relative">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-2 text-lg">
        {Object.keys(services).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-3 py-2 text-textGreen font-light font-heading text-lg outline-none ${
              activeTab === category ? "bg-bgGreen rounded-xl" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Scroll Buttons */}
      <div className="hidden md:flex justify-end md:absolute top-0 right-0 space-x-2 mt-0">
        <button
          onClick={scrollLeft}
          className="bg-white p-3 mx-2 rounded-full shadow-md z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollRight}
          className="bg-white p-3 rounded-full shadow-md z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      {/* Services List */}
      <div className="overflow-hidden py-4">
        <div
          ref={sliderRef}
          className="flex space-x-3 md:space-x-6 overflow-x-auto scroll-smooth"
        >
          {services[activeTab]?.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl flex-shrink-0 relative group"
            >
              <ServiceCard
                title={service.name}
                imageUrl="/massage-therapy.jpg"
                imageAlt="massage-therapy"
                description={service.description}
                duration={service.duration}
                price={40}
                bookingUrl={"ddddd"}
                id={"1"}
                callToAction="Book now"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
