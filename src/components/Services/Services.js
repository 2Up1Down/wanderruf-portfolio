import React from "react";

import {
  ServicesContainer,
  ServiceContainer,
  ServicesWrapper,
} from "./Services.elements";
import Container from "./../globals/Container";
import { Heading } from "./../globals/Heading";

const Services = () => {
  return (
    <ServicesWrapper id="services">
      <Container>
        <Heading title="Services" />
        <ServicesContainer>
          <ServiceContainer>Service 1</ServiceContainer>
        </ServicesContainer>
      </Container>
    </ServicesWrapper>
  );
};

export default Services;
