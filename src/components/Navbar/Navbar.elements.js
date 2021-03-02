import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

import { Container } from "../../styles/Global";
import Theme from "./../../styles/Theme";
import { setTransition } from "../../styles/Setters";

const NAV_HEIGHT = "5rem";

export const Nav = styled.nav`
  background: ${Theme.color.mainBlack};
  height: ${NAV_HEIGHT};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
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
  display: flex;
  justify-content: center;
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
  position: absolute;
  top: ${NAV_HEIGHT};
  left: ${({ visible }) => (visible ? 0 : "-100%")};
  ${setTransition()};
  background: ${Theme.color.mainBlack};

  @media screen and (min-width: 960px) {
    position: static;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    list-style: none;
    text-align: center;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  text-decoration: none;

  @media screen and (min-width: 960px) {
    width: auto;
    height: ${NAV_HEIGHT};
    ${setTransition()};
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${Theme.color.secondary};
    }
  }
`;

export const NavLink = styled(Link)`
  color: ${Theme.color.mainGrey};
  text-decoration: none;
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
  ${setTransition()};

  &:hover {
    color: ${Theme.color.mainWhite};
  }

  @media screen and (min-width: 960px) {
    display: flex;
    align-items: center;
    padding: 0.5rem 1.25rem;
    height: 100%;
  }
`;
