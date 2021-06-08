import styled from "styled-components";

interface LogoProps {
position: string;
}

const LogoWrapper = styled.img<LogoProps>`
  cursor:pointer;
  margin: 6.2vh 6.2vw;
  z-index: 2000;
  width: auto;
  height: 5.5vh; 
  @media(min-width:992px){
      margin: 8.2vh 11.3vw;         
    }
`;

export default LogoWrapper;
