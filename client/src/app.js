// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Navbar from './components/Navbar';
import Product3DView from './pages/Product3DView';
import PoseTryOn from './components/PoseTryOn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-view" element={<Product3DView />} />
        <Route path="/try-on" element={<PoseTryOn />} />

        

      </Routes>
    </Router>
  );
}

export default App;
