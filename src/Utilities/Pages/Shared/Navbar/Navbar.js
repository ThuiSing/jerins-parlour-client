import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Image_Icon/logo.png";

const Navbar = () => {
  const { user, LogOutUser } = useAuth();
  return (
    <header className="fixed top-0 w-full bg-primary z-50">
      <div className="container mx-auto flex items-center py-6 ">
        <div>
          <Link to="/">
            <img width="150" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="ml-auto flex items-center justify-between w-1/3 mr-10">
          <NavLink
            to="/"
            className={(navInfo) =>
              navInfo.isActive ? "font-bold" : "font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={(navInfo) =>
              navInfo.isActive ? "font-bold" : "font-medium"
            }
          >
            Our Portfolio
          </NavLink>
          <NavLink
            to="/teams"
            className={(navInfo) =>
              navInfo.isActive ? "font-bold" : "font-medium"
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to="/contact-us "
            className={(navInfo) =>
              navInfo.isActive ? "font-bold" : "font-medium"
            }
          >
            Contact us
          </NavLink>
          <NavLink
            to="/dashboard "
            className={(navInfo) =>
              navInfo.isActive ? "font-bold" : "font-medium"
            }
          >
            Dashboard
          </NavLink>
        </div>
        <div>
          {user.email ? (
            <div className="font-semibold text-pink-600 flex justify-between items-center">
              <h3>{user.displayName}</h3>
              <button
                onClick={LogOutUser}
                className=" ml-3 bg-pink-500 text-white px-10 py-2 rounded-md"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-pink-500 text-white px-10 py-2 rounded-md">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
