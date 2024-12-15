"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [heartCount, setHeartCount] = useState(0); 

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleHeartClick = () => {
    setHeartCount(heartCount + 1); // Increment heart count on click
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg font-bold flex items-center">
              <span className="text-yellow-600 text-2xl mr-2">
                <img src="logo.png" />
              </span>
              Furniro
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            onClick={handleMenuItemClick}
            className="text-gray-800 hover:text-yellow-600 hover:scale-110 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/shop"
            onClick={handleMenuItemClick}
            className="text-gray-800 hover:text-yellow-600 hover:scale-110 transition duration-300"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={handleMenuItemClick}
            className="text-gray-800 hover:text-yellow-600 hover:scale-110 transition duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={handleMenuItemClick}
            className="text-gray-800 hover:text-yellow-600 hover:scale-110 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button>
            <Link href="/login">
              <span className="text-gray-600 hover:text-blue-700">
                <FaUser className="hover:scale-110 transition duration-300" />
              </span>
            </Link>
          </button>
          <button onClick={handleSearchToggle}>
            <span className="text-gray-600 hover:text-purple-600">
              <FaSearch className="hover:scale-110 transition duration-300" />
            </span>
          </button>
          <button onClick={handleHeartClick}>
            <div className="relative">
              <span className="text-gray-600 hover:text-red-600">
                <FaHeart className="hover:scale-110 transition duration-300" />
              </span>
              {heartCount > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {heartCount}
                </span>
              )}
            </div>
          </button>
          <Link href="/cart">
            <span className="text-gray-600 hover:text-orange-600">
              <FaShoppingCart className="hover:scale-110 transition duration-300" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-gray-600 text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-sm">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link
              href="/"
              onClick={handleMenuItemClick}
              className="text-gray-800 hover:text-yellow-600 hover:scale-110 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={handleMenuItemClick}
              className="text-gray-800 hover:text-yellow-600 hover:scale-110 transition duration-300"
            >
              Shop
            </Link>
            <Link
              href="/about"
              onClick={handleMenuItemClick}
              className="text-gray-800 hover:text-yellow-600 hover:scale-110 transition duration-300"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={handleMenuItemClick}
              className="text-gray-800 hover:text-yellow-600 hover:scale-110 transition duration-300"
            >
              Contact
            </Link>
            <div className="flex gap-5 start">
              <Link href="/login" onClick={handleMenuItemClick}>
                <span className="text-gray-600 hover:text-blue-400 hover:scale-110 transition duration-300">
                  <FaUser className="text-blue-800"/>
                </span>
              </Link>
              <button onClick={handleMenuItemClick}>
              <button onClick={handleSearchToggle}>
                <span className="text-gray-600 hover:text-purple-400 hover:scale-110 transition duration-300 ">
                  <FaSearch className="text-purple-600"/>
                </span>
              </button>
              </button>
              <button onClick={handleMenuItemClick}>
              <button onClick={handleHeartClick}>
                <div className="relative">
                  <FaHeart className="opacity-70 text-red-600"/>
                  {heartCount > 0 && (
                    <span className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {heartCount}
                    </span>
                  )}
                </div>
              </button>
              </button>


              <Link href="/cart" onClick={handleMenuItemClick}>
                <span className="text-gray-600 hover:text-orange-400 hover:scale-110 transition duration-300">
                  <FaShoppingCart className="text-orange-600"/>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Bar for Mobile & Desktop */}
      {isSearchOpen && (
        <div className="w-full bg-white shadow-sm p-4 flex justify-between items-center border-t-2 border-gray-200">
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-1/2 border border-gray-300 rounded-lg p-2"
          />
          
          <button onClick={handleSearchToggle} className="text-gray-600">
            <FaTimes className="text-xl" />
          </button>
        </div>
      )}
    </nav>
  );
}
