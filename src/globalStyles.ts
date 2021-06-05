import { createGlobalStyle } from "styled-components";
interface GlobalVariablesInterface {
  fontSizeBiggest: string;
  fontSizeBigger: string;
  fontSizeBig: string;
  fontSizeSmall: string;
  fontSizeMedium: string;
  paragraphFont: string;
  titleFont: string;
}
const GlobalVariables: GlobalVariablesInterface = {
  fontSizeBigger: "2.9375rem",
  fontSizeBiggest: "3.4375rem",
  fontSizeBig: "2.375rem",
  fontSizeSmall: "1.18rem",
  fontSizeMedium: "1.75rem",
  titleFont: "'Josefin Sans', sans-serif;",
  paragraphFont: "font-family: 'Alata', sans-serif;"
};

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type:none;
  }
  body {
    font-size: 15px;
    font-family: ${GlobalVariables.paragraphFont};
  }
  h1,h2 {
    font-weight: 100;
    text-transform:uppercase;
    font-family:${GlobalVariables.titleFont};
    font-size: ${GlobalVariables.fontSizeBig};
  }
  h3, .h3{
    text-transform: uppercase;
    font-family:${GlobalVariables.titleFont};
    font-size: ${GlobalVariables.fontSizeMedium};
  }
  .wrapper{
    margin: 0 6.2vw;
  
  }
@media(min-width:576px){
  h1,h2 {
    font-size:${GlobalVariables.fontSizeBiggest};
  }
}
  @media(min-width:992px){
  
  .wrapper{
  margin: 8.2vw 11.3vw;
}
  }
`;

export default GlobalStyle;
