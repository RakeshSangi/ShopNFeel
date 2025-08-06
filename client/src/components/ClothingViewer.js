// client/src/components/ClothingViewer.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';

const ClothingModel = () => {
  // Placeholder for loading a 3D model
  return (
    <mesh>
      <boxGeometry args={[1, 2, 0.5]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
};

const ClothingViewer = () => {
  return (
    <div style={{ height: '500px' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <ClothingModel />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ClothingViewer;
