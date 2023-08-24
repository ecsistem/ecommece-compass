import { RatingPropTypes } from '../../types/RatingPropTypes';
import './styles.css'
  export const Rating = ({ rating, maxStars }) => {
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= maxStars; i++) {
        stars.push(
          <span
            key={i}
            className={`star ${i <= rating ? 'filled' : ''}`}
          >
            ★
          </span>
        );
      }
      return stars;
    };
  
    return (
      <div className="rating-desconto">
        {renderStars()}
      </div>
    );
  };
  Rating.propTypes = RatingPropTypes;
