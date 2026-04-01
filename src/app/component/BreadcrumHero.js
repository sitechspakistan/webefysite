import React from "react";

const BreadcrumHero = () => {
  return (
    <>
      <div className="section-page-title">
        <div className="container text-center">
          <h1 className="page-title fw-semibold effectFade fadeZoom">Aigocy</h1>
          <div className="breadcrumbs effectFade fadeUp">
            <a href="index.html" className="link1">
              Home
            </a>
            <div>/</div>
            <div>Blog</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumHero;
