import React from "react";
import Carousel from "react-elastic-carousel";

import { AiOutlineSearch } from "react-icons/ai";
import { categories } from "../assets/data/categories";
import { foodData } from "../assets/data/foodData";
import { GiFlame } from "react-icons/gi";

const Food = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="pt-11 md:mx-14 mx-3">
      {/* Search Food */}
      <div className="flex items-center bg-white rounded-full border-black shadow-xl max-w-2xl mx-auto">
        <AiOutlineSearch size={30} className="ml-2 opacity-50" />
        <input
          className="bg-transparent p-2 focus:outline-none w-[240px] sm:w-[300px] md:w-[400px]"
          type="text"
          placeholder="Search Food"
        />
      </div>
      {/* Food Category */}
      <div className="mt-5 flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl text-white">Categories</h1>
        <div className="CategorieList flex flex-wrap gap-4 justify-center items-center  mt-5 max-w-2xl">
          {categories.map((item, index) => (
            <div
              key={index}
              className="text-white font-light text-lg bg-secondary px-3 py-1 border-2 cursor-pointer hover:bg-black duration-150"
            >
              {item.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* SEARCHED FOOD */}
      <div className="border-b border-white pt-20"></div>

      {/* Top Orders */}
      <div>
        <div className="flex items-center gap-2 text-2xl mt-10">
          <h1>Hot Foods</h1>
          <GiFlame className="text-red" />
        </div>
        {/* HOT Slider */}
        <div className="mt-14 mb-20">
          <Carousel breakPoints={breakPoints} pagination={false} showArrows>
            {foodData.map((item, index) => (
              <div className="w-[250px] bg-white rounded-lg shadow-md shadow-black m-2 hover:scale-105 duration-150">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block p-2"
                    src={item.image}
                  />
                </a>
                <div className="mt-4 p-2">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {/* Map through items that has two or more category */}
                    {item.category.map((tem, ndex) => (
                      <a key={ndex} className="text-primary" href="#">
                        {ndex == 0
                          ? tem.toLocaleUpperCase() + "/"
                          : " " + tem.toLocaleUpperCase()}
                      </a>
                    ))}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.name}
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
            ))}
          </Carousel>
          <div className="border-b border-white pt-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Food;
