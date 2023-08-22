import {Rating} from './../Rating';
import { Countdown } from '../Contdown';
import CartButton from "../Buttons/CartButton";
import { FavoriteButton } from "../Buttons/FavoriteButton";

import './styles.css';
export function CardDesconto(){
    return(
        <div className="container-card-desconto">
        <div className="card-desconto">
            <div className="card-list-desconto">
                <div className="content-desconto">
                    <div className="text-desconto">
                        <h3 className='title-desconto'>Novo relógio inteligente da série 8</h3>
                        <p className='description-desconto'>Black Sport Band - Regular.</p>
                    </div>
                    <div className="star-desconto">
                        <p className='pstars'>(4.5)</p>
                        <Rating rating={4.5} maxStars={5}/>
                    </div>
                    <div className="prices-desconto">
                        <p className="price-nodiscont">de R$ 900,00</p>
                        <p className="price-discont">R$ 780,00</p>
                    </div>
                </div>
                    <Countdown date="2023-08-28T16:00:00"/>
                    <div className="buttons-desconto">
                        <FavoriteButton />
                        <CartButton />
                    </div>
            </div>
            <div className="container-image-desconto">
                <img className='image-desconto' src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRU3aE-8vYhoF4Ih1S-xZo5wyRj_urlo_dbe3r1Jfzqw4q1RetUBae3ExlPIqc9Wzdongsai0m7pPt65RS6ih2oGwQgPLE3ZlHJ1u3-munDr247DCLcWhUy-A&usqp=CAc" alt="" />
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