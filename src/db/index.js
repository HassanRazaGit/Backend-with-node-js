import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.DATABASE_URL);
    console.log(
      "Database has been connected ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Error while connecting database");
    process.exit(1);
  }
};

export default connectDB;
