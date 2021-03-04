import { createGlobalStyle } from "styled-components";

// TODO: Seems like typeface is deprecated, use fontsource later https://github.com/fontsource/fontsource
import "typeface-dancing-script";
import "typeface-raleway";
import Theme from "./Theme";

export const Fonts = {
  main: "'Raleway', sans-serif",
  handwriting: "'Dancing Script', serif",
};

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html {font-size: 100%;} /*16px*/

body {
  font-family: ${Fonts.main};
  font-weight: 400;
  line-height: 1.5;
  color: ${Theme.color.mainBlack};
  /* margin: 0; */
}

p, a, li, span, small, button {
  font-family: ${Fonts.main};

}

/* values from https://type-scale.com/ */
h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: ${Fonts.handwriting};
  font-weight: 700;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 4.209rem;
}

h2 {font-size: 3.157rem;}

h3 {font-size: 2.369rem;}

h4 {font-size: 1.777rem;}

h5 {font-size: 1.333rem;}


a:hover {
  text-decoration: none;
}
`;

export default GlobalStyle;
