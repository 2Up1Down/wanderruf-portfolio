import React from "react";

import { Hero, SocialMedia } from "../../components";
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
