"use client"
import React, { useState } from 'react';
import { Grid, List } from 'lucide-react';
import Footerimg from "@/components/Footerimg";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  discount?: number;
  image: string;
  isNew: boolean;
};

const products: Product[] = [
  { id: 1, name: 'Syltherine', category: 'Stylish cafe chair', price: 2500000, originalPrice: 3500000, discount: 30, image: '/syltherine.jpg', isNew: false },
  { id: 2, name: 'Leviosa', category: 'Stylish cafe chair', price: 2500000, originalPrice: 2500000, image: '/image 2.png', isNew: false },
  { id: 3, name: 'Lolito', category: 'Luxury big sofa', price: 7000000, originalPrice: 14000000, discount: 50, image: '/lolito.jpg', isNew: false },
  { id: 4, name: 'Respira', category: 'Outdoor bar table and stool', price: 500000, originalPrice: 500000, image: '/respira.jpg', isNew: true },
];

const Shop: React.FC = () => {

  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('default');

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <img src="Shop.png" />
    <div className="max-w-xl mx-auto p-4">
      {/* Header controls */}
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setView('grid')}
          >
            <Grid className="w-5 h-5 text-amber-600 "/>
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setView('list')}
          >
            <List className="w-5 h-5 text-amber-600 " />
          </button>
          <span className="text-gray-600">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedProducts.length)} of {sortedProducts.length} results
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span>Show</span>
          <select
            className="border rounded p-1"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48</option>
          </select>

          <span>Sort by</span>
          <select
            className="border rounded p-1"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Product grid */}
      <div className=" sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="group relative">
            <div className="relative">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="Images.png"
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white rounded-full px-2 py-1 text-sm">
                  -{product.discount}%
                </div>
              )}
              {product.isNew && (
                <div className="absolute top-4 right-4 bg-teal-500 text-white rounded-full px-2 py-1 text-sm">
                  New
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full hover:bg-gray-100">Share</button>
                <button className="bg-white p-2 rounded-full hover:bg-gray-100">Compare</button>
                <button className="bg-white p-2 rounded-full hover:bg-gray-100">Like</button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-bold">
                  Rp {product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">
                    Rp {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
            <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700">
              Add to cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className="px-4 py-2 rounded bg-amber-600 text-white hover:bg-gray-200"
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
          >
            Next
          </button>
        )}
      </div>
      </div>
      <br/>
      <Footerimg/>
    </div>
  );
};

export default Shop;