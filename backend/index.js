import express from "express";
import dotenv from "dotenv";
import { connectMongoDB } from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

// <------------------MIDDLEWARE ------------------------>
app.use(express.json());
dotenv.config();
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "*",
  credentials: true
}));



// <--------------------EXPRESS ROUTES--------------------->
import userRouter from "./routes/userRoutes.js";
import questionRouter from "./routes/questionRoutes.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/question", questionRouter);

if (await connectMongoDB()) {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
}
