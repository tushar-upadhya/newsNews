import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("connect");
  } catch (error) {
    console.log("connect failed");
    process.exit(1);
  }
};

export default dbConnection;
