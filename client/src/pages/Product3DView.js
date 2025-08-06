// client/src/pages/Product3DView.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ClothingViewer from '../components/ClothingViewer';
import useApi from '../hooks/useApi';
import './Product3DView.css';

const Product3DView = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useApi(`/api/products/${id}`);
  const navigate = useNavigate();

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
