// client/src/components/PoseTryOn.js
import React, { useRef, useEffect } from 'react';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';

const PoseTryOn = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
      const video = videoRef.current;

      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          video.srcObject = stream;
          video.play();
        });
      }

      const detectPose = async () => {
        if (video.readyState === 4) {
          const poses = await detector.estimatePoses(video);
          const ctx = canvasRef.current.getContext('2d');
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

          poses.forEach((pose) => {
            pose.keypoints.forEach((keypoint) => {
              if (keypoint.score > 0.5) {
                ctx.beginPath();
                ctx.arc(keypoint.x, keypoint.y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = 'red';
                ctx.fill();
              }
            });
          });
        }
        requestAnimationFrame(detectPose);
      };

      detectPose();
    };

    loadModel();
  }, []);

  return (
    <div>
      <h2>Virtual Try-On (Pose Detection)</h2>
      <video ref={videoRef} width="640" height="480" style={{ display: 'none' }} />
      <canvas ref={canvasRef} width="640" height="480" />
    </div>
  );
};

export default PoseTryOn;
