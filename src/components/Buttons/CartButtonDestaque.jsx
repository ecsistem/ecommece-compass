import classes from "./Button.module.css";
import { addToCart } from "../Slices/CartSlice";
import cartlogo from "../../assets/images/Icons/cart.svg";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

function CartButtonDestaque({ product }) {
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    const item = {
      id: product.id,
      price: product.price,
      image: product.image,
      title: product.title,
      amount: 1,
    };
    dispatch(addToCart(item));
    toast.success(`${item.title} adicionado ao carrinho!`);
  };
  return (
    <>
      <button onClick={addItemToCartHandler} className={classes.cartButtonDestaque}>
        Carrinho
        <img src={cartlogo} alt="icon" />
      </button>
    </>
  );
}

export default CartButtonDestaque;

CartButtonDestaque.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // Add other required properties here
  }).isRequired,
};
