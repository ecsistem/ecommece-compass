import './style.css'
import { CartItems } from '../CartItems'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Line from '../../assets/images/Icons/Line.svg'


export function CartContainer({ cart }) {
    const [cartItems, setCartItems] = useState(cart);
    const [totalValue, setTotalValue] = useState(0);

    console.log(totalValue);

    const updateCartItems = (updatedItems) => {
        setCartItems(updatedItems);
        const newTotalValue = updatedItems.reduce((total, item) => total + item.value * item.quantity, 0);
        setTotalValue(newTotalValue);
        console.log(newTotalValue);
    };

    useEffect(() => {
        const initialTotalValue = cartItems.reduce((total, item) => total + item.value * item.quantity, 0);

        setTotalValue(initialTotalValue);
    }, [cartItems]);

    if (!cart) {
        return <div>Loading...</div>;
    }
    return (

        <div className="cart-content-container">
            <div className="cart-product-options-card">
                <div className="cart-product-text">Resumo Pedido</div>
                <div className="cart-product-value-wrapper">
                    <div className="cart-product-value-text">
                        R$ {totalValue}
                    </div>
                    <div className="cart-product-total-text">Total</div>
                </div>
                <div className="cart-coupon-container">
                    <div className="cart-coupon-container-text">
                        Possui um código de desconto?
                    </div>
                    <form className="cart-coupon-container-wrapper">
                        <button type="submit" value="couponcode" className="cart-coupon-button"><p className="coupon-text">CUPOM</p></button>
                        <input className="cart-coupon-input" type="text" placeholder="Código de desconto" />
                    </form>
                    <img className="cart-coupon-line" src={Line} />
                    <button type="submit" className="cart-coupon-submit-button">Comprar</button>

                </div>
            </div>
            <div className="cart-items-list-container">

                {cartItems.map((item) => (
                    <CartItems
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        value={item.value}
                        quantity={item.quantity}
                        image={item.image}
                        cartItems={cartItems}
                        updateCartItems={updateCartItems}

                    />
                ))}
            </div>
        </div>

    )

}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            cartItems: PropTypes.array.isRequired,
        })
    ).isRequired,
    updateCartItems: PropTypes.func.isRequired,
};