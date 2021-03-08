import React from "react";

import { Hero, SocialMedia } from "../../components";
// import Player from "../../components/temp/Player";
import InfoSection from "../../components/InfoSection/InfoSection";
import { HomeObjOne, SocialMediaData } from "./Data";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection {...HomeObjOne} id="about" />
      <SocialMedia {...SocialMediaData} />
    </>
  );
};

export default Home;
