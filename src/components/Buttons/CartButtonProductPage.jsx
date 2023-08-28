import cartlogoGreen from "../../assets/images/Icons/cartlogoGreen.svg";
import { useDispatch } from "react-redux";
import { addToCart } from '../Slices/CartSlice'
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import "./CartButtonProductPage.css"

function CartButtonProductPage({ product, amount }) {
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    const item = {
      id: product.id,
      price: product.price,
      image: product.image,
      title: product.title,
      amount: amount,
    };
    dispatch(addToCart(item));
    toast.success(`${item.title} adicionado ao carrinho!`);
  };
    return (
      <>
        <button onClick={addItemToCartHandler} className="cartButtonPage">
          Carrinho
          <img src={cartlogoGreen} alt="icon" />
        </button>
      </>
    );
  }
  CartButtonProductPage.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      // Add other required properties here
    }).isRequired,
    amount: PropTypes.number.isRequired,
  };

  
  export default CartButtonProductPage;
  