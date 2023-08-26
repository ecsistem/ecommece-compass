import { CardDesconto } from '../CardDesconto'
import { dataPromocao } from './../../data/dataPomocao';
import './styles.css'
export function Desconto(){
    return(
        <div className='desconto-container distance'>
                <h1 className='title-section'>Ofertas terminando em breve</h1>
            <div className='list-card-desconto'>
            {dataPromocao.map((card, index) => (
        <CardDesconto
          key={index}
          title={card.title}
          description={card.description}
          price={card.price}
          priceDiscount={card.priceDiscount}
          image={card.image}
          stars={card.stars}
          date={card.date}
        />
      ))}
            </div>

        </div>
    )
}