import React from "react";
import banner from "../../../Image_Icon/Image/banner.png";

const Banner = () => {
  return (
    <div className="bg-primary min-h-screen pt-28">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="w-1/2 ">
          <div>
            <h2 className="text-6xl font-bold uppercase">
              Beauty salon for every women
            </h2>
            <p className="text-gray-600 my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              labore dolore tempora ipsam quis doloribus? Suscipit adipisci
              fugiat iste sapiente? Culpa dolorem natus esse harum, accusantium
              et nostrum expedita officiis?
            </p>
            <button className="bg-pink-500 text-white px-10 py-3 rounded-md">
              Get an Appointment
            </button>
          </div>
        </div>
        <div className="w-1/2 ">
          <img className="w-full" src={banner} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
