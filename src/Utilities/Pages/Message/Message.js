import React from "react";
import { useForm } from "react-hook-form";

const Message = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-primary py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold md:w-1/3 mx-auto text-gray-800">
          Let us handle your project, professionally
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 mx-auto">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <input
              className="w-full p-3 outline-none border"
              {...register("firstName", { required: true })}
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              className="w-full p-3 outline-none border"
              {...register("LastName", { required: true })}
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              className="w-full p-3 outline-none border"
              type="email"
              {...register("Email Address", { required: true })}
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              type="number"
              className="w-full p-3 outline-none border"
              {...register("Phone Number", { required: true })}
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="mt-6">
          <textarea
            rows="8"
            type="number"
            className="w-full p-3 outline-none border"
            {...register("message", { required: true })}
            placeholder="Your Message"
          />
        </div>
        <div className="text-center mt-7">
          <input
            className="bg-pink-500 text-white px-8 py-3"
            type="submit"
            value="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default Message;
