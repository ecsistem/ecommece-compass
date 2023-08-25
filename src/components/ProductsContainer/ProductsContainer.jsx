import { Link } from "react-router-dom";
import { Badge } from "../Badge";
import CartButton from "../Buttons/CartButton";
import { FavoriteButton } from "../Buttons/FavoriteButton";
import { formatarPreco } from "../../utils/function/formatarPreco";
import { isPriceLower } from "../../utils/function/pricelower";
import { ProductsContainerPropTypes } from "../../types/ProductsContainerPropTypes";

import "./Container.css";
function ProductsContainer({ product, priceAddition }) {
  return (
    <div className="container">
      <div className="containerContent">
        <Link to={`/pagina-de-detalhes/${product.id}`}>
          <img src={product.image} className="productsImage"/>
        </Link>
        <Badge price={priceAddition} priceDiscount={product.price} />
        <div className="listContainer">
          <h2 className="title">{product.title}</h2>
          <div className="price">
            {isPriceLower(product.price, priceAddition) ? (
              <div>
                <p className="addition">de {formatarPreco(priceAddition)}</p>
                <h3 className="discountPrice">
                  por {formatarPreco(product.price)}
                </h3>
              </div>
            ) : (
              <h3 className="PriceGray">por {formatarPreco(product.price)}</h3>
            )}
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
