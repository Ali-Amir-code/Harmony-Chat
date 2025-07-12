import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // For MongoDB driver versions 4.0 and above
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Using MongoDB driver version: ${mongoose.version}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;