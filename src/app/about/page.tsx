import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div>
       <div className="relative w-full">
        <img src="Rectangle 1.png" className="object-cover top-0 left-0 z-10" />
        <div className="absolute top-0 left-0  w-full h-full flex flex-col items-center justify-center z-20 text-center ">
          <h1 className="text-black sm:text-4xl font-bold">Blog</h1>
          <div className="flex ">
            <Link href="/">
              <button className="px-1 py-1 md:py-1 text-xs md:text-xl  hover:text-red-500 transition duration-200">
                Home
              </button>
            </Link>
            <p className="py-1 md:py-1 text-xs md:text-xl">&gt;</p>
            <Link href="/about">
              <button className="px-1 py-1 md:py-1 text-xs md:text-xl hover:text-red-500 transition duration-200">
              Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
     {/* Main Content */}
     <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={`/image ${index + 1}.png`} 
                  alt={`Blog Post ${index + 1}`}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 mr-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h6"
                        />
                      </svg>
                      Admin
                    </span>
                    <span>14 Oct 2022</span>
                    <span>Wood</span>
                  </div>
                  <h2 className="text-2xl font-semibold mt-4">
                    {index === 0
                      ? "Going all-in with millennial design"
                      : index === 1
                      ? "Exploring new ways of decorating"
                      : "Handmade pieces that took time to make"}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, natus.
                  </p>
                  <button className="text-blue-500 hover:underline mt-4">
                    Read more
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-8">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className="px-4 py-2 bg-yellow-100 text-black rounded-md hover:bg-yellow-400 hover:scale-110 transition duration-300"
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 bg-yellow-100 text-black rounded-md hover:bg-yellow-400 hover:scale-110 transition duration-300">
                Next
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {[
                  { name: "Crafts", count: 2 },
                  { name: "Design", count: 8 },
                  { name: "Handmade", count: 7 },
                  { name: "Interior", count: 1 },
                  { name: "Wood", count: 6 },
                ].map((category, index) => (
                  <li
                    key={index}
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    {category.name}{" "}
                    <span className="text-gray-400">({category.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {[
                  "Going all-in with millennial design",
                  "Exploring new ways of decorating",
                  "Handmade pieces that took time to make",
                  "Modern home in Milan",
                  "Colorful office redesign",
                ].map((post, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <Image
                      src={`/image ${index + 2}.png`}
                      alt={`Blog Post ${index + 2}`}
                      width={50}
                      height={50}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="text-gray-800 hover:underline cursor-pointer">
                        {post}
                      </h4>
                      <span className="text-sm text-gray-500">Aug 2022</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default About;









