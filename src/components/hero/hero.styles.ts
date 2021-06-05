import styled from "styled-components";
type HeroWrapperType = {
  img: any;
};
const HeroWrapper = styled.div<HeroWrapperType>`
  padding-bottom:3vh;
  width: 100%;
  height: 100%;
  background-image: url(${({ img }) => img});
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top:10.4vh;
  @media(max-width:998px){
    padding-top: 30vh;
  }
`;
const HeroTitle = styled.div`

  color: white;
  border: 1px solid white;
  padding: 5vh 5vw 5ch 5vw;
  width: 45.3vw;
  height: 40vh;
  z-index: 1;
  @media (max-width: 400px) {
    font-size: 1.75rem;
  }
  @media (max-width: 998px) {
    width: 80vw;
    height: 40vw;
  }
`;
export { HeroWrapper, HeroTitle };
