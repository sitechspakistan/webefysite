import React from "react";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  return (
    <section className="section-blog flat-spacing">
      <div className="container">
        <div className="tf-grid-layout sm-col-2">
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
