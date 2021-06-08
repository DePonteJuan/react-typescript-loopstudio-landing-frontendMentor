import React from "react";
import MediaQuery from "react-responsive";
import {NavbarWrapper} from "./navbar.styles"
import { HamburgerMenu, Logo, NavigationDesktop } from "../elements/index";
export default function Navbar() {
  const position = "fixed";
  return (
    <NavbarWrapper>
      <Logo position={position} />
      <MediaQuery maxWidth={992}>
        <HamburgerMenu />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <NavigationDesktop position="fixed"/>
      </MediaQuery>
    </NavbarWrapper>
  );
}
