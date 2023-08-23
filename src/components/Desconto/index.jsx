import { CardDesconto } from '../CardDesconto'
import './styles.css'
export function Desconto(){
    return(
        <div className='desconto-container'>
                <h1 className='title-section'>Ofertas terminando em breve</h1>
            <div className='list-card-desconto'>
                <CardDesconto title="Novo relógio inteligente da série 8" description="Black Sport Band - Regular." price={900.00} priceDiscount={700.00} image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRU3aE-8vYhoF4Ih1S-xZo5wyRj_urlo_dbe3r1Jfzqw4q1RetUBae3ExlPIqc9Wzdongsai0m7pPt65RS6ih2oGwQgPLE3ZlHJ1u3-munDr247DCLcWhUy-A&usqp=CAc" stars="4.5" date="2023-08-28T16:00:00"/>
                <CardDesconto title="Novo relógio inteligente da série 8" description="Black Sport Band - Regular." price={900.00} priceDiscount={700.00} image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRU3aE-8vYhoF4Ih1S-xZo5wyRj_urlo_dbe3r1Jfzqw4q1RetUBae3ExlPIqc9Wzdongsai0m7pPt65RS6ih2oGwQgPLE3ZlHJ1u3-munDr247DCLcWhUy-A&usqp=CAc" stars="4.5" date="2023-08-30T16:00:00"/>
            </div>

        </div>
    )
}