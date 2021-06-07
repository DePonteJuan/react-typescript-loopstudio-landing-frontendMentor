import styled from "styled-components"
type ProductType = {
  img: any;
};
const ProductsWrapper = styled.div`
margin-top: 20vh; 
margin-bottom: 20vh; 
 h3{
margin-bottom: 10vh;
 }
@media(max-width:998px){
text-align:center;
}
`
const ProductsContainer = styled.div`
@media(min-width:998px){
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2% 2%;
  grid-template-areas:
    ". . . ."
    ". . . .";
}
`
const Product = styled.div<ProductType>`
  color:white;
  min-height:150px;
  padding: 18% 20% 20% 10%;
  margin-bottom:3.6vh;
  padding-bottom:3vh;
  width: 100%; 
  height: 30vh;
  background-image: url(${({ img }) => img});
  background-size: 100%;
  background-repeat: no-repeat;
  text-align:left;
@media(min-width:998px){
  display:flex;
  align-items:flex-end;
  height:50vh;
  padding-bottom:10%;
}
  h3 {
    width:50%;
    @media(max-width:500px){
    font-size: 1.785rem;
    }

}
`
export {ProductsWrapper, ProductsContainer, Product}