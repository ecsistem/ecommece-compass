import './style.css'
import CancelIcon from '../../assets/images/Icons/Cancel.svg'
import MinorIcon from '../../assets/images/Icons/minoricon.svg'
import PlusIcon from '../../assets/images/Icons/plusicon.svg'
import { CartItemTypes } from './../../types/CartItensTypes'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removeFromCart, addToCart, removeAllById } from '../Slices/CartSlice'; // Ajuste o caminho
import { formatarPreco } from '../../utils/function/formatarPreco'
import { Link } from 'react-router-dom'


export function CartItems(props) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(addToCart({ id: props.id, amount: 1, price: props.value }));
    toast.success(`${props.title} adicionado ao carrinho!`);

  };

  const decreaseQuantity = () => {
    if (props.quantity > 0) {
      dispatch(removeFromCart(props.id));
      toast.error(`Um ${props.title} removido do carrinho!`);
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeAllById(props.id));
    toast.error(`${props.title} foi removido do carrinho`);
  };

  const calculatedValue = props.value * props.quantity;

  return (
    <div className="cart-item-wrapper">
      <button type="button" className="cart-cancel-button" onClick={handleRemoveItem}>
        <img src={CancelIcon} alt="Cancel Icon" />
      </button>
      <p className="cart-item-value-text">
        {formatarPreco(calculatedValue)}
      </p>
      <div className="cart-item-quantity-button">
        <button
          type="button"
          className="cart-minor-button"
          onClick={decreaseQuantity}
          disabled={props.quantity === 0}
        >
          <img className="cart-minor-icon" src={MinorIcon} alt="Minus Icon" />
        </button>
        <input
          type="number"
          className="cart-quantity-input"
          value={props.quantity}
          readOnly
        />
        <button type="button" className="cart-plus-button" onClick={increaseQuantity}>
          <img className="cart-plus-icon" src={PlusIcon} alt="Plus Icon" />
        </button>
      </div>
        <Link className='cart-item-description-card' to={`/pagina-de-detalhes/${props.id}`}>
        <div className="cart-item-description-wrapper">
          <div className="cart-item-description-text-container">
            <p className="cart-item-description-text">{props.title}</p>
            <p className="cart-item-description-value">R$ {props.value.toFixed(2)}</p>
          </div>
        </div>
        <img className="cart-item-img" src={props.image} alt="Item" />
        </Link>
    </div>
  );
}

CartItems.propTypes = CartItemTypes
  
