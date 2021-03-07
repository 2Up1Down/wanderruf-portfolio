import React from "react";

import { Heading } from "../globals/Heading";
import { SocialMediaWrapper, SocialMediaFeed } from "./SocialMedia.element";
import { CuratorFeed } from "..";

const SocialMedia = () => {
  return (
    <SocialMediaWrapper id="socialmedia">
      <Heading title="Social Media" position="center" color="white" />
      <SocialMediaFeed>
        <CuratorFeed />
      </SocialMediaFeed>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
