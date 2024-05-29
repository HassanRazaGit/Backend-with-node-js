import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
dotenv.config();

connectDB()
  .then(() => {
    try {
      app.listen(process.env.PORT || 8001, () => {
        console.log(`Server has been started on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.log("Error occured while creating server: ", error);
    }
  })
  .catch((error) => {
    console.log("Error occured while connecting database: ", error);
  });
