import React from "react";
import Button from "../globals/Button";
import {
  FormGroup,
  FormInput,
  FormTextarea,
  FormWrapper,
} from "./Form.element";

const Form = ({ action = "#", method = "POST" }) => {
  return (
    <FormWrapper action={action} method={method}>
      <FormGroup>
        <FormInput name="name" placeholder="Name" type="text" />
        <FormInput name="email" placeholder="Email" type="email" />
        <FormTextarea name="message" placeholder="Message" rows="5" />
        <Button type="submit" big>
          Submit here
        </Button>
      </FormGroup>
    </FormWrapper>
  );
};

export default Form;
