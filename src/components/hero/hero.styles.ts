import styled from "styled-components";
type HeroWrapperType = {
  img: any;
}
const HeroWrapper = styled.div<HeroWrapperType>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({img}) => img});
  background-size: 100%;
  background-repeat: no-repeat;
`;
const HeroTitle = styled.div`
  position: relative;
  left: 0;
  top: 29.4vh;
  color: white;
  border: 1px solid white;
  padding: 5%;
  width: 45.3vw;
  height: 40vh;
  @media (max-width: 400px) {
    font-size: 1.75rem;
  }
  @media (max-width: 900px) {
    width: 80vw;
    top: 50vh;
    height: 40vw;
  }
`;
export { HeroWrapper, HeroTitle };
