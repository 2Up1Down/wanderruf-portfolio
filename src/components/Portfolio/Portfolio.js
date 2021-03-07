import React from "react";

import { Heading } from "./../globals/Heading";
import { PortfolioWrapper, PortfolioFeed } from "./Portfolio.element";
import { CuratorFeed } from "..";

const Portfolio = () => {
  return (
    <PortfolioWrapper id="portfolio">
      <Heading title="Portfolio" position="center" color="white" />
      <PortfolioFeed>
        <CuratorFeed />
      </PortfolioFeed>
    </PortfolioWrapper>
  );
};

export default Portfolio;
