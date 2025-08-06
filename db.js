const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Mongoose v6+ no longer requires the useNewUrlParser and useUnifiedTopology options.
    // They are now the default.
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit process with failure so the app doesn't run without a DB connection
    process.exit(1);
  }
};

module.exports = connectDB;