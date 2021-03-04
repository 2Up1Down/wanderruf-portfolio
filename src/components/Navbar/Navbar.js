import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import Theme from "../../styles/Theme";
import Button from "./../globals/Button";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavBtnLink,
  NavLink,
  NavSocialWrapper,
  MobileIcon,
} from "./Navbar.elements";
import { SocialLinks } from "./../";

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
                <NavLink to="/#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItemBtn>
                <NavBtnLink to="/contact">
                  <Button primary>Contact</Button>
                </NavBtnLink>
              </NavItemBtn>
              {visibleNav && (
                <NavSocialWrapper>
                  <SocialLinks />
                </NavSocialWrapper>
              )}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
