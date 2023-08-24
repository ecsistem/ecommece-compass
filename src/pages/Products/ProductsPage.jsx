import { Header } from "../../components/Header";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import { Footer } from "../../components/Footer";

import "./ProductsPage.css";

export function ProductsPage() {
  return (
    <>
      <Header numberCart={1} username={"Welliton"} />
        <ContentContainer />
      <Footer />
    </>
  );
}
