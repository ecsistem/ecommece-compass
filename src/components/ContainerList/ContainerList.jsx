import ProductsContainer from "../ProductsContainer/ProductsContainer";

import arrowIcon from "../../assets/images/Icons/ArrowIcon.svg";

import "./ContainerList.css";
import ReturnButton from "../Buttons/ReturnButton";
import NextButton from "../Buttons/NextButton.";

import fakeImage from "../../assets/images/containerImage.svg";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    image: fakeImage,
    name: "ALEXA 1",
    price: 340,
    discount: 25,
  },
  {
    id: 2,
    image: fakeImage,
    name: "ALEXA 2",
    price: 340,
    discount: 25,
  },
  {
    id: 3,
    image: fakeImage,
    name: "ALEXA 3",
    price: 340,
    discount: 25,
  },
  {
    id: 4,
    image: fakeImage,
    name: "ALEXA 4",
    price: 340,
    discount: 25,
  },
  {
    id: 5,
    image: fakeImage,
    name: "ALEXA 5",
    price: 340,
    discount: 25,
  },
  {
    id: 6,
    image: fakeImage,
    name: "ALEXA 6",
    price: 340,
    discount: 25,
  },
  {
    id: 7,
    image: fakeImage,
    name: "ALEXA 7",
    price: 340,
    discount: 25,
  },
  {
    id: 8,
    image: fakeImage,
    name: "ALEXA 8",
    price: 340,
    discount: 25,
  },
];

function ContainerList() {

  return (
    <div className="containerList">
      <div className="containerHeader">
        <button className="verTudoButton">
          <img src={arrowIcon} /> Ver Tudo
        </button>
        <div className="containerTitle">
          <h1>Produtos em destaque</h1>
          <h2>Produtos em destaque mais recentes adicionados</h2>
        </div>
      </div>
      <div className="productList">
        {DUMMY_PRODUCTS.map((product) => <ProductsContainer product={product} key={product.id} /> )}
      </div>
      <div className="returnNextButton">
        <ReturnButton />
        <NextButton />
      </div>
    </div>
  );
}

export default ContainerList;
