import BuyButton from "../Buttons/BuyButton";
import CartButton from "../Buttons/CartButton";
import { Rating } from "../Rating";

import iphone from "../../assets/images/IphonePage.svg";
import vectorImg from "../../assets/images/Icons/Vector.svg";

import "./ContentContainer.css";

function ContentContainer() {
  return (
    <body className="contentContainer">
      <div className="leftContent">
        <div className="divContainer">
          <h1 className="productTitle">
            Celular Apple iPhone com dois cartões SIM e 64 GB, além de duas
            câmeras de alta qualidade
          </h1>
          <div className="ratingStars">
            <p className="ratingComments">(12) avaliações</p>
            <Rating rating={4.5} maxStars={5}></Rating>
          </div>
          <p className="productDescription">
            Apple iPhone 11, Dual SIM, 64 GB, 4G LTE, FaceTime, Roxo, Versão
            Internacional
          </p>
        </div>
        <div className="divBuy">
          <div className="priceQuantity">
            <h1 className="productPrice">R$ 5.000,00</h1>
            <div className="quantityProduct">
              <button className="quatityButton">-</button>
              <insert className="quantityInsert">0</insert>
              <button className="quatityButton">+</button>
            </div>
          </div>
          <div className="buttonGroup">
            <CartButton className="cartProductPage" />
            <BuyButton />
          </div>
        </div>
      </div>
      <div className="rightContent">
        <img src={iphone} className="productImage" />
        <button className="enlargeImage">
          <img src={vectorImg} />
        </button>
      </div>
    </body>
  );
}

export default ContentContainer;
