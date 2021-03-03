import React from "react";
import Hero from "../../components/Hero";
import CTA from "../../components/CTA";
import JuicerFeed from "react-juicer-feed";
import Player from "../../components/Player";
import InfoSection from "../../components/InfoSection/InfoSection";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection lightBg />
      <InfoSection />
      <CTA />
      <Player />
      <JuicerFeed feedId="wanderruf" />
    </>
  );
};

export default Home;
