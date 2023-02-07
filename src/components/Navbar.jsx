import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="container w-full max-w-screen-xl mx-auto px-8 md:px-14 py-3 md:py-5 flex items-center justify-between relative">
      <div className="cursor-pointer">
        <h1 className="text-3xl font-extrabold font-pops">Hoop.</h1>
      </div>

      <div
        className={
          clicked
            ? "flex flex-col items-center md:flex-row absolute md:static top-0 right-0 w-1/2 md:w-auto py-16 md:py-0 bg-[#1E1E1E] md:bg-transparent h-screen md:h-auto transition-[right] delay-150 ease-in-out"
            : "flex flex-col items-center md:flex-row absolute md:static top-0 -right-full w-1/2 md:w-auto py-16 md:py-0 bg-[#1E1E1E] md:bg-transparent h-screen md:h-auto transition-[right] delay-150 ease-in-out"
        }
      >
        <ul className="flex flex-col md:flex-row text-center font-mons">
          <li className="bg-transparent border-[3px] md:border-none border-white hover:bg-white text-white md:text-black hover:text-black hover:font-semibold hover:md:bg-transparent py-2 md:py-0 px-14 md:p-0 md:mr-6 mb-4 md:mb-0 rounded-lg cursor-pointer">
            <a href="/" className="text-lg font-semibold">
              Home
            </a>
          </li>
          <li className="bg-transparent border-[3px] md:border-none border-white hover:bg-white text-white md:text-black hover:text-black hover:font-semibold hover:md:bg-transparent py-2 md:py-0 px-14 md:p-0 md:mr-6 mb-4 md:mb-0 rounded-lg cursor-pointer">
            <a href="/" className="text-lg font-semibold">
              Property
            </a>
          </li>
          <li className="bg-transparent border-[3px] md:border-none border-white hover:bg-white text-white md:text-black hover:text-black hover:font-semibold hover:md:bg-transparent py-2 md:py-0 px-14 md:p-0 md:mr-6 mb-4 md:mb-0 rounded-lg cursor-pointer">
            <a href="/" className="text-lg font-semibold">
              Contact
            </a>
          </li>
          <li className="bg-transparent border-[3px] md:border-none border-white hover:bg-white text-white md:text-black hover:text-black hover:font-semibold hover:md:bg-transparent py-2 md:py-0 px-14 md:p-0 md:mr-6 mb-4 md:mb-0 rounded-lg cursor-pointer">
            <a href="/" className="text-lg font-semibold">
              About
            </a>
          </li>
        </ul>
        <div className="bg-transparent border-[3px] md:border-none border-white hover:bg-white hover:md:bg-transparent text-white md:text-black hover:text-black py-1.5 px-20 md:p-0 md:ml-4 rounded-md cursor-pointer">
          <AiOutlineUser className="text-3xl" />
        </div>
      </div>
      <div
        className="cursor-pointer md:hidden absolute right-10 top-3"
        onClick={() => setClicked(!clicked)}
      >
        <HiMenuAlt2
          className={clicked ? "text-4xl text-white" : "text-4xl text-black"}
        />
      </div>
    </div>
  );
};

export default Navbar;
