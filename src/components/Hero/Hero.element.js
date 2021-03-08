import styled from "styled-components";

import Theme from "../../styles/Theme";
import { media } from "./../../styles/Setters";

// Codepen example: https://codepen.io/remersonc/pen/JXyvbZ
export const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const HeroInfo = styled.div`
  width: 90vw;
  text-align: center;
  z-index: 2;
  color: ${Theme.color.mainWhite};
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-size: 2rem;
  span {
    display: inline-block;
    font-family: "Dancing Script", serif;
    margin-top: 2rem;
    letter-spacing: 0rem;
    text-transform: capitalize;
  }

  ${media.md`
    font-size: 3rem;
  `};

  ${media.lg`
    font-size: 4rem;
  `};
`;
