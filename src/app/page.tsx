import React from "react";
import OurProducts from "@/components/OurProducts";
import ScrollProducts from "@/components/ScrollProducts";

const home = () => {
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
              <button className="mt-8 bg-[#B8860B] text-white px-12 py-4 font-medium hover:bg-[#986f07] transition-colors">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className=" container  text-center">
        <h1 className="font-bold text-3xl">Browse The Range</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet, consecteture adipiscing elit.</p>
      </div>
      <br /> <br />
      <div className="flex flex-wrap justify-center gap-4">
      <img src="H1.png" className="w-full  sm:w-1/4 transition-transform duration-300 hover:scale-105" />
      <img src="H2.png" className="w-full  sm:w-1/4 transition-transform duration-300 hover:scale-105" />
      <img src="H3.png" className="w-full  sm:w-1/4 transition-transform duration-300 hover:scale-105" />
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
      <br/>
      <OurProducts/>
      <br />
      <div className="container text-center">
      <button className="text-[#B8860B] hover:text-black hover:bg-[#B8860B] transition-transform duration-400 border-2 border-[#B8860B] px-8">
        Show More
      </button>
      </div>
      
      <br />
      <ScrollProducts/>
      <br />
      <img src="Share.png" />
    </div>
  );
};

export default home;
