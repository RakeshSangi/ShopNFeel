// client/src/pages/ProductList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import useApi from '../hooks/useApi';
import './ProductList.css';

const ProductList = () => {
  const { data: products, loading, error } = useApi('/api/products');
  const navigate = useNavigate();

  if (loading) return <Loader />;
  if (error) return <Message variant="danger">{error}</Message>;

  return (
    <div className="product-list">
      <h2>Explore Our Collection</h2>
      <div className="products">
        {products && products.map(product => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => navigate(`/product-view/${product._id}`)}>
              View in 3D
            </button>
            <button
              onClick={() =>
                navigate('/try-on', { state: { overlayImage: product.overlayImage } })
              }
              className="try-on-btn"
            >
              Virtual Try-On
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
