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

// import multer from "multer";
//
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log(file);
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const uploadStorage = multer({ storage: storage });
// app.post("/api/upload/single", uploadStorage.single("file"), (req, res) => {
//   if (!req.file) {
//     console.log("NO file upload");
//   }
//
//   return res.send("Single file");
// });

if (await connectMongoDB()) {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
}
