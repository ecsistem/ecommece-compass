import { Destaque } from "../../components/Destaque";
import { Desconto } from "../../components/Desconto";
import ContainerList from "../../components/ContainerList/ContainerList";
import "./index.css";

export function Home() {
  return (
    <>
      <Destaque />
      <Desconto />
      <ContainerList />
    </>
  );
}
