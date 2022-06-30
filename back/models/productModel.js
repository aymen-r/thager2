import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    watts: { type: String, required: true },
    image: { type: String },
    files: [Object],
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true },
    tag: { type: String, required: true },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
