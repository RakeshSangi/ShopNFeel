// client/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>ShopNFeel</h1>
        <p>Experience Fashion in 3D – Try Before You Buy</p>
        <Link to="/products" className="cta">
          Start Shopping
        </Link>
      </header>
    </div>
  );
};

export default Home;
