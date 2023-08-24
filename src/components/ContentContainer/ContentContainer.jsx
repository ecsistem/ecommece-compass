/* eslint-disable react/prop-types */
import BuyButton from "../Buttons/BuyButton";
import CartButtonProductPage from "../Buttons/CartButtonProductPage";
import IncrementButton from "../Buttons/IncrementButton";
import { Rating } from "../Rating";

import vectorImg from "../../assets/images/Icons/Vector.svg";

import "./ContentContainer.css";

function ContentContainer({ product }) {
  const finalPrice = product.price * ((100 - product.discount) / 100);

  return (
    <body className="contentContainer">
      <div className="leftContent">
        <div className="divContainer">
          <h1 className="productTitle">{product.name}</h1>
          <div className="ratingStars">
            <p className="ratingComments">(12) avaliações</p>
            <Rating rating={product.rating} maxStars={5}></Rating>
          </div>
          <p className="productDescription">{product.description}</p>
        </div>
        <div className="divBuy">
          <div className="priceQuantity">
            <h1 className="productPrice">
              R${" "}
              {finalPrice.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h1>
            <div className="quantityProduct">
              <IncrementButton />
            </div>
          </div>
          <div className="buttonGroup">
            <CartButtonProductPage />
            <BuyButton />
          </div>
        </div>
      </div>
      <div className="rightContent">
        <img src={product.image} className="productImage" />
        <button className="enlargeImage">
          <img src={vectorImg} />
        </button>
      </div>
    </body>
  );
}

export default ContentContainer;
