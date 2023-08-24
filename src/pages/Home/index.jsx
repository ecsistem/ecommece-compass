import { Header } from "../../components/Header";
import { Destaque } from "../../components/Destaque";
import { Desconto } from "../../components/Desconto";
import ContainerList from "../../components/ContainerList/ContainerList";
import { LowerBanner } from "../../components/LowerBanner";
import {Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";


export function Home() {
  return (
    <>
      <Header numberCart={1} username={"Welliton"} />
      <Banner />
      <Destaque />
      <Desconto />
      <ContainerList />
      <LowerBanner />
      <Footer />
    </>
  );
}
