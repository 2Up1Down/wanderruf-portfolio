import styled from "styled-components";

import Theme from "../../styles/Theme";
import { setTransition } from "../../styles/Setters";
import { media } from "./../../styles/Setters";

export const SocialLinksWrapper = styled.div`
  width: 10rem;
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  // gap currently not working on Safari Browser
  /* gap: 2.5rem;
  ${media.md`
    gap: 1.25rem;
  `}; */
`;

export const SocialItem = styled.li`
  list-style: none;
`;

export const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${Theme.color.mainWhite};

  &:hover {
    color: ${Theme.color.secondary};
    ${setTransition()}
  }
`;
