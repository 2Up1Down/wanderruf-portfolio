import React from "react";
import { Helmet } from "react-helmet";

import { Hero, SocialMedia } from "../../components";
// import Player from "../../components/temp/Player";
import InfoSection from "../../components/InfoSection/InfoSection";
import MetaDecorator from "../../components/SEO/MetaDecorator";
import { HomeObjOne, SocialMediaData, MetaData } from "./Data";

const Home = () => {
  return (
    <>
      <MetaDecorator {...MetaData} />
      <Hero />
      <InfoSection {...HomeObjOne} id="about" />
      <SocialMedia {...SocialMediaData} />
    </>
  );
};

export default Home;
