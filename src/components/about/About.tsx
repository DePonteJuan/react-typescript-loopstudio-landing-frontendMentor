import React from "react";
import {
  AboutImage,
  AboutParagraph,
  AboutTextWrapper,
  AboutTitle,
  AboutWrapper
} from "./about.styles";
import aboutMobileImage from "../../images/mobile/image-interactive.jpg";
import aboutDesktopImage from "../../images/desktop/image-interactive.jpg";
import MediaQuery from "react-responsive";
export default function About() {
  return (
    <AboutWrapper>
      <MediaQuery maxWidth={992}>
        <AboutImage img={aboutMobileImage} />
        <AboutTextWrapper>
          <AboutTitle>The leader in interactive VR</AboutTitle>
          <AboutParagraph>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </AboutParagraph>
        </AboutTextWrapper>
      </MediaQuery>

      <MediaQuery minWidth={992}>
        <AboutImage img={aboutDesktopImage}>
          <AboutTextWrapper>
            <AboutTitle>The leader in interactive VR</AboutTitle>
            <AboutParagraph>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </AboutParagraph>
          </AboutTextWrapper>
        </AboutImage>
      </MediaQuery>
    </AboutWrapper>
  );
}
