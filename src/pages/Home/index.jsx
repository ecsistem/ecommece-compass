import { Header } from "../../components/Header";
import { Destaque } from "../../components/Destaque";
import { Desconto } from "../../components/Desconto";
import ContainerList from "../../components/ContainerList/ContainerList";
import { LowerBanner } from "../../components/LowerBanner";
import {Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { selectCartTotalItems } from '../../components/Slices/CartSelector';
import { useSelector } from "react-redux/es/hooks/useSelector";


export function Home() {
  const numberCart = useSelector(selectCartTotalItems);
  console.log('%c🚀Gostou do projeto? Contrate nosso squad! 🚀', 'font-size: 18px; color: #f39c12; font-weight: bold;');
console.log('%c📧 Segue nosso github: @ecsistem, @eduardokuritza, cristopherkovalski', 'font-size: 14px; color: #3498db;');
  return (
    <>
      <Header numberCart={numberCart} username={"Welliton"} />
      <Banner />
      <Destaque />
      <Desconto />
      <ContainerList />
      <LowerBanner />
      <Footer />
    </>
  );
}
