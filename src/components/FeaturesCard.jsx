import React from "react";

const FeaturesCard = ({ Icons, Title }) => {
  return (
    <div className="bg-white flex flex-col items-center md:items-start w-full p-8 md:p-5 lg:p-8 m-3 rounded-lg flex-grow flex-1">
      <div className="text-5xl">{Icons}</div>
      <div className="flex flex-col items-center md:items-start mt-5">
        <h3 className="text-lg font-semibold capitalize">{Title}</h3>
        <p className="font-medium mt-2 text-center md:text-left max-w-lg md:max-w-none">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          fugit sunt ratione dolores libero! Molestias consequatur saepe quasi
          ab porro.
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
