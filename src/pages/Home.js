import React from "react";

import Header from "../components/Header";

import Slider from "../components/Home/Slider";
import Maintenance from "../components/Home/Maintenance";
import CarRepair from "../components/Home/CarRepair";
import Service from "../components/Home/Service";
import Contact from "../components/Home/Contact";
import FooterTop from "../components/Home/FooterTop";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      <Maintenance />
      <CarRepair />
      <Service />
      <Contact />
      <FooterTop />
      <Footer />
    </div>
  );
};

export default Home;
