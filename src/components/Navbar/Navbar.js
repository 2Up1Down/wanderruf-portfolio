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
      <IconContext.Provider value={{ color: Theme.color.mainGrey }}>
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
                <NavLink to="/#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
