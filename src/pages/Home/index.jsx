import ContainerList from "../../components/ContainerList/ContainerList";
import { Destaque } from "../../components/Destaque";
import { Desconto } from "../../components/Desconto";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./index.css";
import Banner from "../../components/Banner";

export function Home() {
  return (
    <>
      <Header numberCart={1} username={"Welliton"} />
      <Banner />
      <Destaque />
      <Desconto />
      <ContainerList />
      <Footer />
    </>
  );
}
