import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="font-medium" htmlFor="title">
              Service Title
            </label>
            <input
              id="title"
              className="w-full p-2 border border-gray-200 mt-2 outline-none"
              {...register("title", { required: true })}
              placeholder="Enter Title"
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="img">
              Image Url
            </label>
            <input
              id="img"
              className="w-full p-2 border border-gray-200 mt-2 outline-none"
              {...register("img", { required: true })}
              placeholder="Enter Img Url"
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              rows="7"
              id="Description"
              className="w-full p-2 border border-gray-200 mt-2 outline-none"
              {...register("description", { required: true })}
              placeholder="Enter Description"
            />
          </div>
        </div>
        <input
          className="bg-pink-500 text-white px-8 py-3 mt-6"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddService;
