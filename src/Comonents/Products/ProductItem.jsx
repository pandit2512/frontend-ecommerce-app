import React from "react";
import logo from "../../logo.svg";
import AllProducts from "./AllProducts";

function ProductItem({
  productId,
  productName,
  productDescription,
  productPrice,
}) {
  return (
    <div class="col">
      <div class="card">
        <img src={logo} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{productName}</h5>
          <p class="card-text">{productDescription}</p>
          <p class="card-text">Price: {productPrice}/-</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
