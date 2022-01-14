import React from "react";
import serviceImg from "../../../../Image_Icon/Icon/service (1).png";
import SingleService from "./SingleService/SingleService";

const services = [
  {
    name: "Skin Care Treatment",
    img: serviceImg,
    description:
      "with well written codes. we build amazing app for all platforms, mobile and web apps in general",
    price: 299,
  },
  {
    name: "Skin Care Treatment",
    img: serviceImg,
    description:
      "with well written codes. we build amazing app for all platforms, mobile and web apps in general",
    price: 299,
  },
  {
    name: "Skin Care Treatment",
    img: serviceImg,
    description:
      "with well written codes. we build amazing app for all platforms, mobile and web apps in general",
    price: 299,
  },
  {
    name: "Body Care Treatment",
    img: serviceImg,
    description:
      "with well written codes. we build amazing app for all platforms, mobile and web apps in general",
    price: 299,
  },
];
const Services = ({ showAll }) => {
  return (
    <div className="container mx-auto py-24">
      <div className="text-center">
        <h2 className="primary text-4xl font-bold">
          Our Awesome <span className="text-pink-500">Services</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-12 mt-24">
        {(showAll ? services : services.slice(0, 3)).map((service, key) => (
          <SingleService key={key} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
