import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Review from "../UserDashboard/Review/Review";
import ReactStars from "react-stars";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const usersReview = [
  {
    name: "Jhony bhai",
    img: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
    companyName: "CEO,Facebook",
    text: "Discover free hd User Icon Png PNG images. All images are transparent background and unlimited download. the way",
    rating: 5,
  },
  {
    name: "Mia bhai",
    img: "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png",
    companyName: "CEO,Facebook",
    text: "Discover free hd User Icon Png PNG images. All images are transparent background and unlimited download.",
    rating: 2,
  },
  {
    name: "Dani bhai",
    img: "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png",
    companyName: "CEO,Facebook",
    text: "Discover free hd User Icon Png PNG images. All images are transparent background and unlimited download.",
    rating: 4,
  },
  {
    name: "Tera bhai",
    img: "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png",
    companyName: "CEO,Intagram",
    text: "Discover free hd User Icon Png PNG images. All images are transparent background and unlimited download.",
    rating: 3,
  },
];
const Testomonials = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto ">
        <Carousel showDots={true} responsive={responsive}>
          {usersReview.map((review) => (
            <div key={review.name} className="p-10">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 rounded-full"
                  src={review.img}
                  alt={Review.name}
                />
                <div className="ml-5">
                  <h3 className="text-2xl font-bold">{review.name}</h3>
                  <h3 className="text-md font-semibold">
                    {review.companyName}
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 my-3 tracking-wide">{review.text}</p>
              <ReactStars
                value={review.rating}
                count={5}
                size={36}
                color2={"#ffd700"}
                edit={false}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testomonials;
