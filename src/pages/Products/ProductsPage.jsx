import { Header } from "../../components/Header";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import { Footer } from "../../components/Footer";

import iphone from "../../assets/images/IphonePage.svg";

import "./ProductsPage.css";

const DUMMY_PRODUCT = [
  {
    id: 1,
    image: iphone,
    name: "Celular Apple iPhone com dois cartões SIM e 64 GB, além de duas câmeras de alta qualidade",
    description:
      "Apple iPhone 11, Dual SIM, 64 GB, 4G LTE, FaceTime, Roxo, Versão Internacional",
    rating: 4.5,
    price: 5000,
    discount: 0,
  },
];

export function ProductsPage() {
  return (
    <>
      <Header numberCart={1} username={"Welliton"} />
      {DUMMY_PRODUCT.map((product) => (
        <ContentContainer product={product} key={product.id} />
      ))}
      <Footer />
    </>
  );
}
