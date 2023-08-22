import { CardDesconto } from '../CardDesconto'
import './styles.css'
export function Desconto(){
    return(
        <div className='desconto-container'>
            <div>
                <h1>Desconto</h1>
            </div>
            <div className='list-card-desconto'>
                <CardDesconto/>
                <CardDesconto/>
            </div>

        </div>
    )
}