import styled from "styled-components";

import Theme from "../../styles/Theme";
import { setBorder, setTransition } from "../../styles/Setters";

const btnSize = {
  small: "0.25rem 1.0rem",
  normal: "0.5rem 1.5rem;",
  big: "0.75rem 2.5rem;",
};

const fontSize = {
  sm: "0.8rem",
  md: "1rem;",
  lg: "1.2rem;",
};

const Button = styled.button`
  border-radius: 4px;
  white-space: nowrap;
  text-transform: capitalize;
  margin: 1rem 0;
  cursor: pointer;
  outline: none;
  border: none;
  width: 100%;

  // Idea from https://stackoverflow.com/questions/49181959/react-styled-components-3-button-sizes
  // Example here https://codesandbox.io/s/735ppo790x
  padding: ${(props) => {
    if (props.small) return btnSize.small;
    if (props.big) return btnSize.big;
    return btnSize.normal;
  }};
  font-size: ${(props) => {
    if (props.sm) return fontSize.sm;
    if (props.lg) return fontSize.lg;
    return fontSize.md;
  }};
  background: ${(props) => {
    if (props.primary) return Theme.color.primary;
    if (props.secondary) return Theme.color.secondary;
    return Theme.color.primary;
  }};
  color: ${Theme.color.mainWhite};

  &:hover {
    ${setTransition()};
    background: ${Theme.color.primary_light};
  }

  @media screen and (min-width: 960px) {
    width: auto;
  }
`;

export default Button;
