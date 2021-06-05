import styled from "styled-components";
import { LineOnHover } from "../../../mixins";
//styles
const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const ItemLink = styled.a`
  color: white;
  position: relative;
  ${LineOnHover({
    height: "1px",
    color: "white",
    width: "100%",
    top: "24px",
    time: "0.5s"
  })}
`;
const NavigationWrapper = styled.nav`
  width: 26.3vw;
  position: fixed;
  top: 0;
  right: 0;
  margin: 8.2vh 11.3vw;
  z-index: 1000;
`;
export { List, ItemLink, NavigationWrapper };
