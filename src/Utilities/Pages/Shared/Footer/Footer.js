import React from "react";
import locationIcon from "../../../Image_Icon/Icon/map-pin-2-fill.png";
import scIcon from "../../../Image_Icon/Icon/Vector.png";
import scIcon1 from "../../../Image_Icon/Icon/Vector-1.png";
import scIcon2 from "../../../Image_Icon/Icon/Vector-2.png";
import scIcon3 from "../../../Image_Icon/Icon/Vector-3.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-pink-500 text-white py-24">
      <div className="container mx-auto grid md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex">
            <img width="30" src={locationIcon} alt="" />
            <h2 className="ml-3">
              tigers Road ,h#000 (1th Floor),Road #00, Ne Dohs ,Chitagong
              Bangladesh
            </h2>
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-semibold">Company</h4>
          <div className="space-y-3 mt-5">
            <h3>About</h3>
            <h3>Project</h3>
            <h3>Our Team</h3>
            <h3>Terms Conditions</h3>
            <h3>Submit Listing</h3>
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-semibold">Quick Links</h4>
          <div className="space-y-3 mt-5">
            <h3>Quick Links</h3>
            <h3>Rentals</h3>
            <h3>Sales</h3>
            <h3>Contact</h3>
            <h3>Our Blog</h3>
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-semibold">About Us</h4>
          <div className="space-y-5 mt-5">
            <h3>
              I’ve written a few thousand words on why traditional “semantic
              class names” are the reason CSS is hard to maintain, b
            </h3>
            <div>
              <Link to="/">
                <button>
                  <img width="25" src={scIcon} alt="" />
                </button>
              </Link>
              <Link to="/">
                <button className="mx-3">
                  <img width="25" src={scIcon1} alt="" />
                </button>
              </Link>
              <Link to="/">
                <button>
                  <img width="25" src={scIcon2} alt="" />
                </button>
              </Link>
              <Link to="/">
                <button className="mx-3">
                  <img width="25" src={scIcon3} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
