import './style.css'
import CancelIcon from '../../assets/images/Icons/Cancel.svg'
import MinorIcon from '../../assets/images/Icons/minoricon.svg'
import PlusIcon from '../../assets/images/Icons/plusicon.svg'
import { CartItemTypes } from './../../types/CartItensTypes'
import { useState, useEffect } from 'react'



export function CartItems(props) {
    const [quantity, setQuantity] = useState(props.quantity);
    const [calculatedValue, setCalculatedValue] = useState(props.value * props.quantity);

    useEffect(() => {
      setCalculatedValue(props.value * quantity);
    }, [props.value, quantity]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveItem = () => {
    const updatedCartItems = props.cartItems.filter(item => item.id !== props.id);
    props.updateCartItems(updatedCartItems);
  };
    
    return (
            <div className="cart-item-wrapper">
                <button type="button" className="cart-cancel-button" onClick={handleRemoveItem} >
                    <img src={CancelIcon} />
                </button>
                <p className="cart-item-value-text ">
                    R$ {calculatedValue}
                </p>
                <div className="cart-item-quantity-button">
                    <button type="button" className="cart-minor-button" onClick={decreaseQuantity} disabled={quantity === -1}><img className="cart-minor-icon" src={MinorIcon} /></button>
                    <input type="text" className="cart-quantity-input" value={quantity} onChange={event => setQuantity(event.target.value)}/>
                    <button type="button" className="cart-plus-button" onClick={increaseQuantity}><img className="cart-plus-icon" src={PlusIcon} /></button>
                </div>
                <div className="cart-item-description-card">
                    <div className="cart-item-description-wrapper">
                        <div className="cart-item-description-text-container">
                            <p className="cart-item-description-text">{props.title}</p>
                            <p className="cart-item-description-value">{props.value}</p>
                        </div>
                    </div>
                    <img className="cart-item-img" src={props.image} />
                </div>
            </div>
       
    )
}

CartItems.propTypes = CartItemTypes
  
