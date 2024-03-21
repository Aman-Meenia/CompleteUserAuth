import express from "express";
import dotenv from "dotenv";
import { connectMongoDB } from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";
const app = express();

// <------------------MIDDLEWARE ------------------------>
app.use(express.json());
dotenv.config();
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

// <--------------------EXPRESS ROUTES--------------------->
import userRouter from "./routes/userRoutes.js";

app.use("/api/v1/user", userRouter);

if (await connectMongoDB()) {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
}
