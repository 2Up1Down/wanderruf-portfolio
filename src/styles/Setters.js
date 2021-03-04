import { css } from "styled-components";
import Theme from "./Theme";

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black",
} = {}) => {
  return `border: ${width} ${style} ${color}`;
};

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition: ${property} ${time} ${timing}`;
};

export const media = Object.keys(Theme.sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${Theme.sizes[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
