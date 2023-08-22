import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { Destaque } from '../../components/Destaque'
import { Desconto } from '../../components/Desconto'
import './index.css'

export function Home() {

  return (
    <>
      <ProductsContainer />
      <Destaque />
      <Desconto />
    </>
  );
}
