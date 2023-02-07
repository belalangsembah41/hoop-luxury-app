import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] px-10 mt-8">
      <div className="bg-[#1E1E1E] pt-8 pb-4 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between text-white">
          <div>
            <h1 className="text-3xl font-pops font-extrabold">Hoop.</h1>
            <p className="pr-5 font-semibold mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              pariatur explicabo aperiam enim ea. Magni autem ad quam voluptatum
              molestiae?
            </p>
          </div>
          <div className="flex mt-5">
            <ul className="">
              <h2 className="text-lg font-semibold">Property</h2>
              <li>Apartment</li>
              <li>House</li>
              <li>Villa</li>
            </ul>
            <ul className="ml-10">
              <h2 className="text-lg font-semibold">Sales</h2>
              <li>Rent</li>
              <li>Sell</li>
              <li>Buy</li>
              <li>For Sale</li>
            </ul>
          </div>
        </div>
        <div className="flex mt-8 justify-between w-[150px] text-white">
          <FaFacebookF className="cursor-pointer text-xl" />
          <FaTwitter className="cursor-pointer text-xl" />
          <FaInstagram className="cursor-pointer text-xl" />
          <FaLinkedinIn className="cursor-pointer text-xl" />
        </div>
        <div className="flex items-center justify-center mt-10">
          <p className="text-sm text-white">
            &copy; 2023. Hoop allrights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
