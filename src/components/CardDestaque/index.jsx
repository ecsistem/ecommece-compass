import {CardDestaquePropTypes } from '../../types/CardDestaquePropTypes';
import './style.css';
export function CardDestaque({title, description, iconImage}) {
    return (
        <div className="card-destaque">
            <div className="card-text-destaque">
            <h2 className="title-destaque">{title}</h2>
            <p className="description-destaque">{description}</p>
            </div>
            <div className="card-icon-destaque">
            <img className="image-destaque" src={iconImage} alt={title} height={40} width={40}/>
            </div>
        </div>
    )
}
CardDestaque.propTypes =CardDestaquePropTypes