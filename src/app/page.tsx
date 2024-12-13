import React from "react";
import OurProducts from "@/components/OurProducts";
import ScrollProducts from "@/components/ScrollProducts";
import Link from "next/link";

const home = () => {
  const images = [
    "Rectangle 37.png",
    "Rectangle 38.png",
    "Rectangle 40.png",
    "Rectangle 41.png",
    "Rectangle 45.png",
    "Rectangle 44.png",
    "image 6.png",
    "image 8.png",
  ];
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-[600px]">
            <img
              src="banner.png"
              alt="Modern furniture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex items-center bg-[#FFF9F3] p-12 lg:p-20">
            <div>
              <span className="text-gray-800 uppercase tracking-wide text-sm font-medium">
                New Arrival
              </span>
              <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-[#B8860B] leading-tight">
                Discover Our
                <br />
                New Collection
              </h1>
              <p className="mt-6 text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <Link href="/shop">
                <button className="mt-8 bg-[#B8860B] text-white px-12 py-4 font-medium hover:bg-[#986f07] transition-colors hover:scale-110 transition duration-300">
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className=" container  text-center">
        <h1 className="font-bold text-3xl">Browse The Range</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consecteture adipiscing elit.
        </p>
      </div>
      <br /> <br />
      <div className="flex flex-wrap justify-center gap-6">
        <img
          src="H1.png"
          className="w-full  sm:w-1/4 transition-transform duration-300 hover:scale-105"
        />
        <img
          src="H2.png"
          className="w-full  sm:w-1/4 transition-transform duration-300 hover:scale-105"
        />
        <img
          src="H3.png"
          className="w-full  sm:w-1/4 transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="text-xl flex justify-evenly py-10 ">
        <p>Dining</p>
        <p>Living</p>
        <p>Bedroom</p>
      </div>
      <br />
      <div className="container text-center">
        <p className=" justify-center  font-bold text-3xl">Our Products</p>
      </div>
      <br />
      <OurProducts />
      <br />
      <div className="container text-center">
        <Link href="/shop">
          <button className="text-[#B8860B] hover:text-white hover:bg-[#B8860B]   border-2 border-[#B8860B] px-8 hover:scale-110 transition duration-300">
            Show More
          </button>
        </Link>
      </div>
      <br />
      <ScrollProducts />
      <br />
      <div className="py-12 px-4">
        {/* Heading */}
        <div className="text-center pb-8">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Share your setup with{" "}
            <span className="text-yellow-500">#FuniroFurniture</span>
          </h2>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md group-hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default home;
