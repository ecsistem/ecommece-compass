import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { Destaque } from '../../components/Destaque'
import { Desconto } from '../../components/Desconto'
import { Header } from '../../components/Header'
import './index.css'

export function Home() {

  return (
    <>
      <Header numberCart={1} username={"Welliton"}/>
      <Destaque />
      <Desconto />
      <ProductsContainer />
    </>
  );
}