import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Funiro.</h2>
            <p className="mt-4 text-gray-700">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800">Links</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <a href="/" className="hover:text-gray-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-gray-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-500">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Help */}
          <div>
            <h3 className="text-lg font-bold text-gray-800">Help</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-500">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-800">Newsletter</h3>
            <form className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded-r-md hover:bg-gray-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 py-4 sm:text-left pl-20 text-gray-600">
          2023 Funiro. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
