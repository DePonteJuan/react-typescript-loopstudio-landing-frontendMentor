import { ItemLink, List, NavigationWrapper } from "./navigation-desktop.styles";
type NavigationDesktopProps = {
  className: any;
  position: string;
};

function NavigationDesktop({ className, position }: NavigationDesktopProps) {
  console.log(position);
  return (
    <NavigationWrapper className={className} position={position}>
      <List>
        <li className="line-on-hover">
          <ItemLink>About</ItemLink>
        </li>
        <li>
          <ItemLink>Careers</ItemLink>
        </li>
        <li>
          <ItemLink>Events</ItemLink>
        </li>
        <li>
          <ItemLink>Products</ItemLink>
        </li>
        <li>
          <ItemLink>Support</ItemLink>
        </li>
      </List>
    </NavigationWrapper>
  );
}

export default NavigationDesktop;
