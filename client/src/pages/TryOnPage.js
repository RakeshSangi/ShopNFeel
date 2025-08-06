// client/src/pages/TryOnPage.js
import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import Message from '../components/Message';
import Loader from '../components/Loader';
import './TryOnPage.css';

// Constants for the virtual try-on experience
const POSE_CONFIDENCE_THRESHOLD = 0.5;
const CLOTHING_SCALE_FACTOR = 1.8; // Adjust this for a better fit

const TryOnPage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const location = useLocation();
  const overlayImage = location.state?.overlayImage;
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('Initializing...');

  useEffect(() => {
    if (!overlayImage) return;

    let detector;
    let animationFrameId;
    let videoStream;

    const loadModel = async () => {
      try {
        setLoadingMessage('Loading 3D Pose Model...');
        detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);

        setLoadingMessage('Starting Camera...');
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = videoRef.current;
        if (video) {
          video.srcObject = videoStream;
          video.onloadeddata = () => {
            video.play();
            setLoading(false);
            detectPoseLoop();
          };
        }
      } catch (error) {
        console.error('Failed to load model or camera:', error);
        setLoadingMessage('Error: Could not start camera or model. Please check permissions.');
      }
    };

    const clothingOverlay = new Image();
    clothingOverlay.src = overlayImage;

    const detectPoseLoop = async () => {
      if (
        !detector ||
        !videoRef.current ||
        videoRef.current.readyState !== 4
      ) {
        animationFrameId = requestAnimationFrame(detectPoseLoop);
        return;
      }

      const poses = await detector.estimatePoses(videoRef.current);
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      if (poses && poses.length > 0) {
        // Find keypoints
        const leftShoulder = poses[0].keypoints.find(k => k.name === 'left_shoulder');
        const rightShoulder = poses[0].keypoints.find(k => k.name === 'right_shoulder');
        const leftHip = poses[0].keypoints.find(k => k.name === 'left_hip');
        const rightHip = poses[0].keypoints.find(k => k.name === 'right_hip');

        const allPointsVisible = leftShoulder?.score > POSE_CONFIDENCE_THRESHOLD && rightShoulder?.score > POSE_CONFIDENCE_THRESHOLD && leftHip?.score > POSE_CONFIDENCE_THRESHOLD && rightHip?.score > POSE_CONFIDENCE_THRESHOLD;

        if (allPointsVisible) {
          // Calculate placement based on keypoints
          const shoulderWidth = Math.abs(rightShoulder.x - leftShoulder.x);
          const overlayWidth = shoulderWidth * CLOTHING_SCALE_FACTOR; 
          const overlayHeight = (overlayWidth / clothingOverlay.width) * clothingOverlay.height;

          const overlayX = leftShoulder.x - (overlayWidth - shoulderWidth) / 2;
          const overlayY = (leftShoulder.y + rightShoulder.y) / 2 - (overlayHeight * 0.1); // Start slightly above shoulders

          ctx.drawImage(clothingOverlay, overlayX, overlayY, overlayWidth, overlayHeight);
        }
      }
      animationFrameId = requestAnimationFrame(detectPoseLoop);
    };

    loadModel();

    return () => {
      // Crucial cleanup to turn off the camera
      cancelAnimationFrame(animationFrameId);
      if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [overlayImage]);

  if (!overlayImage) {
    return (
      <div className="try-on-container">
        <Message variant="danger">
          No clothing item selected. Please go to the products page and select an item to try on.
        </Message>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="try-on-container">
        <Loader />
        <p className="loading-message">{loadingMessage}</p>
      </div>
    );
  }

  return (
    <div className="try-on-container">
      <h2>Virtual Try-On</h2>
      <p>Position yourself in front of the camera.</p>
      <div className="video-container">
        <video ref={videoRef} className="video-feed" autoPlay playsInline muted />
        <canvas ref={canvasRef} className="video-overlay" width="640" height="480" />
      </div>
    </div>
  );
};

export default TryOnPage;
