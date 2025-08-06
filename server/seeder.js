const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const products = require('./data/products');
const Product = require('./models/productModel');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear out any existing data
    await Product.deleteMany();

    // The `products` data doesn't have MongoDB `_id`s, so we can insert it directly.
    // Mongoose will automatically add the `_id` fields.
    await Product.insertMany(products);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Check for command line arguments to determine whether to import or destroy
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}