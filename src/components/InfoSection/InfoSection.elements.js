import styled from "styled-components";

import Theme from "../../styles/Theme";
import { media } from "./../../styles/Setters";

export const InfoSec = styled.section`
  color: ${Theme.color.mainWhite};
  padding: 10rem 0;
  background: ${({ colorBg }) => {
    if (colorBg === "white") return Theme.color.mainWhite;
    if (colorBg === "black") return Theme.color.mainBlack;
    if (colorBg === "lightGrey") return Theme.color.grey_2;
    return Theme.color.mainWhite;
  }};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${media.md`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const InfoColumn = styled.div`
  /* margin-bottom: 2rem; */
  /* max-width: 100%; */
  /* flex-basis: 100%; */

  align-self: ${({ center }) => (center ? "center" : "normal")};

  ${media.md`
  flex: 1;
    /* margin-bottom: 15px;
    padding: 0 15px;
    flex-basis: 50%;
    max-width: 50%; */
  `}
`;

export const TextWrapper = styled.div`
  text-align: left;

  ${media.md`
  /* max-width: 540px;
padding-top: 0;
padding-bottom: 60px; */
`}
`;

export const Description = styled.div`
  white-space: pre-line;
  /* color: ${Theme.color.mainWhite};
font-size: 1.2rem;
line-height: 1rem;
letter-spacing: 1.4px;
margin-bottom: 1rem; */
`;

export const Heading = styled.h2`
  margin-top: 0rem;
  /* color: ${Theme.color.grey_2}; */
`;

export const Subtitle = styled.h3`
  /* max-width: 440px;
  margin-bottom: 2rem;
  color: ${Theme.color.mainWhite}; */
`;

export const ImgWrapper = styled.div`
  /* max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")}; */
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  object-fit: contain;
  /* vertical-align: middle; */
  /* display: inline-block; */
  /* max-height: 500px; */
`;
