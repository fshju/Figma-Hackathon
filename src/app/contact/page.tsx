import React from "react";
import Link from "next/link";
import Footerimg from "@/components/Footerimg";
const Contact = () => {
  return (
    <div>
      <div className="relative w-full">
        <img src="Rectangle 1.png" className="object-cover top-0 left-0 z-10" />
        <div className="absolute top-0 left-0  w-full h-full flex flex-col items-center justify-center z-20 text-center ">
          <h1 className="text-black sm:text-4xl font-bold">Contact</h1>
          <div className="flex ">
            <Link href="/">
              <button className="px-1 py-1 md:py-1 text-xs md:text-xl  hover:text-red-500 transition duration-200">
                Home
              </button>
            </Link>
            <p className="py-1 md:py-1 text-xs md:text-xl">&gt;</p>
            <Link href="/contact">
              <button className="px-1 py-1 md:py-1 text-xs md:text-xl hover:text-red-500 transition duration-200">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="max-w-4xl mx-5 sm:mx-5 md:mx-5 lg:mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 ">
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Working Time</h3>
              <p className="text-gray-600">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block mb-2">Your name</label>
              <input placeholder="Abc" className="w-full border-2" />
            </div>

            <div>
              <label className="block mb-2">Email address</label>
              <input placeholder="Abc@def.com" className="w-full border-2" />
            </div>

            <div>
              <label className="block mb-2">Subject</label>
              <input
                placeholder="This is an optional"
                className="w-full border-2"
              />
            </div>

            <div>
              <label className="block mb-2">Message</label>
              <textarea
                placeholder="Hi! I'd like to ask about"
                className="w-full min-h-[120px] border-2"
              />
            </div>

            <button className="w-full bg-[#B88E2F] hover:bg-[#a47d2a] text-white py-3 hover:scale-110 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footerimg />
    </div>
  );
};

export default Contact;
