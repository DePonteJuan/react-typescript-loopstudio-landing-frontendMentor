import styled from "styled-components";

const LogoWrapper = styled.img`
  margin: 6.2vh 6.2vw;
  position: fixed;
  z-index: 1000;
  width: auto;
  height: 5.5vh; 
  @media(min-width:992px){
      margin: 8.2vh 11.3vw;         
    }
`;

export default LogoWrapper;
