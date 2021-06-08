import styled from "styled-components";
import { LineOnHover } from "../../mixins";
import { Logo, NavigationDesktop } from "../elements";

const FooterWrapper = styled.div`
  background-color: black;
  .wrapper {
    margin: 0;
  @media(max-width:998px){
    display:grid;
justify-content:center;
align-items:center;
  }
  }
  @media (max-width: 998px) {
    text-align: center;
  }
  @media (min-width: 998px) {
    .wrapper {
      margin-right: 11vw;
      display: flex;
      justify-content: space-between;
    }
  }
`;
const LogoAndNavigation = styled.div`
  #Logo {
    margin: 0;
  }
`;
const FooterNavigation = styled(NavigationDesktop)`
 
  @media (max-width: 998px) {
    text-align:center;

    ul {
      position:static;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items:center;
      li{
        padding-bottom:6%;
      }
      
    }
  }
  margin-top: 0;
`;
const IconsAndCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 5.7vh;
  @media (max-width: 998px) {
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: right;
  }
`;
const IconsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
@media(max-width:998px){
  justify-content:center;
}
  li {
    cursor: pointer;
    padding-left: 5%;
    @media (min-width: 998px) {
      position: relative;
      ${LineOnHover({
        left: "40%",
        height: "1px",
        color: "white",
        width: "20px",
        top: "120%",
        time: "0.3s"
      })}
    }
  }
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const Copyright = styled.p`
  color: white;
  margin-top: 11.2vh;
`;

export {
  FooterWrapper,
  LogoAndNavigation,
  Icon,
  IconsAndCopyright,
  Copyright,
  IconsList,
  FooterNavigation
};
