import React from "react";
import Link from "next/link";
import Footerimg from "@/components/Footerimg";
const checkout = () => {
  return (
    <div>
      <div className="relative w-full">
        <img src="Rectangle 1.png" className="object-cover top-0 left-0 z-10" />
        <div className="absolute top-0 left-0  w-full h-full flex flex-col items-center justify-center z-20 text-center ">
          <h1 className="text-black sm:text-4xl font-bold">Checkout</h1>
          <div className="flex ">
            <Link href="/">
              <button className="px-1 py-1 md:py-1 text-xs md:text-xl  hover:text-red-500 transition duration-200">
                Home
              </button>
            </Link>
            <p className="py-1 md:py-1 text-xs md:text-xl">&gt;</p>
            <Link href="/checkout">
              <button className="px-1 py-1 md:py-1 text-xs md:text-xl hover:text-red-500 transition duration-200">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center py-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-2xl font-bold mb-6">Billing details</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-lg p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-lg p-3 w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="border border-gray-300 rounded-lg p-3 w-full mt-4"
              />
              <select className="border border-gray-300 rounded-lg p-3 w-full mt-4">
                <option>Country / Region</option>
                <option>Sri Lanka</option>
              </select>
              <input
                type="text"
                placeholder="Street address"
                className="border border-gray-300 rounded-lg p-3 w-full mt-4"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="border border-gray-300 rounded-lg p-3 w-full mt-4"
              />
              <select className="border border-gray-300 rounded-lg p-3 w-full mt-4">
                <option>Province</option>
                <option>Western Province</option>
              </select>
              <input
                type="text"
                placeholder="ZIP code"
                className="border border-gray-300 rounded-lg p-3 w-full mt-4"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg p-3 w-full mt-4"
              />
              <input
                type="email"
                placeholder="Email address"
                className="border border-gray-300 rounded-lg p-3 w-full mt-4"
              />
              <textarea
                placeholder="Additional Information"
                className="border border-gray-300 rounded-lg p-3 w-full mt-4 h-24"
              ></textarea>
            </div>

            {/* Right Column */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Product</h2>
              <div className="flex justify-between mb-4">
                <span>Asgaard sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between mb-4 border-t pt-4">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between mb-4 font-bold text-lg border-t pt-4">
                <span>Total</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="mt-6">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-500"
                    defaultChecked
                  />
                  <span>Direct Bank Transfer</span>
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <label className="flex items-center space-x-3 mt-4">
                  <input
                    type="radio"
                    name="payment"
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full mt-6 hover:bg-blue-700 hover:scale-105 transition duration-300">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footerimg />
    </div>
  );
};

export default checkout;
