import React from "react";
import Header from "../components/Header";
import herobg from "../assets/images/herobg.png";
import delivery from "../assets/images/delivery.png";
import { BiMap } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
const Home = () => {
  return (
    <div className="">
      <div className="relative top-0 left-0 right-0 bottom-0 md:mx-14 mx-3 my-2">
        <Header />
        {/* Hero Section */}
        <div className="HeroSection flex-col md:flex text-center md:text-start">
          {/* right side */}
          <div className="RightSide xl:absolute right-0 bottom-0 top-28 10">
            <img
              src={herobg}
              className="w-[350px] lg:w-[500px] xl:w-[700px] m-auto"
            />
          </div>
          {/* Left side */}
          <div className="LeftSide mt-5 lg:mt-0 xl:mt-36 max-w-2xl md:m-auto xl:mx-0 text-center xl:text-start">
            <div>
              <h1 className="text-2xl md:text-4xl font-semibold">
                Hi There!, What's your SUGO?
              </h1>
              <h1 className="text-base md:text-xl">
                "No hay nadie que ame el dolor mismo, que lo busque, lo
                encuentre y lo quiera, simplemente porque es el dolor."
              </h1>
            </div>
            <div className="flex-auto md:flex mt-5 lg:mt14 xl:mt-20 md:space-x-5 md:space-y-0 space-y-5">
              {/* Enter Delivery Address bar */}
              <div className="flex items-center bg-white rounded-full border-black shadow-xl ">
                <BiMap size={30} className="ml-2 opacity-50" />
                <input
                  className="bg-transparent p-2 focus:outline-none w-[400px]"
                  type="text"
                  placeholder="Enter delivery address"
                />
              </div>
              <div className="OrderNow bg-primary flex items-center justify-center space-x-1 p-2 text-white rounded-full cursor-pointer hover:scale-105 z-10">
                <div>
                  <h1 className="text-xl">Order Now</h1>
                </div>
                <AiOutlineArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 xl:mt-48 justify-center text-center italic">
          <h1 className="text-2xl md:text-4xl">
            <span className="text-primary">FAST</span> AND{" "}
            <span className="text-primary">EASY</span> FOOD DELIVERY SERVICE
          </h1>
          <img src={delivery} alt="delivery" className="my-5 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
