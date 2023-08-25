import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home"
import { ProductsPage } from "../pages/Products/ProductsPage";
import { CartPage } from "../pages/Cart/CartPage";



export function MainRoutes(){

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pagina-de-detalhes/:productId" element={<ProductsPage />} />
      <Route path="/pagina-carrinho" element={<CartPage />}/>
    </Routes>
  );
}