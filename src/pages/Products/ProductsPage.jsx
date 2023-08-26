import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import { Footer } from '../../components/Footer';
import { clienteAxios } from '../../utils/service/cliente-api';
import './ProductsPage.css';
import { selectCartTotalItems } from '../../components/Slices/CartSelector';
import { useSelector } from "react-redux/es/hooks/useSelector";

export function ProductsPage() {
  const numberCart = useSelector(selectCartTotalItems);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await clienteAxios.get(`/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  let content;

  if (loading) {
    content = (<div className="loading-container">
    <p>Loading...</p>
  </div>);
  } else if (error) {
    content = <p className="error-message">{error}</p>;
  } else if (product) {
    content = <ContentContainer product={product} key={product.id} />;
  }

  return (
    <>
      <Header numberCart={numberCart} username="Welliton" />
      <div className="content-container">{content}</div>
      <Footer />
    </>
  );
}
