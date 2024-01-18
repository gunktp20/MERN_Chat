import express from "express";
import cors from "cors";
import 'express-async-errors'; 
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
//import connect database module that we created
import connectDB from "./db/connect";
//import router for handler request
import authRouter from "./routes/auth.routes";
//import error handler middleware for manage error
import notFoundMiddleware from "./middlewares/not-found";
import errorHandlerMiddleware from "./middlewares/error-handler";
import helmet from "helmet";
import { StatusCodes } from "http-status-codes";
// import "express-async-errors";

const app = express();

app.use(helmet());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use((req, res, next) => {
  console.log(req.method, req.path);
  console.log("------------------------");
  next();
});

app.get("/api/v1", (req, res) => {
  return res
    .status(StatusCodes.OK)
    .json({ msg: "Welcome to our carental API" });
});

app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    await connectDB(String(MONGO_URL));
    app.listen(PORT, () => {
      console.log(`server is running on port : ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
