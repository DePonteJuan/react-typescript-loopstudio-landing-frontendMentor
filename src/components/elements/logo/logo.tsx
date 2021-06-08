import LogoWrapper from "./logo.styles";
import logoSvg from "./logo.svg";
export default function Logo(position:any) {
  return <LogoWrapper src={logoSvg} position={position}></LogoWrapper>;
}
