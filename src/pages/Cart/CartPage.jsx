import { Header } from "../../components/Header";
import { CartContainer } from "../../components/CartContainer";
import { Footer } from "../../components/Footer";

import { selectCartTotalItems } from '../../components/Slices/CartSelector';
import { useSelector } from "react-redux/es/hooks/useSelector";



export function CartPage() {
  const numberCart = useSelector(selectCartTotalItems);
  return (
    <>
      <Header numberCart={numberCart} username={"Welliton"} />
        <CartContainer />
      <Footer />
    </>
  );
}