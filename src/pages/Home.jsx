import React from "react";
import Navbar from "../components/Navbar";
import SaleCard from "../components/SaleCard";
import Footer from "../components/Footer";
import Hero from "../assets/hero-1.png";
import HeroVector from "../assets/hero-vector.png";
import KitchenVector from "../assets/kitchen.png";
import KitchenImg from "../assets/kitchen-1.png";
import BedroomVector from "../assets/bedroom-vector.png";
import BedroomImg from "../assets/bedroom.png";
import BathroomVector from "../assets/bath-vector.png";
import BathroomImg from "../assets/bathroom.png";
import FeaturesCard from "../components/FeaturesCard";
import { AiFillHome } from "react-icons/ai";
import { MdAddBusiness } from "react-icons/md";
import { MdEco } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="container w-full max-w-screen-2xl mx-auto flex flex-col justify-center md:flex-row-reverse">
        <div className="w-full max-w-xl md:max-w-lg h-full p-5 mx-auto md:mx-0">
          <img
            src={Hero}
            className="w-full h-full object-cover rounded-lg shadow-lg md:hidden"
          />
          <img
            src={HeroVector}
            className="hidden md:block w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center md:items-start md:justify-center md:h-[500px] p-5 md:px-8">
          <div className="text-center capitalize md:text-left">
            <h1 className="text-3xl font-bold font-mons lg:text-4xl md:font-extrabold">
              Find your home
            </h1>
            <h2 className="text-2xl font-bold font-mons lg:text-3xl md:font-extrabold">
              Find your way!
            </h2>
          </div>
          <p className="text-center font-semibold md:text-left px-5 md:px-0 my-8 md:max-w-lg">
            Suspendisse netus mattis rutrum risus risus dis. Enim morbi morbi
            vivamus commodo.
          </p>
          <button className="text-lg text-gray-900 hover:text-white font-semibold bg-transparent hover:bg-gray-900 px-8 py-1 rounded-lg outline-none border-[3px] border-gray-900">
            Explore
          </button>
          <div className="hidden md:flex mt-14">
            <div className="flex flex-col mr-10">
              <h3 className="text-xl font-pops font-extrabold lg:text-2xl">
                500+
              </h3>
              <h4 className="text-xl font-pops font-extrabold lg:text-2xl">
                Property Sale
              </h4>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-pops font-extrabold lg:text-2xl">
                100%
              </h3>
              <h4 className="text-xl font-pops font-extrabold lg:text-2xl">
                Happy Clients
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choosing Me ? */}
      <div className="container w-full max-w-screen-xl mx-auto bg-[#1E1E1E] mt-10 p-10 md:rounded-lg">
        <div className="text-white flex flex-col md:flex-row justify-between p-10 px-4">
          <div className="flex flex-col mr-5">
            <p className="text-sm font-extrabold font-pops">
              Why Choose Hoop. ?
            </p>
            <h2 className="text-2xl font-extrabold">
              Provides the most list of property
            </h2>
          </div>
          <p className="mt-8 md:mt-0 text-left md:w-1/2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est
            similique dolorem iste qui quidem incidunt, debitis nisi commodi
            sunt.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* 1000 - 768 px */}
          <FeaturesCard Icons={<AiFillHome />} Title="Find your dream house" />
          <FeaturesCard
            Icons={<MdAddBusiness />}
            Title="Find place for business"
          />
          <FeaturesCard Icons={<MdEco />} Title="Eco-friendly house" />
        </div>
      </div>

      {/* Properties For Sale */}
      <div className="p-10 container w-full max-w-[1380px] mx-auto">
        <div className="flex justify-between md:px-5">
          <h2 className="text-xl font-bold capitalize">Porperties for sale</h2>
          <p className="text-lg font-semibold cursor-pointer">
            Explore More
            <BsArrowRight className="inline ml-3 text-xl" />
          </p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row items-center py-5 justify-center md:flex-wrap">
          <SaleCard />
          <SaleCard />
          <SaleCard />
          <SaleCard />
        </div>
      </div>

      {/* Design Room*/}
      <div className="container w-full max-w-screen-xl mx-auto">
        {/* Kitchen */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-5 px-14">
          <div className="md:w-1/2 max-w-[500px] md:max-w-[400px]">
            <img
              src={KitchenVector}
              className="hidden md:block w-full max-w-screen-xl object-cover"
            />
            <img
              src={KitchenImg}
              className="md:hidden w-full max-w-screen-xl object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col px-3 mt-4 md:ml-10">
            <h2 className="text-2xl font-extrabold font-pops">
              Aesthetic Kitchen
            </h2>
            <p className="mt-4 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              sequi excepturi libero quo ratione beatae sapiente voluptatibus
              itaque id fuga molestias consectetur ipsam expedita, modi et
              accusantium eum quidem amet optio dolorum autem. Mollitia rem,
              ducimus provident iste rerum harum autem eligendi, inventore
              eveniet delectus facilis neque? Dolore, minus repellat!
            </p>
          </div>
        </div>
        {/* Bedroom */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-center p-5 px-14">
          <div className="md:w-1/2 max-w-[500px] md:max-w-[400px]">
            <img
              src={BedroomVector}
              className="hidden md:block w-full max-w-screen-xl object-cover"
            />
            <img
              src={BedroomImg}
              className="md:hidden w-full max-w-screen-xl object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col px-3 mt-4 md:ml-10">
            <h2 className="text-2xl font-extrabold font-pops">
              Comfortably Bedroom
            </h2>
            <p className="mt-4 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, veritatis. Asperiores necessitatibus, eos delectus
              dolor itaque, saepe suscipit perferendis facere dolorum totam
              voluptates ut temporibus commodi rerum ipsum et sit, quam cumque
              tempora sapiente vero dignissimos! Aliquid, nam unde accusantium
              nobis culpa cum ipsum possimus iure deserunt, eligendi officia
              commodi.
            </p>
          </div>
        </div>
        {/* Bathroom */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-5 px-14">
          <div className="md:w-1/2 max-w-[500px] md:max-w-[400px]">
            <img
              src={BathroomVector}
              className="hidden md:block w-full max-w-screen-xl object-cover"
            />
            <img
              src={BathroomImg}
              className="md:hidden w-full max-w-screen-xl object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col px-3 mt-4 md:ml-10">
            <h2 className="text-2xl font-extrabold font-pops">
              Aesthetic Bathroom
            </h2>
            <p className="mt-4 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, eveniet? Obcaecati recusandae suscipit amet ipsa
              beatae fugit architecto ad iure. Repellat atque magni numquam,
              nulla consectetur provident qui cum error placeat odit molestiae
              similique velit vitae. Hic, eum facere asperiores ut accusantium
              ipsum magnam dolores! Omnis assumenda laborum a voluptatum?
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
