import React from "react";
import bannerImg from "../../Image_Icon/Image/handleBanner.png";

const HandleScreen = () => {
  return (
    <div className="bg-primary py-24">
      <div className="container mx-auto flex items-center">
        <div>
          <img src={bannerImg} alt="" />
        </div>
        <div className="space-y-10 ml-10">
          <h2 className="text-5xl font-bold text-primary">
            Let us Handle your screen
            <span className="text-pink-500">Professionally</span>
          </h2>
          <p className="text-gray-600 md:w-3/4">
            I’ve written a few thousand words on why traditional “semantic class
            names” are the reason CSS is hard to maintain, but the truth is
            you’re never going to believe me until you actually try it. If you
            can suppress the urge to retch long enough to give it a chance, I
            really think you'll w
          </p>
          <div className="flex items-center">
            <div>
              <h3 className="text-5xl font-bold text-pink-500">500+</h3>
              <p className="font-semibold mt-2 ">Happy Customer</p>
            </div>
            <div className="ml-7">
              <h3 className="text-5xl font-bold text-pink-500">16+</h3>
              <p className="font-semibold mt-2 ">Total Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleScreen;
