import React from "react";
import Hero from "./../components/Hero";
import CTA from "./../components/CTA";
import JuicerFeed from "react-juicer-feed";
import Player from "../components/Player";

const Home = () => {
  return (
    <div>
      <Hero />
      <CTA />
      <Player />
      <JuicerFeed feedId="wanderruf" />
    </div>
  );
};

export default Home;
