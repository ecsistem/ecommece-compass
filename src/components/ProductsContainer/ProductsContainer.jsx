import { Badge } from "../Badge";
import CartButton from "../Buttons/CartButton";
import { FavoriteButton } from "../Buttons/FavoriteButton";
import { formatarPreco } from '../../utils/function/formatarPreco';
import { ProductsContainerPropTypes } from '../../types/ProductsContainerPropTypes';

import "./Container.css";

function ProductsContainer({ product }) {
  const finalPrice = product.price * ((100 - product.discount) / 100);

  return (
    <div className="container">
      <div className="containerContent">
        <img src={product.image} className="productImage"></img>
        <Badge price={product.price} priceDiscount={finalPrice} />
        <div className="listContainer">
          <h2 className="title">{product.name}</h2>
          <div className="price">
            <p className="discount">de {formatarPreco(product.price)}</p>
            <h3 className="discountPrice">por {formatarPreco(finalPrice)}</h3>
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
ProductsContainer.propTypes = ProductsContainerPropTypes;
export default ProductsContainer;
