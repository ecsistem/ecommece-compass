import PropTypes from 'prop-types';
export const CartItemTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    cartItems: PropTypes.array.isRequired,
    updateCartItems: PropTypes.func.isRequired,
  };