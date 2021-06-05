import { HeroWrapper, HeroTitle } from "./hero.styles";
import heroMobileImage from "../../images/mobile/image-hero.jpg";
import heroDesktopImage from "../../images/desktop/image-hero.jpg";
import React from "react";
import MediaQuery from "react-responsive";
const Hero = () => {
  return (
    <>
      <MediaQuery maxWidth={992}>
        <HeroWrapper img={heroMobileImage}>
          <HeroTitle className="wrapper">
            <h1>Immersive experiences that deliver</h1>
          </HeroTitle>
        </HeroWrapper>
      </MediaQuery>

      <MediaQuery minWidth={992}>
        <HeroWrapper img={heroDesktopImage}>
          <HeroTitle className="wrapper">
            <h1>Immersive experiences that deliver</h1>
          </HeroTitle>
        </HeroWrapper>
      </MediaQuery>
    </>
  );
};
export default Hero;
