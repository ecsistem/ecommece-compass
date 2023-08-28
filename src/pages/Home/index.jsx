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
