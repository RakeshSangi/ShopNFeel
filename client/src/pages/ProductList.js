// client/src/pages/ProductList.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Message from '../components/Message';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError('There was an error fetching the products.');
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <Message variant="danger">{error}</Message>;

  return (
    <div className="product-list">
      <h2>Explore Our Collection</h2>
      <div className="products">
        {products.map(product => (
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
