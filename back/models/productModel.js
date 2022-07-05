import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    doc_url: { type: String, required: true },
    watts: { type: String },
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
