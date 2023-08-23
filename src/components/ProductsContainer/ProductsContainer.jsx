/* eslint-disable react/prop-types */
import CartButton from "../Buttons/CartButton";
import { FavoriteButton } from "../Buttons/FavoriteButton";

/* import fakeImage from "../../assets/images/containerImage.svg"; */

import "./Container.css";

function ProductsContainer({ product }) {
  const finalPrice = product.price * ((100 - product.discount) / 100);

  return (
    <div className="container">
      <div className="containerContent">
        <img src={product.image} className="productImage"></img>
        <div className="listContainer">
          <h2 className="title">{product.name}</h2>
          <div className="price">
            <p className="discount">de R${product.price}</p>
            <h3 className="discountPrice">por R${finalPrice}</h3>
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
