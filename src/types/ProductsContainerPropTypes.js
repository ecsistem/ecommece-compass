import PropTypes from 'prop-types';
export const ProductsContainerPropTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discount: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  };