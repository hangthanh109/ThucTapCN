import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact_Home/Contact";
import Footer from "../Footer/Footer";
import Group from "../Group/Group";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div>
      <Banner />
      <Group />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
