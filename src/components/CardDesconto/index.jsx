import {Rating} from './../Rating';
import { Countdown } from '../Contdown';
import CartButton from "../Buttons/CartButton";
import { FavoriteButton } from "../Buttons/FavoriteButton";
import { Badge } from '../Badge';

import './styles.css';
export function CardDesconto({title, description, price, priceDiscont, image, stars, date}){
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
                        <p className="price-nodiscont">de R$ {price}</p>
                        <p className="price-discont">R$ {priceDiscont}</p>
                    </div>
                </div>
                    <Countdown date={date}/>
                    <div className="buttons-desconto">
                        <FavoriteButton />
                        <CartButton />
                    </div>
            </div>
            <div className="container-image-desconto">
                <img className='image-desconto' src={image} alt={title} />
                <Badge price={price} priceDiscont={priceDiscont} />
                </div>
            </div>
        </div>
    )
}