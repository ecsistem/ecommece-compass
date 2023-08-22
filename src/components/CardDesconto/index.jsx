import {Rating} from './../Rating';
import { Countdown } from '../Contdown';
import CartButton from "../Buttons/CartButton";
import { FavoriteButton } from "../Buttons/FavoriteButton";

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
                <div className="banner-desconto">
                <svg className='seta-banner-desconto' width="12" height="9" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.00003 6L0.250032 0.803848L0.250032 11.1962L7.00003 6Z" fill="#F55157"/>
</svg>
<span className='percentage'>25% OFF</span>

                </div>
            </div>
        </div>
        </div>
    )
}