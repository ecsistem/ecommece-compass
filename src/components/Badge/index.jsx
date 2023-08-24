import './styles.css';
import {BadgePropTypes } from '../../types/BadgePropTypes';

export function Badge({price, priceDiscount}) {
    const porcentagemDesconto = ((price - priceDiscount) / price) * 100;
    const isDiscounted = porcentagemDesconto > 0;
    console.log(porcentagemDesconto);

  return (
    <div className={`banner-desconto ${isDiscounted ? 'bg-red' : 'bg-blue'}`}>
      <svg
        className="seta-banner-desconto"
        width="12"
        height="9"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.00003 6L0.250032 0.803848L0.250032 11.1962L7.00003 6Z"
          fill={isDiscounted ? `#F55157` : '#62D0B6'}
        />
      </svg>
      <span className="percentage"> {isDiscounted ? `${ Math.round(porcentagemDesconto)}% OFF` : 'Novo'}</span>
    </div>
  );
}

Badge.propTypes = BadgePropTypes;