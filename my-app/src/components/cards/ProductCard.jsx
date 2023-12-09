import React from "react";
import './productcard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card card-style">
        <img
          src={product.image}
          className="custom-card-img"
          alt=""
        />
        <div className="card-body">
          <p className="card-text">{product.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
