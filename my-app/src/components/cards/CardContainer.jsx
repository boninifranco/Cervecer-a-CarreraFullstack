// CardContainer.js
import React from "react";
import ProductCard from "./ProductCard";

const CardContainer = ({ products }) => {
  return (
    <div className="container d-flex justify-content-center h-100">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
