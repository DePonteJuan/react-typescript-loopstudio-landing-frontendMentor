import styled from "styled-components";
type ProductType = {
  img: any;
};
const ProductsWrapper = styled.div`
  margin-top: 20vh;
  margin-bottom: 20vh;
  @media (max-width: 998px) {
    text-align: center;
  }
`;
const Title = styled.div`
  margin-bottom: 10vh;
  @media (min-width: 998px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const ProductsButton = styled.button`
  border: 1px solid black;
  text-align: center;
  height: 3%;
  width: 15%;
  text-transform: uppercase;
  background-color: transparent;
  padding: 0.5rem;
  &:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 998px) {
    width: 40%;
    height: 10vh;
    margin-top: 3%;
  }
`;
const ProductsContainer = styled.div`
  @media (min-width: 998px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2% 2%;
    grid-template-areas:
      ". . . ."
      ". . . .";
  }
`;
const Product = styled.div<ProductType>`
  cursor: pointer;
  position: relative;
  color: white;
  min-height: 150px;
  padding: 18% 20% 3vh 10%;
  margin-bottom: 3.6%;
  width: 100%;
  height: 30vh;
  z-index: -1;
  background-image: url(${({ img }) => img});
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: left;
  transition: all 300ms ease-in-out;
  @media (min-width: 998px) {
    display: flex;
    align-items: flex-end;
    height: 50vh;
    padding-bottom: 30%;
    z-index: 1000;
  }
  h3 {
    width: 50%;
    z-index: 1001;
    @media (max-width: 500px) {
      font-size: 1.785rem;
    }
  }
  &:after {
    content: "";
    position: absolute;
    background-color: whitesmoke;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 300ms ease-in-out;
    opacity: 0;
  }
  &:hover {
    color: black;
    &:after {
      opacity: 0.5;
    }
  }
`;
export { ProductsWrapper, ProductsButton, Title, ProductsContainer, Product };
