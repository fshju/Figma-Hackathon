const Footerimg = () => {
  return (
    <div className="bg-yellow-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center ">
        {/* High Quality */}
        <div className="hover:scale-110 transition duration-300">
          <div className="flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 11l3 3L22 4M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg mt-2 ">High Quality</h3>
          <p className="text-gray-600">Crafted from top materials</p>
        </div>
        {/* Warranty Protection */}
        <div className="hover:scale-110 transition duration-300">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m5-9h.01M17 3H7a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg mt-2">Warranty Protection</h3>
          <p className="text-gray-600">Over 2 years</p>
        </div>
        {/* Free Shipping */}
        <div className="hover:scale-110 transition duration-300">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h11m4 0h2a2 2 0 012 2v5a2 2 0 01-2 2h-2M3 10V6a2 2 0 012-2h5l2 2h7a2 2 0 012 2v4m-5 6h2a2 2 0 012-2v-5a2 2 0 00-2-2h-2M3 10v10a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg mt-2">Free Shipping</h3>
          <p className="text-gray-600">Orders over $150</p>
        </div>
        {/* 24/7 Support */}
        <div className="hover:scale-110 transition duration-300">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2M7 8h2a2 2 0 012 2v10a2 2 0 01-2 2H7m4 0v2m0-4h.01M21 2a2 2 0 00-2-2H5a2 2 0 00-2 2v20h18z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg mt-2">24/7 Support</h3>
          <p className="text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Footerimg;
