import React from "react";

import { Hero, Portfolio } from "../../components/";
// import Player from "../../components/temp/Player";
import InfoSection from "../../components/InfoSection/InfoSection";
import { HomeObjOne } from "./Data";
import Services from "./../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection {...HomeObjOne} id="about" />
      <Services />
      <Portfolio />
    </>
  );
};

export default Home;
