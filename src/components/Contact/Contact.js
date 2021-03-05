import React from "react";
import Container from "../globals/Container";

import { Form } from "..";
import { ContactWrapper, FormWrapper } from "./Contact.elements";
import { Heading } from "./../globals/Heading";

const Contact = () => {
  return (
    <ContactWrapper>
      <Container>
        <Heading title="Get in Touch" position="center" color="white" />
        <FormWrapper>
          <Form action="https://formspree.io/f/xjvpzqzz" method="POST"></Form>
        </FormWrapper>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
