import styled, { css } from "styled-components";

import Theme from "./../../styles/Theme";
import { media } from "./../../styles/Setters";

// TODO: Maybe use footer tag here
export const FooterWrapper = styled.footer`
  background: ${Theme.color.mainBlack};
  color: ${Theme.color.mainWhite};
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 3rem;

  max-width: 600px;
  margin: 0 auto;

  ${media.md`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `}
`;

const baseContactStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.md`
    justify-content: flex-start;
    align-items: flex-start;
  `}
`;

export const FooterContact = styled.div`
  ${baseContactStyles};
`;

export const FooterSocial = styled.div`
  ${baseContactStyles};
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: ${Theme.color.mainWhite};

  &:hover {
    color: ${Theme.color.secondary};
  }
`;

export const FooterTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.75rem;
`;

export const FooterItems = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterCopyright = styled.div`
  color: ${Theme.color.grey_2};
  font-size: 0.75rem;
  margin-top: 3rem;
  text-align: center;
`;
