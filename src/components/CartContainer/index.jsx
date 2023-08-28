import './style.css'
import { CartItems } from '../CartItems'
import { useSelector } from 'react-redux';
import { selectTotalAmount} from '../Slices/TotalAmount'

import Line from '../../assets/images/Icons/Line.svg'


export function CartContainer() {
    const cartItems = useSelector(state => state.cart.items);
    const totalValue = useSelector (selectTotalAmount)
    const displayTotalValue = Math.abs(totalValue) < 0.01 ? 0 : totalValue;

    if (!cartItems) {
        return <div>Loading...</div>;
    }
    return (

        <div className="cart-content-container distance">
            <div className="cart-product-options-card">
                <div className="cart-product-text">Resumo Pedido</div>
                <div className="cart-product-value-wrapper">
                    <div className="cart-product-value-text">
                        R$ {displayTotalValue.toFixed(2)}
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
                        value={item.price}
                        quantity={item.amount}
                        image={item.image}
                    />
                ))}
            </div>
        </div>

    )

}
