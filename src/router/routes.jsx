import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home"
import { ProductsPage } from "../pages/Products/ProductsPage";


export function MainRoutes(){

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pagina-de-detalhes" element={<ProductsPage />} />
    </Routes>
  );
}