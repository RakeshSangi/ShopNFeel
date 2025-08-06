// client/src/pages/Product3DView.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ClothingViewer from '../components/ClothingViewer';
import './Product3DView.css';

const Product3DView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch product details.');
        console.error('Error fetching product:', err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : product ? (
    <div className="product-view-container">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {product.model ? (
        <ClothingViewer modelPath={product.model} />
      ) : (
        <Message>3D model not available for this product.</Message>
      )}
      <div className="product-view-actions">
        <button
          className="try-on-btn"
          disabled={!product.overlayImage}
          onClick={() => navigate('/try-on', { state: { overlayImage: product.overlayImage } })}
        >
          Virtual Try-On
        </button>
      </div>
    </div>
  ) : null;
};

export default Product3DView;
