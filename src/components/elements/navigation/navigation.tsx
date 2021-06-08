import { ItemLink, List, NavigationWrapper } from "./navigation.styles";
function Navigation({clicked, handleClick }:any) {
  return (
    <NavigationWrapper clicked={clicked}>
      <List>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            About
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Careers
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Events
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Products
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Support
          </ItemLink>
        </li> 
      </List>
    </NavigationWrapper>
  );
}

export default Navigation;
