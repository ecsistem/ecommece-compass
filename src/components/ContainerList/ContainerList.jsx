import  { useState, useEffect } from "react";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import arrowIcon from "../../assets/images/Icons/ArrowIcon.svg";
import "./ContainerList.css";
import ReturnButton from "../Buttons/ReturnButton";
import NextButton from "../Buttons/NextButton.";
import { clienteAxios } from "../../utils/service/cliente-api";

function ContainerList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

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

  const handleNextPage = () => {
    console.log("Next button clicked");
    setCurrentPage(currentPage + 1);
  };

  const handleReturnPage = () => {
    console.log("Return button clicked");
    setCurrentPage(currentPage - 1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  console.log("Current Page:", currentPage);
  console.log("Current Products:", currentProducts);

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
        {currentProducts.map((product) => {
          const randomPercentage = Math.random() * 6;
          const priceApproximation = (randomPercentage + 95) / 100;
          const finalPrice = product.price * priceApproximation;
          return <ProductsContainer product={{ ...product }} key={product.id} finalPrice={finalPrice} />;
        })}
      </div>
      <div className="returnNextButton">
        <ReturnButton onClick={handleReturnPage} disabled={currentPage === 1} />
        <NextButton onClick={handleNextPage} disabled={indexOfLastProduct >= products.length} />
      </div>
    </div>
  );
}

export default ContainerList;