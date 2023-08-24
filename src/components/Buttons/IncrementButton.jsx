import { useReducer } from 'react';
import "./IncrementButton.css";

const quantityReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state > 0 ? state - 1 : 0;
    default:
      return state;
  }
};

function IncrementButton() {
  const [quantity, dispatch] = useReducer(quantityReducer, 1);

  return (
    <div className="incrementButton">
      <button 
        className="quantityButton" 
        onClick={() => dispatch({ type: 'DECREMENT' })} 
        disabled={quantity <= 0}
      >
        -
      </button>
      <span className="quantityInsert">{quantity}</span>  {/* <insert> não é uma tag válida, então substituí por <span> */}
      <button 
        className="quantityButton" 
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        +
      </button>
    </div>
  );
}

export default IncrementButton;