import MediaQuery from "react-responsive";
import { HamburgerMenu, Logo, NavigationDesktop } from "../elements/index";
export default function Navbar() {
  return (
    <>
      <Logo />
      <MediaQuery maxWidth={992}>
        <HamburgerMenu />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <NavigationDesktop />
      </MediaQuery>
    </>
  );
}
