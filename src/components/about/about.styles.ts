import styled from "styled-components";
type AboutImageType = {
  img: any;
};
const AboutWrapper = styled.div`
  padding:0;
  margin: auto 11.3vw 0 11.3vw;
`;
const AboutImage = styled.div<AboutImageType>`
  min-height: 270px;
  height: 100%;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 100%;
  @media (min-width: 998px) {
    height: 70vh;
    width: 50vw;
  }
`;
const AboutTextWrapper = styled.div`
  @media (max-width: 998px) {
    text-align: center;
  }
  @media (min-width: 998px) {
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    background:white;
    text-align: left;
    position:absolute;
    bottom:0%;
    left:50%;
    height: 43.8vh;
    width:39.2vw;
    height:400px;
    width:400px;
    margin-bottom:-200px;
    padding-left:100px;
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
