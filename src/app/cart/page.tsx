import Footerimg from "@/components/Footerimg";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  return (
    <div>
      <div className="relative w-full">
        <img src="Rectangle 1.png" className="object-cover top-0 left-0 z-10" />
        <div className="absolute top-0 left-0  w-full h-full flex flex-col items-center justify-center z-20 text-center ">
          <h1 className="text-black sm:text-4xl font-bold">Cart</h1>
          <div className="flex ">
            <Link href="/">
              <button className="px-1 py-1 md:py-1 text-xs md:text-xl  hover:text-red-500 transition duration-200">
                Home
              </button>
            </Link>
            <p className="py-1 md:py-1 text-xs md:text-xl">&gt;</p>
            <Link href="/cart">
              <button className="px-1 py-1 md:py-1 text-xs md:text-xl hover:text-red-500 transition duration-200">
                Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Cart</h1>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Section */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4 md:p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Subtotal</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-4 flex items-center space-x-4">
                      <img
                        src="H1.png"
                        alt="Asgaard sofa"
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded"
                      />
                      <span className="text-sm sm:text-base">Asgaard sofa</span>
                    </td>
                    <td className="py-4 px-4 text-sm sm:text-base">
                      Rs. 250,000.00
                    </td>
                    <td className="py-4 px-4">
                      <input
                        type="number"
                        className="border border-gray-300 rounded-lg p-1 w-12 text-center text-sm sm:text-base sm:p-2 sm:w-16"
                        defaultValue={1}
                      />
                    </td>
                    <td className="py-4 px-4 text-sm sm:text-base">
                      Rs. 250,000.00
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-red-500 hover:text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Right Section */}
            <div className="bg-yellow-50 rounded-lg shadow-md p-4 md:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Cart Totals
              </h2>
              <div className="flex justify-between mb-4 text-sm sm:text-base">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold text-base sm:text-lg mb-4">
                <span>Total</span>
                <span>Rs. 250,000.00</span>
              </div>
              <Link href="/checkout">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 sm:py-3 sm:px-6 hover:scale-105 transition duration-300">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footerimg />
    </div>
  );
};

export default CartPage;
