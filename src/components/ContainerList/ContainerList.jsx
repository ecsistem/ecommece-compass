import  { useState, useEffect, useMemo } from "react";
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

  const priceAdditions = useMemo(() => {
    return products.map(product => {
      const min = -5;
      const max = 10;
      const randomPercentage = Math.floor(Math.random() * (max - min + 1)) + min;
      return (randomPercentage * product.price) / 100 + product.price;
    });
  }, [products]);

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
    <div className="containerList">
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
      {currentProducts.map((product, index) => (
          <ProductsContainer
            product={{ ...product }}
            key={product.id}
            priceAddition={priceAdditions[index]} // Use precalculated priceAddition
          />
        ))}
      </div>
      <div className="returnNextButton">
        <ReturnButton onClick={handleReturnPage} disabled={currentPage === 1} />
        <NextButton onClick={handleNextPage} disabled={indexOfLastProduct >= products.length} />
      </div>
    </div>
  );
}

export default ContainerList;