import CartButton from "../Buttons/CartButton";
import { FavoriteButton } from "../Buttons/FavoriteButton";

import fakeImage from "../../assets/images/containerImage.svg";

import "./Container.css";

function ProductsContainer() {
  return (
    <div className="container">
      <div className="containerContent">
        <img src={fakeImage}></img>
        <div className="listContainer">
          <h2 className="title">ALEXA</h2>
          <div className="price">
            <p className="discount">de R$340</p>
            <h3 className="discountPrice">por R$250</h3>
          </div>
          <div className="buttonSection">
            <FavoriteButton />
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsContainer;
