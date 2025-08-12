import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';

// If you have a global stylesheet, you can import it here
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

