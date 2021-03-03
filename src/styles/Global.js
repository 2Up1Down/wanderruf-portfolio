import styled, { createGlobalStyle } from "styled-components";
import "typeface-archivo-narrow";
import "typeface-merriweather";
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html {font-size: 100%;} /*16px*/

body {
  font-family: 'Archivo Narrow', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${Theme.color.mainBlack};
  /* margin: 0; */
}

p, a, li, span, small, button {
  font-family: 'Archivo Narrow', sans-serif;
}

/* values from https://type-scale.com/ */
h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Merriweather', serif;
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
