import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Image_Icon/logo.png";
import google from "../../../Image_Icon/Icon/google.png";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { registerUserEmail } = useAuth();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.role = "member";
    if (data.password !== data.password2) {
      setError(true);
    } else {
      registerUserEmail(
        data.email,
        data.password,
        data.name,
        navigate,
        data.role
      );
      setError(false);
    }
  };
  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div className="border-2 border-gray-400 lg:w-2/6 md:2/5 py-8 px-10 rounded-md">
        <div>
          <Link to="/">
            <img className="mx-auto w-64" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-3xl font-semibold mb-5">Register here</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
            <div>
              <input
                className="w-full py-3 border-b-2 outline-none"
                {...register("name", { required: true })}
                placeholder="Enter your Name"
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full py-3 border-b-2 outline-none"
                {...register("email", { required: true })}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full py-3 border-b-2 outline-none"
                {...register("password", { required: true })}
                placeholder="Enter your password"
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full py-3 border-b-2 outline-none"
                {...register("password2", { required: true })}
                placeholder="Retype your password"
              />
            </div>
            <p className="text-red-500 font-semibold text-md">
              {error && "Not Matching Password"}
            </p>
            <input
              type="submit"
              value="Register"
              className="bg-pink-500 w-full p-3 text-white "
            />
          </form>
          <Link to="/login">
            <h3 className="mt-7 font-medium text-pink-400 hover:text-pink-700 transition-all">
              Already Have an Account ? Login here
            </h3>
          </Link>
        </div>
        <div className="text-center relative mt-5">
          <h3
            className="inline-block bg-white text-xl  px-2
          font-medium relative z-10"
          >
            Or
          </h3>
          <div className="w-full bg-gray-700 absolute top-1/2 h-1"></div>
        </div>
        <div className="flex  justify-center items-center relative mt-10 border-2 rounded-full py-3 cursor-pointer">
          <img className="absolute left-2" width="30" src={google} alt="" />
          <h3 className="font-medium">Continue With Google</h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
