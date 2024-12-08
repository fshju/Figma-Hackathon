"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link href="/" className="text-gray-800 hover:text-yellow-600">
            Home
          </Link>
          <Link href="/shop" className="text-gray-800 hover:text-yellow-600">
            Shop
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-yellow-600">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-yellow-600">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button>
            <span className="text-gray-600 hover:text-yellow-600">
              <FaUser />
            </span>
          </button>
          <button>
            <span className="text-gray-600 hover:text-yellow-600">
              <FaSearch />
            </span>
          </button>
          <button>
            <span className="text-gray-600 hover:text-red-600">
              <FaHeart />
            </span>
          </button>

          <Link href="/cart">
            <span className="text-gray-600 hover:text-yellow-600">
              <FaShoppingCart />
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
            <Link href="/" className="text-gray-800 hover:text-yellow-6">
              Home
            </Link>
            <Link href="/shop" className="text-gray-800 hover:text-yellow-6">
              Shop
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-yellow-60">
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-yellow-600"
            >
              Contact
            </Link>
            <div className="flex gap-5 start">
              <span className="text-gray-600 hover:text-yellow-600">
                <FaUser />
              </span>
              <span className="text-gray-600 hover:text-yellow-600">
                <FaSearch />
              </span>
              <span className="text-gray-600 hover:text-red-600">
                <FaHeart />
              </span>
              <Link href="/cart">
                <span className="text-gray-600 hover:text-yellow-600">
                  <FaShoppingCart />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}