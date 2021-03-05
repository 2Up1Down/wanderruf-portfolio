import React from "react";
import styled from "styled-components";

import { Underline } from "./Underline";
import Theme from "./../../styles/Theme";

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => {
    if (props.position === "left") return "flex-start";
    if (props.position === "center") return "center";
    if (props.position === "right") return "flex-end";
    return "flex-start";
  }};
  color: ${(props) => {
    if (props.color === "white") return Theme.color.mainWhite;
    if (props.color === "black") return Theme.color.mainBlack;
    return Theme.color.mainBlack;
  }};
`;

const Title = styled.h2``;

export const Heading = ({ color, position, title = "" }) => {
  return (
    <HeadingWrapper color={color} position={position}>
      <Title>{title}</Title>
      <Underline />
    </HeadingWrapper>
  );
};
