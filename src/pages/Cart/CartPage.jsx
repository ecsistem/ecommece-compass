import { Header } from "../../components/Header";
import { CartContainer } from "../../components/CartContainer";
import { Footer } from "../../components/Footer";
import { dadosCart } from "../../data/dataCart";



export function CartPage() {
  return (
    <>
      <Header numberCart={1} username={"Welliton"} />
        <CartContainer cart={dadosCart} />
      <Footer />
    </>
  );
}