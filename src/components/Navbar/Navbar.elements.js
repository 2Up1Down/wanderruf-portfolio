import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

import { Container } from "../../styles/Global";
import Theme from "./../../styles/Theme";

export const Nav = styled.nav`
  background: #101522;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  /* ${Container}// not yet sure why this is needed */
`;

export const NavLogo = styled(Link)`
  color: ${Theme.color.mainWhite};
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  justify-self: flex-start;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 50%);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;
