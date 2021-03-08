import styled from "styled-components";

import Theme from "../../styles/Theme";

export const SocialMediaWrapper = styled.section`
  background: ${Theme.color.mainBlack};
`;

export const SocialMediaFeed = styled.div``;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Theme.color.mainWhite};
`;

export const SocialMediaDescription = styled.p`
  text-align: center;
  white-space: pre-line;
`;

export const SocialIconWrapper = styled.div`
  display: grid;
  place-items: center;
  margin: 1.5rem 0;
`;
