import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import { isAuth, isAdmin } from "../utils.js";
import { upload } from "../helpers/filehelper.js";

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.post(
  "/newProduct",
  upload.array("images"),
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    try {
      let filesArray = [];
      req.files.forEach((element) => {
        filesArray.push(element.path);
      });
      const newProduct = new Product({
        name: req.body.name,
        image: filesArray[0],
        files: filesArray,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand,
        type: req.body.type,
        tag: req.body.tag,
        watts: req.body.watts,
        description: req.body.description,
      });
      const product = await newProduct.save();
      res.send({ message: "Product Created", product });
    } catch (error) {
      res.status(400).send(error.message);
    }
  })
);

const PAGE_SIZE = 6;
productRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;

    const searchQuery = query.query || "";

    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? {
            name: {
              $regex: searchQuery,
              $options: "i",
            },
          }
        : {};

    const products = await Product.find({
      ...queryFilter,
    })

      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countProducts = await Product.countDocuments({
      ...queryFilter,
    });
    res.send({
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  })
);

productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct("category");
    res.send(categories);
  })
);

productRouter.get("/name/:name", async (req, res) => {
  const product = await Product.findOne({ name: req.params.name });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
productRouter.get("/category/:category", async (req, res) => {
  const product = await Product.find({ category: req.params.category });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Products Not Found" });
  }
});

export default productRouter;
