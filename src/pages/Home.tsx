import { Row } from "antd";
import React from "react";
import Banner from "../components/common-comp/dynamic/banner/Banner";
import Faqs from "../components/common-comp/dynamic/faqs/Faqs";
import Packages from "../components/common-comp/dynamic/packages/Packages";
import AboutUs from "../components/common-comp/static/about-us/AboutUs";

const Home = () => {
  return (
    <>
      <Banner />
     <Packages />
       <AboutUs />
      <Faqs />  

    </>
  );
};
export default Home;
