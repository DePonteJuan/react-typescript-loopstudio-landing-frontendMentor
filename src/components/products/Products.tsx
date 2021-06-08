import React from "react";
import {ProductsContainer,Title, ProductsWrapper, Product, ProductsButton} from "./products.styles"
import {deepEarth, curiosity, fishEye, fromAbove, grid, nightArcade, soccerTeam, pocketBorealis} from "../../images/mobile/index"
import {deepEarthDesktop, curiosityDesktop, fishEyeDesktop, fromAboveDesktop, gridDesktop, nightArcadeDesktop, soccerTeamDesktop, pocketBorealisDesktop} from "../../images/desktop/index"
import MediaQuery from "react-responsive";

export default function Products(){

return (
  <ProductsWrapper className="wrapper">
    <Title><h3>Our Creations</h3>

<MediaQuery minWidth={998}>
<ProductsButton>See All</ProductsButton>
  </MediaQuery>
  </Title>
  <ProductsContainer>
<MediaQuery maxWidth={998}>
      <Product img={deepEarth}><h3>deep Earth</h3></Product>
      <Product img={nightArcade}><h3>Night Arcade</h3></Product>
      <Product img={soccerTeam}><h3>Soccer Team Vr</h3></Product>
      <Product img={grid}><h3>The Grid</h3></Product>
      <Product img={fromAbove}><h3>From up above vr</h3></Product>
      <Product img={pocketBorealis}><h3>pocket Borealis</h3></Product>
      <Product img={curiosity}><h3>The curiosity</h3></Product>
      <Product img={fishEye}><h3>Make it fisheyes</h3></Product>
<ProductsButton>See All</ProductsButton>
      </MediaQuery>
<MediaQuery minWidth={998}>
      <Product img={deepEarthDesktop}><h3>deep Earth</h3></Product>
      <Product img={nightArcadeDesktop}><h3>Night Arcade</h3></Product>
      <Product img={soccerTeamDesktop}><h3>Soccer Team Vr</h3></Product>
      <Product img={gridDesktop}><h3>The Grid</h3></Product>
      <Product img={fromAboveDesktop}><h3>From up above vr</h3></Product>
      <Product img={pocketBorealisDesktop}><h3>pocket Borealis</h3></Product>
      <Product img={curiosityDesktop}><h3>The curiosity</h3></Product>
      <Product img={fishEyeDesktop}><h3>Make it fisheyes</h3></Product>
      </MediaQuery>
  </ProductsContainer>
  </ProductsWrapper>
)
}