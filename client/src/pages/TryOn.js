// client/src/pages/TryOn.js
import React, { useState } from 'react';

const TryOn = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>Virtual Try-On</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && (
        <div style={{ position: 'relative', marginTop: '20px' }}>
          <img src={image} alt="User" style={{ width: '300px' }} />
          <img
            src="/assets/shirt-overlay.png"
            alt="Clothing"
            style={{
              position: 'absolute',
              top: '50px',
              left: '50px',
              width: '200px',
              opacity: 0.8,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TryOn;
