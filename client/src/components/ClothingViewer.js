// client/src/components/ClothingViewer.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

const ClothingModel = ({ modelPath }) => {
  // Use the useGLTF hook to load the model. It's automatically cached.
  const { scene } = useGLTF(modelPath);
  // The primitive object allows us to render the loaded scene directly.
  // You can adjust scale, position, etc., as needed.
  return <primitive object={scene} scale={2} />;
};

const ClothingViewer = ({ modelPath }) => {
  return (
    <div style={{ height: '500px', background: '#f0f0f0' }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <ClothingModel modelPath={modelPath} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ClothingViewer;
