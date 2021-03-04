import React from "react";

import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receiv the latest news and trens
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
      </FooterSubscription>
    </FooterContainer>
  );
};

export default Footer;
