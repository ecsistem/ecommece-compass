import classes from "./Button.module.css";
import { addToCart } from '../Slices/CartSlice'
import cartlogo from "../../assets/images/Icons/cart.svg";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

function CartButton({ product }) {
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    const item = {
      id: product.id,
      price: product.price,
      image: product.image,
      title: product.title,
      amount: 1,
    };
    console.log(item);
    dispatch(addToCart(item));
  };
  return (
   
    <>
      <button onClick={addItemToCartHandler} className={classes.cartButton}>
        Carrinho
        <img src={cartlogo} alt="icon" />
      </button>
    </>
  );
}

export default CartButton;

CartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // Add other required properties here
  }).isRequired,
};