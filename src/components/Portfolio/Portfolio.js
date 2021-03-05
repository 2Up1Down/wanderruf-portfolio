import React from "react";
import JuicerFeed from "react-juicer-feed";

import { Heading } from "./../globals/Heading";
import {
  HeadingWrapper,
  PortfolioWrapper,
  PortfolioFeed,
} from "./Portfolio.element";

const Portfolio = () => {
  return (
    <PortfolioWrapper id="portfolio">
      <HeadingWrapper>
        <Heading title="Portfolio" />
      </HeadingWrapper>
      <PortfolioFeed>
        <JuicerFeed feedId="wanderruf" />
      </PortfolioFeed>
    </PortfolioWrapper>
  );
};

export default Portfolio;

{
  /* <FooterWrapper>
<Container>
  <FooterContactInformation>
    <FooterContact>
      <FooterTitle>Contact</FooterTitle>
      <FooterItems>
        <ContactLink href="mailto:wendelin.steiner@gmail.com">
          wendelin.steiner@gmail.com
        </ContactLink>
      </FooterItems>
    </FooterContact>
    <FooterSocial>
      <FooterTitle>Social Media</FooterTitle>
      <FooterItems>
        <SocialLinks />
      </FooterItems>
    </FooterSocial>
  </FooterContactInformation>

  <FooterCopyright>
    wanderruf &copy; {today.getFullYear()}
  </FooterCopyright>
</Container>
</FooterWrapper> */
}
