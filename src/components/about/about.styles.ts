import styled from "styled-components";
type AboutImageType = {
  img: any;
};
const AboutWrapper = styled.div`
  padding: 0;
  margin: 20vh 11.3vw 0 11.3vw;
  @media (max-width: 998px) {
    margin-top: 15.2vh;
  }
  @media (min-width: 998px) {
    position: relative;
  }
`;
const AboutImage = styled.div<AboutImageType>`
  min-height: 270px;
  height: 100%;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 100%;
  @media (min-width: 998px) {
    display: flex;
    height: 50vh;
    width: 50vw;
  }
`;
const AboutTextWrapper = styled.div`
  @media (max-width: 998px) {
    text-align: center;
  }
  @media (min-width: 998px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    bottom: 0%;
    left: 40%;
    background: white;
    text-align: left;
    height: 43.8vh;
    width: 39.2vw;
    padding-left: 100px;
  }
`;
const AboutTitle = styled.h3`
  margin: 50px auto 28px auto;
`;

const AboutParagraph = styled.p``;
export {
  AboutWrapper,
  AboutImage,
  AboutParagraph,
  AboutTitle,
  AboutTextWrapper
};
