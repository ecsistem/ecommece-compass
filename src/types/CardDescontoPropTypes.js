import PropTypes from 'prop-types';

export const CardDescontoPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number.isRequired, // Add this line
  image: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};
