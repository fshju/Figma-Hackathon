"use client"
import { FaHeart} from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import Link from "next/link";

export default function OurProducts() {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-105 group"
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
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/cart">
              <button className="hover:transition-transform duration-30 hover:bg-[#B8860B] hover:text-white bg-white text-[#B8860B] px-4 py-2  mb-3">
               Add to Cart
              </button>
              </Link> 
              <div className="flex gap-4 ">
                <button className="text-white">
                <FaShare className="hover:text-blue-300"/>
                Share
                </button>
                <Link href="/comparison">
                <button className="text-white">
                <MdCompareArrows className="hover:text-green-300"/> Compare
                </button>
                </Link>
                <button className="text-white">
                <FaHeart className="hover:text-red-500"/> Like
                </button>
              </div>
            </div>
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
  );
}
