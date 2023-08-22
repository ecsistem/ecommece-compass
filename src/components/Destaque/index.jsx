import { CardDestaque } from '../CardDestaque';
import { dadosDestaque } from '../../data/dataDestaque';

export function Destaque() {
    return (
        <div className="container-card-destaque">
            {dadosDestaque.map((destaque, index) => (
                <CardDestaque
                    key={index}
                    title={destaque.title}
                    description={destaque.description}
                    iconImage={destaque.iconImage}
                />
            ))}
        </div>
    );
}