# ShopNFeel - 3D Virtual Try-On E-Commerce Platform

ShopNFeel is a modern, full-stack e-commerce web application built with the MERN stack. It offers a unique shopping experience by allowing users to view products as interactive 3D models and virtually try on clothing using their webcam.

## Features

- **Product Catalog**: Browse a collection of clothing items fetched from a database.
- **Interactive 3D Viewer**: View detailed 3D models of products with zoom and rotation controls, built with React Three Fiber.
- **Virtual Try-On**: Use your device's camera to see a 2D overlay of clothing on your body in real-time, powered by TensorFlow.js.
- **Dynamic Frontend**: A responsive and interactive user interface built with React.
- **Robust Backend**: A powerful REST API built with Node.js and Express, connected to a MongoDB database.

## Tech Stack

- **Frontend**: React, React Router, React Three Fiber, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **3D & AI**: Three.js, TensorFlow.js (PoseNet)

---

## Project Structure

A brief overview of the key directories in the project.

```
ShopNFeel/
├── client/         # React frontend application
│   ├── public/     # Static assets (images, 3D models)
│   └── src/
│       ├── components/ # Reusable React components
│       ├── pages/      # Page-level components
│       └── App.js      # Main app component with routing
├── server/         # Node.js/Express backend API
│   ├── config/     # Configuration files (e.g., db.js for database connection)
│   ├── controllers/ # Route handler logic
│   ├── middleware/ # Custom Express middleware
│   ├── models/     # Mongoose data models (schemas)
│   └── routes/     # API route definitions
│   └── server.js     # Main server entry point
└── README.md       # You are here!
```

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community). You can use a local installation or a free cloud-based service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

## Installation & Setup

Follow these steps to get your development environment set up.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ShopNFeel.git
cd ShopNFeel
```

### 2. Backend Setup

Navigate to the server directory and install the required dependencies.

```bash
cd server
npm install
```

Next, create a `.env` file in the `server` directory. This file will store your environment variables.

```
touch .env
```

Open the `.env` file and add the following variables. Replace the placeholder with your actual MongoDB connection string.

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 3. Frontend Setup

In a new terminal, navigate to the client directory and install its dependencies.

```bash
cd client
npm install
```

---

## Usage

### 1. Seed the Database

Your application needs some initial product data to function. A seeder script is included for this purpose. Run the following command from the `server` directory:

```bash
# Make sure you are in the server/ directory
npm run data:import
```
This will populate your MongoDB database with the sample products.

### 2. Run the Application

You will need two separate terminals to run both the backend and frontend servers.

**In your first terminal (from the `server` directory):**
```bash
npm run server
```
Your backend API will now be running on `http://localhost:5000`.

**In your second terminal (from the `client` directory):**
```bash
npm start
```
Your React application will open in your browser at `http://localhost:3000`.

You can now access the website and explore all its features!