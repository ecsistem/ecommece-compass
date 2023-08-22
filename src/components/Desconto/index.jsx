import { CardDesconto } from '../CardDesconto'
import './styles.css'
export function Desconto(){
    return(
        <div className='desconto-container'>
                <h1 className='title-section'>Ofertas terminando em breve</h1>
            <div className='list-card-desconto'>
                <CardDesconto/>
                <CardDesconto/>
            </div>

        </div>
    )
}