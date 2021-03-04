import React from "react";
import JuicerFeed from "react-juicer-feed";

import Hero from "../../components/Hero/Hero";
// import Player from "../../components/temp/Player";
import InfoSection from "../../components/InfoSection/InfoSection";
import { HomeObjOne } from "./Data";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection {...HomeObjOne} />
      <JuicerFeed feedId="wanderruf" />
    </>
  );
};

export default Home;
