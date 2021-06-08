import { Logo, NavigationDesktop } from "../elements";
import {
  FooterWrapper,
  LogoAndNavigation,
  FooterNavigation,
  IconsAndCopyright,
  Copyright,
  IconsList,
  Icon
} from "./footer.styles";

import {facebook, instagram,twitter,pinterest} from "../../images"

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <LogoAndNavigation>
          <Logo id="Logo"/>
          <FooterNavigation position="static" />
        </LogoAndNavigation>
        <IconsAndCopyright>
          <IconsList>
            <li>
            <Icon src={facebook}/>
            </li>
            <li>
            <Icon src={twitter}/>
            </li><li>
            <Icon src={pinterest}/>
            </li><li>
            <Icon src={instagram}/>
            </li>
          </IconsList>
          <Copyright>@2021 Loopstudios All rights reserved.</Copyright>
        </IconsAndCopyright>
      </div>
    </FooterWrapper>
  );
}
