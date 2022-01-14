import React from "react";
import HandleScreen from "../../HandleScreen/HandleScreen";
import Message from "../../Message/Message";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Services from "../../Shared/Navbar/Services/Services";
import Testomonials from "../../Testomonials/Testomonials";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services showAll={false} />
      <HandleScreen />
      <Testomonials />
      <Message />
      <Footer />
    </>
  );
};

export default Home;
