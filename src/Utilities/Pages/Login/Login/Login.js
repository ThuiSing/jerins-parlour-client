import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../../Image_Icon/logo.png";
import google from "../../../Image_Icon/Icon/google.png";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { err, logInByGoogle, logInUsingEmail } = useAuth();
  let navigate = useNavigate();
  const location = useLocation();
  const destination = location.state?.from || "/";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    logInUsingEmail(data.email, data.password, navigate, destination);
  };
  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div className="border-2 border-gray-400 lg:w-2/6 md:2/5 p-11 rounded-md">
        <div>
          <Link to="/">
            <img className="mx-auto w-64" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-3xl font-semibold mb-5">Log in here</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
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
            <p className="text-red-500 font-semibold text-md">{err}</p>
            <input
              type="submit"
              value="login"
              className="bg-pink-500 w-full p-3 text-white "
            />
          </form>
          <Link to="/register">
            <h3 className="mt-7 font-medium text-pink-400 hover:text-pink-700 transition-all">
              Don't Have an Account ? Register here
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
        <div
          onClick={() => logInByGoogle(navigate, destination)}
          className="flex  justify-center items-center relative mt-10 border-2 rounded-full py-3 cursor-pointer"
        >
          <img className="absolute left-2" width="30" src={google} alt="" />
          <h3 className="font-medium">Continue With Google</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
