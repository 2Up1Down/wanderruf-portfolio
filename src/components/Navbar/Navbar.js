import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import Theme from "../../styles/Theme";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon,
} from "./Navbar.elements";

const Navbar = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  const handleClick = () => setVisibleNav(!visibleNav);

  return (
    <>
      <IconContext.Provider value={{ color: Theme.color.mainWhite }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              WANDERRUF
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {visibleNav ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} visible={visibleNav}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Contact</NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;