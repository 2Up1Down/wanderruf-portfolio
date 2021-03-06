import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../images/logo-wanderruf.svg";

import Theme from "../../styles/Theme";
import {
  Nav,
  NavbarContainer,
  NavButton,
  NavHashLink,
  NavIcon,
  NavLogo,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavBtnLink,
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
              <NavIcon src={logo} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {visibleNav ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} visible={visibleNav}>
              <NavItem>
                <NavHashLink to="/#about" smooth>
                  About
                </NavHashLink>
              </NavItem>
              <NavItem>
                <NavHashLink to="/#socialmedia" smooth>
                  Social Media
                </NavHashLink>
              </NavItem>
              <NavItemBtn>
                <NavBtnLink to="/contact">
                  <NavButton>Contact</NavButton>
                </NavBtnLink>
              </NavItemBtn>
              <NavSocialWrapper>
                <SocialLinks />
              </NavSocialWrapper>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
