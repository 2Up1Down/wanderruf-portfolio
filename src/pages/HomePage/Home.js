import React from "react";
import JuicerFeed from "react-juicer-feed";

import Hero from "../../components/Hero/Hero";
import Player from "../../components/Player";
import InfoSection from "../../components/InfoSection/InfoSection";
import { HomeObjOne } from "./Data";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection {...HomeObjOne} />
      <InfoSection />
      <Player />
      <JuicerFeed feedId="wanderruf" />
    </>
  );
};

export default Home;
