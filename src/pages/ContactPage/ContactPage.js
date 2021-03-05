import React from "react";
// import Hero from "./../../components";
import { Form } from "../../components";

const ContactPage = () => {
  return (
    <>
      hello from contact
      <h1>hello from contact</h1>
      {/* <Hero /> */}
      <Form action="https://formspree.io/f/xjvpzqzz" method="POST"></Form>
    </>
  );
};

export default ContactPage;
