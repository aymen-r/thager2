import express from "express";
import data from "./data.js";

import mongoose from "mongoose";
import dotenv from "dotenv";

import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import path from "path";
import contactRouter from "./routes/contactsRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI_ATLAS)
  .then(() => {
    console.log("connected to db success");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "./uploads/")));

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/contact", contactRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// heroku upload

app.use(express.static(path.join(__dirname, "/front/build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/front/build/index.html"))
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
