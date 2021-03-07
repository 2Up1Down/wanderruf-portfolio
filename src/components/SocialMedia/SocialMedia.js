import React from "react";

import { Heading } from "../globals/Heading";
import {
  SocialIconWrapper,
  SocialMediaWrapper,
  SocialMediaFeed,
  SocialMediaDescription,
} from "./SocialMedia.element";
import { CuratorFeed } from "..";
import SocialLinks from "../SocialLinks/SocialLinks";

const SocialMedia = ({ headline, description }) => {
  return (
    <SocialMediaWrapper id="socialmedia">
      <Heading title={headline} position="center" color="white" />
      <SocialMediaDescription>{description}</SocialMediaDescription>
      <SocialIconWrapper>
        <SocialLinks />
      </SocialIconWrapper>
      <SocialMediaFeed>
        <CuratorFeed />
      </SocialMediaFeed>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
