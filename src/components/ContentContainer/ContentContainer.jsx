import BuyButton from "../Buttons/BuyButton";
import CartButtonProductPage from "../Buttons/CartButtonProductPage";
import IncrementButton from "../Buttons/IncrementButton";
import { Rating } from "../Rating";
import { formatarPreco } from "../../utils/function/formatarPreco";
import { ProductPropTypes } from "../../types/ProductPropTypes";
import { useState } from "react";


import vectorImg from "../../assets/images/Icons/Vector.svg";

import "./ContentContainer.css";

function ContentContainer({ product }) {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <div className="contentContainer">
      <div className="leftContent">
        <div className="divContainer">
          <h1 className="productTitle">{product.title}</h1>
          <div className="ratingStars">
            <p className="ratingComments">({product.rating.count}) avaliações</p>
            <Rating rating={product.rating.rate} maxStars={5}></Rating>
          </div>
          <p className="productDescription">{product.description}</p>
        </div>
        <div className="divBuy">
          <div className="priceQuantity">
            <h1 className="productPrice">{formatarPreco(product.price)}</h1>
            <div className="quantityProduct">
              <IncrementButton quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
          <div className="buttonGroup">
            <CartButtonProductPage product={product} amount={quantity} />
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
    </div>
  );
}

ContentContainer.propTypes = {
  product: ProductPropTypes.isRequired,
};

export default ContentContainer;
