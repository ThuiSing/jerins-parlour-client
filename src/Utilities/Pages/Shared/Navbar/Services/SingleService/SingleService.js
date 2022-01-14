import React from "react";

const SingleService = ({ service }) => {
  const { name, description, img, price } = service;

  return (
    <div className="text-center px-4 py-16 hover:shadow-lg transform hover:scale-110 transition-all cursor-pointer">
      <img className="mx-auto w-44" src={img} alt="" />
      <div className="mt-3 space-y-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        <h2 className="text-xl font-bold text-pink-500">${price}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SingleService;
