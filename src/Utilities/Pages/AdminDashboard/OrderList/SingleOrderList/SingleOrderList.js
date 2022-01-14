import React from "react";

const SingleOrderList = ({ service }) => {
  const { name, email, serviceName, status, payWith } = service;

  const statusStyle = (e) => {
    if (e === "pending") {
      return "text-red-500";
    } else if (e === "on going") {
      return "text-yellow-500";
    } else if (e === "done") {
      return "text-green-500";
    }
  };
  return (
    <tr className="h-10">
      <td>{name}</td>
      <td>{email}</td>
      <td>{serviceName}</td>
      <td>{payWith}</td>
      <td className={` ${statusStyle(status)} font-semibold`}> {status}</td>
    </tr>
  );
};

export default SingleOrderList;
