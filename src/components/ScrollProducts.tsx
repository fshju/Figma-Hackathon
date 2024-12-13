"use client";

import React, { useRef, useEffect, MutableRefObject } from "react";
import Link from "next/link";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const ScrollProducts: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const slides: Slide[] = [
    {
      id: 1,
      image: "scroll1.png",
      title: "Inner Peace",
      subtitle: "01 — Bed Room",
    },
    {
      id: 2,
      image: "scroll2.png",
      title: "Cozy Space",
      subtitle: "02 — Dining Room",
    },
    {
      id: 3,
      image: "scroll3.png",
      title: "Modern Touch",
      subtitle: "03 — Living Room",
    },
  ];

  // Duplicating slides for infinite effect
  const infiniteSlides = [...slides, ...slides, ...slides];

  const handleScroll = (direction: "left" | "right") => {
    const current = scrollRef.current;
    if (!current) return;

    const scrollAmount = current.offsetWidth; // Scroll by the width of the container

    if (direction === "right") {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleInfiniteScroll = () => {
    const current = scrollRef.current;
    if (!current) return;

    if (current.scrollLeft === 0) {
      // Reset to the middle set of slides
      current.scrollLeft = current.scrollWidth / 3;
    } else if (current.scrollLeft >= current.scrollWidth * (2 / 3)) {
      // Reset to the middle set of slides
      current.scrollLeft = current.scrollWidth / 3;
    }
  };

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      // Start at the middle set of slides for seamless looping
      current.scrollLeft = current.scrollWidth / 3;

      // Add event listener for handling infinite scroll
      current.addEventListener("scroll", handleInfiniteScroll);

      return () => {
        current.removeEventListener("scroll", handleInfiniteScroll);
      };
    }
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="mt-4 text-gray-600">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you.
            </p>
            <Link href="/shop">
              <button className="mt-6 bg-yellow-600 hover:scale-110 transition duration-300 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-700 transition">
                Explore More
              </button>
            </Link>
          </div>

          {/* Right Section (Carousel) */}
          <div className="relative overflow-hidden">
            {/* Carousel Wrapper */}
            <div
              ref={scrollRef as MutableRefObject<HTMLDivElement>}
              className="flex space-x-4 sm:space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
            >
              {infiniteSlides.map((slide, index) => (
                <div
                  key={index}
                  className="relative min-w-[90%] sm:min-w-[80%] lg:min-w-[40%] snap-center flex-shrink-0"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-lg object-cover w-full h-64 sm:h-80"
                  />
                  <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                    <span className="text-gray-500 text-sm">
                      {slide.subtitle}
                    </span>
                    <p className="text-lg font-semibold text-gray-800">
                      {slide.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
              <button
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                onClick={() => handleScroll("left")}
              >
                &lt;
              </button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
              <button
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                onClick={() => handleScroll("right")}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollProducts;
