import React from "react";
import Container from "../../components/globals/Container";

import { Form } from "./../../components";
import { ContactWrapper } from "./Contact.elements";

const Contact = () => {
  return (
    <ContactWrapper>
      <Container>
        <Form action="https://formspree.io/f/xjvpzqzz" method="POST"></Form>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
