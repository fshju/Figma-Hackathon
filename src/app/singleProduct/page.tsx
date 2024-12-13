"use client";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import Counter from "@/components/Counter";

const SingleProduct = () => {
  const products = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      badge: "-30%",
      image: "image 1.png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "image 2.png",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      badge: "-50%",
      image: "image 3.png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      badge: "New",
      image: "image 4.png",
    },
    {
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: "image 5.png",
    },
    {
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      badge: "New",
      image: "image 6.png",
    },
    {
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      badge: "New",
      image: "image 7.png",
    },
    {
      name: "Pooty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      badge: "New",
      image: "image 8.png",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div>
      <nav className="bg-[#F9F1E7] w-full p-2">
        <ul className="flex gap-5 px-2 md:px-7">
          <Link href="/">
            <li className="py-2.5 opacity-50 hover:text-black hover:opacity-85 ">
              Home
            </li>
          </Link>
          <p className="py-2.5 opacity-50">&gt;</p>
          <Link href="/shop">
            <li className="py-2.5 opacity-50 hover:text-black hover:opacity-85 ">
              Shop
            </li>
          </Link>
          <p className="py-2.5 opacity-50">&gt;</p>
          <span className="text-3xl opacity-25">|</span>
          <li className="py-2.5 cursor-pointer">{selectedProduct.name}</li>
        </ul>
      </nav>
      <br />
      <br />
      <div className="md:flex sm:flex md:space-x-16 sm:space-x-16 p-4">
        <div className="md:pl-3 lg:pl-36 sm:h-3/4 sm:w-80 md:w-96 md:h-96 lg:w-96 lg:h-96">
          <img
            src={selectedProduct.image}
            className="sm:h-96 sm:max-w-80 w-96"
            alt="Selected Product"
          />
        </div>
        <div className="pt-6 md:pt-0 lg:pl-14">
          <h1 className="text-3xl">{selectedProduct.name}</h1>
          <strong className="opacity-35">{selectedProduct.price}</strong>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-2xl pt-1.5 ${
                  i < 4 ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
            <span className="text-3xl opacity-25 pl-2">|</span>
            <p className="opacity-40 pl-2 pt-2.5"> 5 Customer Review</p>
          </div>
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <p className="opacity-50 pt-3">Size</p>
          <div className="pt-2 space-x-2">
            <button className="w-10 h-10 bg-yellow-100 text-black rounded-md hover:bg-yellow-400 hover:scale-110 transition duration-300">
              L
            </button>
            <button className="px-4 py-2 bg-yellow-100 text-black rounded-md hover:bg-yellow-400 hover:scale-110 transition duration-300">
              Xl
            </button>
            <button className="w-10 h-10 bg-yellow-100 text-black rounded-md hover:bg-yellow-400 hover:scale-110 transition duration-300">
              XS
            </button>
          </div>
          <p className="opacity-50 pt-3">Color</p>
          <div className="pt-2 space-x-2 flex">
            <p className="w-10 h-10 bg-purple-600 rounded-full shadow-md "></p>
            <p className="w-10 h-10 bg-black rounded-full shadow-md"></p>
            <p className="w-10 h-10 bg-yellow-300 rounded-full shadow-md"></p>
          </div>
          <div className="pt-5 flex gap-2 ">
            <Counter />
            <Link href="/cart">
              <button className="text-black hover:text-white hover:bg-[#B8860B]   border-2 border-black rounded px-5 py-1 hover:scale-110 transition duration-300">
                Add To Cart
              </button>
            </Link>

            <Link href="/comparison">
              <button className="text-black hover:text-white hover:bg-[#B8860B]   border-2 border-black rounded px-5 py-1 hover:scale-110 transition duration-300">
                + Compare
              </button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="flex justify-center items-center">
        <div className=" pt-10 pb-10 space-y-4 text-gray-600">
          {/* SKU */}
          <div className="flex items-center">
            <span className="w-24 font-medium">SKU</span>
            <span className="mr-2">:</span>
            <span>SS001</span>
          </div>

          {/* Category */}
          <div className="flex items-center">
            <span className="w-24 font-medium">Category</span>
            <span className="mr-2">:</span>
            <span>Sofas</span>
          </div>

          {/* Tags */}
          <div className="flex items-center">
            <span className="w-24 font-medium">Tags</span>
            <span className="mr-2">:</span>
            <span>Sofa, Chair, Home, Shop</span>
          </div>

          {/* Share */}
          <div className="flex items-center">
            <span className="w-24 font-medium">Share</span>
            <span className="mr-2">:</span>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Share on Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500"
                aria-label="Share on Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap px-1 py-4 justify-center text-center gap-9 text-lg sm:gap-16 sm:text-xl">
        <h1 className="hover:scale-105 transition duration-200 cursor-pointer">
          Description
        </h1>
        <h1 className="opacity-50 hover:text-black hover:opacity-100 hover:scale-105 transition duration-200 cursor-pointer">
          Additional
        </h1>
        <h1 className="opacity-50 hover:text-black hover:opacity-100 hover:scale-105 transition duration-200 cursor-pointer">
          Reviews [5]
        </h1>
      </div>
      <div className="justify-center px-3 sm:px-5 py-5 md:px-7 lg:px-48">
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <br />
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className="flex gap-3 flex-wrap justify-center py-12 ">
        <img src="Group 107.png" className="w-fit" />
        <img src="Group 106.png" className="w-fit" />
      </div>
      <hr />
      <br />
      <h1 className="sm:text-3xl text-xl pb-10 justify-center text-center font-semibold">
        Related Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => setSelectedProduct(product)}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-105 group cursor-pointer"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.badge && (
                <div
                  className={`absolute top-2 right-2 px-2 py-1 text-sm text-white rounded-full ${
                    product.badge === "New" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {product.badge}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="mt-2">
                <span className="text-lg font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm line-through text-gray-400 ml-2">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className="container text-center">
        <Link href="/shop">
          <button className="text-[#B8860B] hover:text-white hover:bg-[#B8860B]   border-2 border-[#B8860B] px-8 hover:scale-110 transition duration-300">
            Show More
          </button>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SingleProduct;
