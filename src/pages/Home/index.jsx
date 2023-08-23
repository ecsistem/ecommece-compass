import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { Destaque } from '../../components/Destaque'
import { Desconto } from '../../components/Desconto'
import { Header } from '../../components/Header'
import './index.css'

export function Home() {

  return (
    <>
      <Header />
      <Destaque />
      <Desconto />
      <ProductsContainer />
    </>
  );
}