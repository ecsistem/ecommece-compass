import  { useState, useEffect } from "react";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import arrowIcon from "../../assets/images/Icons/ArrowIcon.svg";
import "./ContainerList.css";
import ReturnButton from "../Buttons/ReturnButton";
import NextButton from "../Buttons/NextButton.";
import { clienteAxios } from "../../utils/service/cliente-api";

function ContainerList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await clienteAxios.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="containerList distance">
      <div className="containerHeader">
        <button className="verTudoButton">
          <img src={arrowIcon} alt="Arrow Icon" /> Ver Tudo
        </button>
        <div className="containerTitle">
          <h1>Produtos em destaque</h1>
          <h2>Produtos em destaque mais recentes adicionados</h2>
        </div>
      </div>
      <div className="productList">
        {products.map((product) => {
          const randomPercentage = Math.random() * 6;
          const priceApproximation = (randomPercentage + 95) / 100;
          const finalPrice = product.price * priceApproximation;
          return <ProductsContainer product={{ ...product }} key={product.id} finalPrice={finalPrice} />;
        })}
      </div>
      <div className="returnNextButton">
        <ReturnButton />
        <NextButton />
      </div>
    </div>
  );
}

export default ContainerList;
