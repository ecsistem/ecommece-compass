/*import { useReducer } from 'react';*/
import "./IncrementButton.css";
import PropTypes from 'prop-types';

/*const quantityReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state > 0 ? state - 1 : 0;
    default:
      return state;
  }
};*/

function IncrementButton({ quantity, setQuantity }) {
  /*const [quantity, dispatch] = useReducer(quantityReducer, 1);*/
    const decreaseQuantity = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  

  return (
    <div className="incrementButton">
      <button 
        className="quantityButton" 
        onClick={decreaseQuantity} 
        disabled={quantity <= 0}
      >
        -
      </button>
      <span className="quantityInsert">{quantity}</span>  {/* <insert> não é uma tag válida, então substituí por <span> */}
      <button 
        className="quantityButton" 
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
}

IncrementButton.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default IncrementButton;