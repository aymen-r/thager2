import React from "react";
import Layout from "../../components/Layout";
import "./style.css";

const NewsPage = () => {
  return (
    <Layout>
      <div className="newspage">
        <h1>News & Videos</h1>
        <div className="blog">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xKxrkht7CpY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/94XD6GxRrlQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
