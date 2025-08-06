# 🛍️ ShopNFeel

**ShopNFeel** is a cutting-edge web-based 3D shopping application designed to revolutionize the way men and women explore fashion. By combining virtual try-on technology with realistic 3D visualization, the app allows users to see, feel, and experience clothing before making a purchase — all from the comfort of home.

---

## 🌟 Features

- 🏠 Homepage with immersive branding and CTA
- 🛍️ Product Listing with dynamic backend integration
- 🧥 3D Viewer using Three.js and React Three Fiber
- 🧍 Virtual Try-On using MediaPipe Pose Detection
- 🔗 Backend API for product data (Node.js + Express)
- 🧭 Navigation and routing with React Router


 Step 1: Initialize React Frontend
 Open your terminal and run:
	npx create-react-app client
	cd client
	npm install three @react-three/fiber @react-three/drei axios

This sets up your React app and installs:

three: for 3D rendering
@react-three/fiber: React renderer for Three.js
@react-three/drei: useful helpers for 3D scenes
axios: for API calls

⚙️ Step 2: Initialize Node.js Backend
In the root folder:
mkdir server
cd server
npm init -y
npm install express cors mongoose dotenv

Create a basic server file:

// server/server.js

Let's write the starter code for your ShopNFeel web app
🏠 Homepage Component (Home.js)

// client/src/pages/Home.js

🖌️ Basic CSS (Home.css)
🛍️ Product Listing Page (ProductList.js)
🖌️ Product CSS (ProductList.css)

Let's add routing and a navigation bar to your React app so users can move between the homepage and product listing.

🧭 Step 1: Install React Router
In your client folder, run:

npm install react-router-dom

🧩 Step 2: Set Up Routing (App.js)

// client/src/App.js
🧭Step 3: Create Navigation Bar (Navbar.js)
🖌️ Navbar CSS (Navbar.css)

Let’s integrate a 3D viewer into your React app using Three.js via @react-three/fiber. This will allow users to interact with clothing models in a realistic 3D space.

🧊 Step-by-Step: 3D Viewer Setup
✅ 1. Install Required Packages

If you haven’t already, run:
npm install three @react-three/fiber @react-three/drei

✅ 2. Create the 3D Viewer Component

// client/src/components/ClothingViewer.js
✅ 3. Use the Viewer in a Page
// client/src/pages/Product3DView
✅ 4. Add Route to Viewer Page
Update App.js:
import Product3DView from './pages/Product3DView';

<Route path="/product-view" element={<Product3DView />} />


This setup uses a placeholder box as the clothing model. You can later replace it with a .glb or .gltf file using useGLTF from @react-three/drei.

Let’s now set up the backend API for your ShopNFeel project using Node.js + Express. This API will serve product data to your frontend.

🛠️ Step-by-Step: Backend API Setup
✅ 1. Create Folder Structure
Inside your server/ folder:

server/
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── data/
│   └── products.js
├── server.js
└── package.json

✅ 2.  Product Data (data/products.js)

✅ 3. Controller (controllers/productController.js)

✅ 4. Routes (routes/productRoutes.js)
✅ 5. Main Server File (server.js)

✅ 6. Test the API
Start the server:

node server.js

Visit http://localhost:5000/api/products in your browser or Postman — you should see the product list in JSON format.

/// Fetch Products from Backend
npm install axios

Step-by-Step: Connect Frontend to Backend
✅ 1. Update ProductList.js
Replace your static product array with Axios-based fetching:


// client/src/pages/ProductList.js

✅ 2. Ensure Backend is Running
Start your backend server:
node server/server.js

Make sure it’s accessible at http://localhost:5000/api/products.

✅ 3. CORS Configuration
If you run into CORS issues, ensure your backend has:

const cors = require('cors');
app.use(cors());

///Let’s build the Virtual Try-On feature for your ShopNFeel web app

🧍‍♂️ Virtual Try-On: Web-Based Approach
✅ Option 1: Webcam-Based Try-On
Use MediaPipe for body or pose detection
Overlay clothing images on detected body parts
Works in real-time with webcam
✅ Option 2: Image Upload Try-On
User uploads a photo
Detect body landmarks
Overlay clothing image on top
🧪 Technologies Used
@mediapipe/pose or @mediapipe/selfie_segmentation
@tensorflow-models/body-pix or pose-detection
HTML5 Canvas for overlay
React for UI

🧩  Component: Image Upload + Overlay

// client/src/pages/TryOn.js

📝 Note: Replace /assets/shirt-overlay.png with a transparent PNG of a shirt or jacket.

🧍‍♂️ Step-by-Step: Pose Detection with MediaPipe
✅ 1. Install Required Packages
npm install @tensorflow-models/pose-detection @tensorflow/tfjs-core @tensorflow/tfjs-backend-webgl

✅ 2. Create Pose Detection Component

// client/src/components/PoseTryOn.js

✅ 3. Add Route to App

import PoseTryOn from './components/PoseTryOn';

<Route path="/try-on" element={<PoseTryOn />} />

This setup:
Uses webcam input
Detects body keypoints
Draws red dots on detected joints (you can later overlay clothing images here)

✅ What You’ve Completed
🌐 Frontend (React)
Homepage with branding and CTA
Product Listing Page with dynamic data from backend
Navigation Bar with routing
3D Viewer using @react-three/fiber
Virtual Try-On using MediaPipe pose detection
🔧 Backend (Node.js + Express)
API endpoint for products (/api/products)
Sample product data served to frontend

📝 Setup Instructions (Manual Copy)

## 🛠️ Setup Instructions

### Frontend (React)
1. Navigate to the `client` folder:
   ```bash
   cd client
   npm install
   npm start
   ```
Backend (Node.js + Express)
Navigate to the server folder:
cd server
npm install
node server.js


showcase the ShopNFeel project:

1. Start the Backend Server
cd server
node server.js
2. Start the Frontend App
cd client
npm start


Access the App
Frontend: http://localhost:3000
Backend API: http://localhost:5000/api/products

Explore the homepage and product listing
Click “View in 3D” to open the 3D viewer
Go to /try-on to test the virtual try-on feature


                        *** Thank You ***

