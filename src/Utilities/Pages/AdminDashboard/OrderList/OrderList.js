import React from "react";
import { useState } from "react";
import SingleOrderList from "./SingleOrderList/SingleOrderList";

const servicess = [
  {
    name: "thui sing",
    email: "thui0@gmail.com",
    serviceName: "Skin care",
    payWith: "none",
    status: "pending",
  },
  {
    name: "thui sing",
    email: "thui0@gmail.com",
    serviceName: "Skin care",
    payWith: "none",
    status: "on going",
  },
  {
    name: "thui sing",
    email: "thui0@gmail.com",
    serviceName: "Skin care",
    payWith: "none",
    status: "done",
  },
];

const OrderList = () => {
  const [services, setServices] = useState([]);

  return (
    <div>
      <table className="table-auto min-w-full text-left">
        <thead className="bg-gray-100 h-10">
          <tr className="">
            <th>Name</th>
            <th>Email id</th>
            <th>Service</th>
            <th>Pay With</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {servicess.map((service, ind) => (
            <SingleOrderList key={ind} service={service} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
