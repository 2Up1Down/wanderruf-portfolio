import React from "react";

import {
  FooterWrapper,
  FooterContact,
  FooterContactInformation,
  ContactLink,
  FooterCopyright,
  FooterItems,
  FooterSocial,
  FooterTitle,
} from "./Footer.elements";
import Container from "./../globals/Container";
import { SocialLinks } from "../";

const today = new Date();

const Footer = () => {
  return (
    <FooterWrapper>
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
    </FooterWrapper>
  );
};

export default Footer;
