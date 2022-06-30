import React from "react";
import "./style.css";
import Layout from "../../components/Layout";
import ProductsSlides from "../../components/ProductPageComponents/ProductsSlides";
import ProductsFilter from "../../components/ProductPageComponents/ProductsFilter";

const ProductsPages2 = ({ page, prods }) => {
  return (
    <Layout>
      <div className="productPage">
        <ProductsSlides images={page.images} />
        <ProductsFilter page={page} prods={prods} />
      </div>
    </Layout>
  );
};

export default ProductsPages2;
