import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import sogologo from "../assets/images/SUGOLOGO.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={sogologo} alt="logo" className="md:w-[200px] sm:w-[100px]" />
      </div>
      <div className="flex space-x-5 items-center">
        <div>
          <AiOutlineShoppingCart className="cursor-pointer text-xl md:text-2xl" />
        </div>
        <div className="md:text-lg sm:text-xs bg-white p-2 cursor-pointer hover:bg-secondary duration-150 ">
          Login/Sign Up
        </div>
      </div>
    </div>
  );
};

export default Header;
