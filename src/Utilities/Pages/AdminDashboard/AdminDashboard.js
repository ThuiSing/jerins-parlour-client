import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Image_Icon/logo.png";

const AdminDashboard = () => {
  const { user } = useAuth();
  return (
    <div className="flex bg-gray-100 h-screen">
      <div className=" fixed -inset-0 bg-white w-80">
        <div className="my-4 px-6">
          <Link to="/">
            <img className="w-48 " src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex flex-col px-6 space-y-4 mt-10">
          <NavLink
            to="/admin-dashboard"
            className={(navInfo) =>
              ` ${
                navInfo.isActive
                  ? "text-pink-600 font-semibold "
                  : "font-medium  "
              } text-xl`
            }
          >
            Order List
          </NavLink>
          <NavLink
            to="add-service"
            className={(navInfo) =>
              ` ${
                navInfo.isActive
                  ? "text-pink-600 font-semibold "
                  : "font-medium  "
              } text-xl`
            }
          >
            Add Service
          </NavLink>
          <NavLink
            to="make-admin"
            className={(navInfo) =>
              ` ${
                navInfo.isActive
                  ? "text-pink-600 font-semibold "
                  : "font-medium  "
              } text-xl`
            }
          >
            Make Admin
          </NavLink>
          <NavLink
            to="manage-service"
            className={(navInfo) =>
              ` ${
                navInfo.isActive
                  ? "text-pink-600 font-semibold "
                  : "font-medium  "
              } text-xl`
            }
          >
            Manage Services
          </NavLink>
        </div>
      </div>
      <div className="flex-1 ml-80 ">
        <div className="flex bg-white p-4 justify-between">
          <h4 className="text-2xl font-semibold">Order List</h4>
          <h4 className="text-2xl font-semibold">{user.displayName}</h4>
        </div>
        <div className="m-5 rounded-2xl bg-white p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
