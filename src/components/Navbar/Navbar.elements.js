import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

import { Container } from "../../styles/Global";
import Theme from "./../../styles/Theme";
import { setTransition } from "../../styles/Setters";

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

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  position: absolute;
  left: ${({ visible }) => (visible ? 0 : "-100%")};
  opacity: 1;
  ${setTransition()};
  background: dodgerblue;

  @media screen and (min-width: 960px) {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: ${Theme.color.mainWhite};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      ${setTransition()};
    }
  }
`;
