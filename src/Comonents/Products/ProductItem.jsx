import React from "react";
import logo from "../../logo.svg";
import AllProducts from "./AllProducts";
import { Navigate } from "react-router-dom";
import UpdateForm from "./UpdateForm";
import {
  deleteProduct,
  deleteProductById,
} from "../../Services/ProductService";

function ProductItem({
  productId,
  productName,
  productDescription,
  productPrice,
  refreshProduct,
}) {
  const deleteProduct = async () => {
    await deleteProductById(productId);
    refreshProduct();
  };

  return (
    <div class="col">
      <div class="card">
        <img
          src={logo}
          class="card-img-top"
          alt="..."
          onClick={() => {
            Navigate(`/products/${productId}`);
          }}
        />
        <div class="card-body">
          <h5 class="card-title">{productName}</h5>
          <p class="card-text">{productDescription}</p>
          <p class="card-text">Price: {productPrice}/-</p>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#update-modal-${productId}`}
          >
            Update
          </button>
          <button className="btn btn-danger ms-2" onClick={deleteProduct}>
            Delete
          </button>

          <UpdateForm
            productId={productId}
            productName={productName}
            productDescription={productDescription}
            productPrice={productPrice}
            refreshProduct={refreshProduct}
          />
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
