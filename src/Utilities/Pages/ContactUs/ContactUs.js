import React from "react";
import Message from "../Message/Message";
import Navbar from "../Shared/Navbar/Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
        <Message />
      </div>
    </div>
  );
};

export default ContactUs;
