import React from "react";
import JuicerFeed from "react-juicer-feed";

import { Heading } from "./../globals/Heading";
import { PortfolioWrapper, PortfolioFeed } from "./Portfolio.element";
import { CuratorFeed } from "..";

const Portfolio = () => {
  return (
    <PortfolioWrapper id="portfolio">
      <Heading title="Portfolio" position="center" color="white" />
      <PortfolioFeed>
        Curatorfeed:
        <CuratorFeed />
        Juicerfeed:
        <JuicerFeed feedId="wanderruf" />
      </PortfolioFeed>
    </PortfolioWrapper>
  );
};

export default Portfolio;
