"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define the structure of a service
interface Service {
  name: string;
  price: number;
  duration: string;
  description: string;
}

// Define the services object with proper typing
const services: Record<string, Service[]> = {
  Massage: [
    {
      name: "Swedish Massage",
      price: 100,
      duration: "60 min",
      description: "A classic massage...",
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
  Facial: [
    {
      name: "Classic Facial1",
      price: 80,
      duration: "45 min",
      description: "A rejuvenating facial...",
    },
  ],
  Facial1: [
    {
      name: "Classic Facial",
      price: 80,
      duration: "45 min",
      description: "A rejuvenating facial...",
    },
  ],
};

const ServicesSlider = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof services>("Massage");
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
    <section className="bg-bgBase p-sm md:p-md lg:px-lg mt-8">
      <h3 className="h3-custom">Services</h3>
      <h2 className="h2-custom">Tailored to fit your needs</h2>

      <div className="relative">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-2 text-lg">
          {Object.keys(services).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-3 py-2 text-textGreen font-light font-inter text-base outline-none ${
                activeTab === category ? "bg-btnHoveredGreen rounded-xl" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Scroll Buttons */}
        <div className="flex justify-end md:absolute md:top-0 md:right-0 md:space-x-4 mt-2 md:mt-0">
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
            className="flex space-x-6 overflow-x-auto scroll-smooth"
          >
            {services[activeTab]?.map((service) => (
              <div
                key={service.name}
                className="w-[280px] md:w-[320px] lg:w-[400px] min-w-[280px] md:min-w-[320px] lg:min-w-[400px] rounded-2xl flex-shrink-0 relative group"
              >
                {/* Image - Bigger on Desktop */}
                <div className="relative overflow-hidden rounded-2xl group">
                  <Image
                    src="/massage-therapy.jpg"
                    alt={service.name}
                    className="w-full h-auto rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    width={500} // Increased width
                    height={500} // Increased height
                  />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/30">
                    <Link
                      href="#"
                      className="bg-accent text-white font-inter font-light py-3 px-6 rounded-lg shadow-md"
                    >
                      Book now
                    </Link>
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-3 flex justify-between">
                  <h4 className="font-rokkit text-textGreen text-2xl">
                    {service.name}
                  </h4>
                  <p className="font-rokkit font-light whitespace-nowrap pt-1">
                    {service.duration} | ${service.price}
                  </p>
                </div>
                <p className="py-2 text-textGrey font-inter font-light text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
