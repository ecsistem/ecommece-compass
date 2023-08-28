import {Rating} from './../Rating';
import { Countdown } from '../Contdown';
import CartButton from "../Buttons/CartButton";
import { FavoriteButton } from "../Buttons/FavoriteButton";
import { Badge } from '../Badge';
import { formatarPreco } from '../../utils/function/formatarPreco';
import { CardDescontoPropTypes } from '../../types/CardDescontoPropTypes';

import './styles.css';
export function CardDesconto({title, description, price, priceDiscount, image, stars, date}){
    const product = {
        id: Math.random(), // You can generate a unique ID here
        title,
        description,
        price,
        priceDiscount,
        image,
        stars,
        date,
      };
    return(
        <div className="container-card-desconto">
        <div className="card-desconto">
            <div className="card-list-desconto">
                <div className="content-desconto">
                    <div className="text-desconto">
                        <h3 className='title-desconto'>{title}</h3>
                        <p className='description-desconto'>{description}</p>
                    </div>
                    <div className="star-desconto">
                        <p className='pstars'>({stars})</p>
                        <Rating rating={stars} maxStars={5}/>
                    </div>
                    <div className="prices-desconto">
                        <p className="price-nodiscont">de {formatarPreco(price)}</p>
                        <p className="price-discont">{formatarPreco(priceDiscount)}</p>
                    </div>
                </div>
                    <Countdown date={date}/>
                    <div className="buttons-desconto">
                        <FavoriteButton />
                        <CartButton product={product} priceAddition={priceDiscount}/>
                    </div>
            </div>
            <div className="container-image-desconto">
                <img className='image-desconto' src={image} alt={title} />
                <Badge price={price} priceDiscount={priceDiscount} />
                </div>
            </div>
        </div>
    )
}
CardDesconto.propTypes =CardDescontoPropTypes