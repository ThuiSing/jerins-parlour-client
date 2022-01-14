import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../Image_Icon/logo.png";
import bookIcon from "../../../Image_Icon/Icon/Group.png";
import bookListIcon from "../../../Image_Icon/Icon/group1.png";
import reviewIcon from "../../../Image_Icon/Icon/group2.png";
import useAuth from "../../../Hooks/useAuth";

const UserDashboard = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("Book");
  // block font-medium text-xl flex items-center"
  return (
    <div className="flex">
      <div className="w-80 fixed h-full p-4">
        <div>
          <Link to="/">
            <img width="200" src={logo} alt="" />
          </Link>
        </div>
        <div className="mt-10 space-y-4">
          <NavLink
            onClick={() => setTitle("Book")}
            to="/dashboard"
            className={(navInfo) =>
              navInfo.isActive
                ? "text-pink-600 font-semibold text-xl flex items-center"
                : "block font-medium text-xl flex items-center"
            }
          >
            <img className="mr-3" width="30" src={bookIcon} alt="" />
            Book
          </NavLink>
          <NavLink
            onClick={() => setTitle("Booking List")}
            to="booking-list"
            className={(navInfo) =>
              navInfo.isActive
                ? "text-pink-600 font-semibold text-xl flex items-center"
                : "block font-medium text-xl flex items-center"
            }
          >
            <img className="mr-3" width="30" src={bookListIcon} alt="" />
            Booking List
          </NavLink>
          <NavLink
            onClick={() => setTitle("Review")}
            to="review"
            className={(navInfo) =>
              navInfo.isActive
                ? "text-pink-600 font-semibold text-xl flex items-center"
                : "block font-medium text-xl flex items-center"
            }
          >
            <img className="mr-3" width="30" src={reviewIcon} alt="" />
            Review
          </NavLink>
        </div>
      </div>
      <div className="bg-gray-100 w-full min-h-screen ml-80">
        <div className="flex justify-between items-center bg-white w-full py-5 px-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <h3 className="text-2xl font-bold text-pink-500">
            {user.displayName}
          </h3>
        </div>
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
