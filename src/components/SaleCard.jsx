import React from "react";
import { FiHeart } from "react-icons/fi";
import { GiBathtub } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import CardImg from "../assets/card-img.png";

const SaleCard = () => {
  return (
    <div className="bg-white shadow-xl p-3 rounded-lg">
      <div className="flex flex-col">
        <div className="w-[270px]">
          <img src={CardImg} className="w-full object-cover rounded-lg" />
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            <h4 className="text-[12px] bg-[#1E1E1E] text-white font-semibold px-5 py-0.5 rounded-full">
              House
            </h4>
            <h4 className="text-[12px] bg-[#1E1E1E] text-white font-semibold mx-3 px-5 py-0.5 rounded-full">
              For Sale
            </h4>
          </div>
          <FiHeart className="text-xl" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h1 className="text-xl font-pops font-extrabold">$20,000</h1>
        <h2 className="text-lg font-bold">Kemang Pratama</h2>
      </div>
      <div className="flex mt-5">
        <div className="flex items-center">
          <GiBathtub className="text-3xl pl-0 p-1.5 rounded-full" />
          <h2 className="ml-1 text-sm font-bold">2 Bathrooms</h2>
        </div>
        <div className="flex items-center ml-3">
          <FaBed className="text-3xl pl-1 p-1.5 rounded-full" />
          <h2 className="ml-1 text-sm font-bold">4 Bedrooms</h2>
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
