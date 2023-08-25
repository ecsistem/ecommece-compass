import PropTypes from 'prop-types';

export const ProductPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    count: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});
