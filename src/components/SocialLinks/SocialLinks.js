import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import {
  SocialLinksWrapper,
  SocialList,
  SocialItem,
  SocialLink,
} from "./SocialLinks.elements";

const data = [
  {
    id: "1",
    url: "https://www.instagram.com/wanderruf/",
    icon: <FaInstagram />,
  },
  {
    id: "2",
    url: "https://www.linkedin.com/in/wendelinsteiner/",
    icon: <FaLinkedinIn />,
  },
  {
    id: "3",
    url: "https://www.youtube.com/channel/UC5cN1-g6FiRuB_Ys_OBzocw",
    icon: <FaYoutube />,
  },
];

const SocialLinks = () => {
  const links = data.map((link) => {
    return (
      <SocialItem key={link.id}>
        <SocialLink href={link.url}>{link.icon}</SocialLink>
      </SocialItem>
    );
  });

  return (
    <SocialLinksWrapper>
      <SocialList>{links}</SocialList>
    </SocialLinksWrapper>
  );
};

export default SocialLinks;
