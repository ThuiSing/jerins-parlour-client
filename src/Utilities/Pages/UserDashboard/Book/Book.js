import React from "react";
import { useForm } from "react-hook-form";

const Book = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 mt-5 md:w-1/2"
      >
        <div>
          <input
            className="w-full p-3 rounded-md outline-none"
            {...register("name", { required: true })}
            placeholder="Your name"
          />
        </div>
        <div>
          <input
            type="email"
            className="w-full p-3 rounded-md outline-none"
            {...register("email", { required: true })}
            placeholder="Your Email"
          />
        </div>
        <div>
          <input
            className="w-full p-3 rounded-md outline-none"
            {...register("bookedItem", { required: true })}
            placeholder="Item Name"
          />
        </div>

        <input
          type="submit"
          className="bg-pink-500 px-10 py-3 text-white rounded-md"
          value="Pay"
        />
      </form>
    </>
  );
};

export default Book;
