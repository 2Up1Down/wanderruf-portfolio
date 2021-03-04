import styled, { css } from "styled-components";

import Theme from "./../../styles/Theme";

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 35rem;
  box-shadow: ${Theme.shadow.light};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const baseInputStyles = css`
  background: ${Theme.color.grey_1};
  color: ${Theme.color.mainBlack};
  padding: 0.75rem 1rem;
  width: 100%;
  border-radius: ${Theme.radius};
  outline: none;
  border: none;
  margin-bottom: 1.25rem;
  letter-spacing: ${Theme.spacing};

  &::placeholder {
    color: ${Theme.color.grey_5};
    letter-spacing: ${Theme.spacing};
  }
`;

export const FormInput = styled.input`
  ${baseInputStyles};
`;

export const FormTextarea = styled.textarea`
  ${baseInputStyles};
  resize: none;
`;
