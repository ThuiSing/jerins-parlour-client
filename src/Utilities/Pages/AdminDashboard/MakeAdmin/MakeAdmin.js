import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-medium" htmlFor="title">
            Service Title
          </label>
          <div className="md:w-1/2 flex items-center h-12 mt-2">
            <input
              id="title"
              type="email"
              className="w-full border border-gray-200 px-2 h-full outline-none"
              {...register("email", { required: true })}
              placeholder="Enter Email"
            />
            <input
              className=" w-28 bg-pink-500 text-white h-full "
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
