import React from "react";

const BookingList = () => {
  const data = [
    {
      name: "anti age face treatment",
      img: "icons",
      status: "pending",
      description: "lorem lorem ipsum hello hey dummy text",
    },
    {
      name: "anti age face treatment",
      img: "icons",
      status: "pending",
      description: "lorem lorem ipsum hello hey dummy text",
    },
    {
      name: "anti age face treatment",
      img: "icons",
      status: "pending",
      description: "lorem lorem ipsum hello hey dummy text",
    },
    {
      name: "anti age face treatment",
      img: "icons",
      status: "done",
      description: "lorem lorem ipsum hello hey dummy text",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {data.map((list, ind) => (
        <div key={ind} className="bg-white rounded-xl p-5">
          <div className="flex justify-between items-center">
            {/* <img src="" alt="" /> */}
            <h1>img </h1>
            <h3
              className={` w-24 text-center font-medium py-2 ${
                list.status === "pending" && "bg-red-200 text-red-800"
              }  ${list.status === "done" && "bg-green-200 text-green-800"} `}
            >
              {list.status}
            </h3>
          </div>
          <div className="my-3">
            <h2 className="text-2xl font-semibold">{list.name}</h2>
            <p className="text-gray-600 mt-2">{list.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
