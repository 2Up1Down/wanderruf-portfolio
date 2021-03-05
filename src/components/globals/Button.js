import styled from "styled-components";

import Theme from "../../styles/Theme";
import { setTransition } from "../../styles/Setters";
import { media } from "./../../styles/Setters";

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
  cursor: pointer;
  outline: none;
  border: 2px solid transparent;
  width: 100%;
  background: ${Theme.color.primary};
  color: ${Theme.color.mainWhite};

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

  &:hover {
    ${setTransition()};
    background: ${Theme.color.primary_light};
  }

  ${media.md`
    width: auto;
  `}
`;

export default Button;
