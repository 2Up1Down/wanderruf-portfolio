import React from "react";
import styled from "styled-components";

import { Underline } from "./Underline";

const Title = styled.h2``;

export const Heading = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Underline />
    </>
  );
};
