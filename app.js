import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();
app.use(express.json())
app.use("/api",router);
app.use("/api/blog",blogRouter);

mongoose
  .connect(
    "mongodb+srv://admin:rhinorush1991@cluster0.gafezh1.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(8800))
  .then(() =>
    console.log("Connected to database and listening to localhost 8800...")
  )
  .catch((err) => console.log(err));
