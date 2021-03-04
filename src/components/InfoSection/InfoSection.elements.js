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
    flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
    justify-content: space-between;
    gap: 2rem;
  `}
  ${media.lg`
    gap: 4rem;
  `}
`;

export const InfoColumn = styled.div`
  ${media.md`
    flex: 1;
  `}
`;

export const TextWrapper = styled.div`
  text-align: left;
`;

export const Description = styled.div`
  white-space: pre-line;
  margin-bottom: 2.5rem;
`;

export const Heading = styled.h2`
  margin-top: 0rem;
  margin-bottom: 0.75rem;
`;

export const Subtitle = styled.h3``;

export const ImgWrapper = styled.div`
  display: flex;
`;

export const Img = styled.img`
  margin: 0 auto;
  padding-right: 0;
  border: 0;
  max-width: 100%;
  object-fit: contain;

  ${media.md`
    margin: 0;
    ${({ imgStart }) =>
      imgStart ? "margin-right: auto" : "margin-left: auto"};
`}
`;
