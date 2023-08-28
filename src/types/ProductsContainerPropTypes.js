import PropTypes from 'prop-types';
export const ProductsContainerPropTypes = {
    product: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      discount: PropTypes.number,
      image: PropTypes.string
    }).isRequired
  };