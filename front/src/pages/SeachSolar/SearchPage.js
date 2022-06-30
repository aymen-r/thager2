import React, { useState } from "react";
import "./search.css";
import Layout from "../../components/Layout";
import ProductsSlides from "../../components/ProductPageComponents/ProductsSlides";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [categories, setCategories] = useState(["tokkma", "trina"]);
  return (
    <div>
      <Layout>
        <ProductsSlides />
        <h1>Solar Panels</h1>
        <div className="page">
          <div className="search_section">
            <ul>
              <li>
                <Link
                  to={"/"}
                  //   className={"all" === category ? "text-bold" : ""}
                  //   to={getFilterUrl({ category: "all" })}
                >
                  Any
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    to={"/"}
                    // className={c === category ? "text-bold" : ""}
                    // to={getFilterUrl({ category: c })}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="search_result">sd</div>
        </div>
      </Layout>
    </div>
  );
};

export default SearchPage;
