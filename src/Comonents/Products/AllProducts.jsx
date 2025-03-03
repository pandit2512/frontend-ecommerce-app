//To add logic for adding All products

import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../Services/ProductService";
import ProductItem from "./ProductItem";

function AllProducts() {
  const [products, setProducts] = useState([]);

  //===To Fetch All Products
  const getProducts = async () => {
    setProducts(await fetchProducts());
  };

  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);

  return (
    <div className="mt-3">
      <div class="container">
        <div class="row">
          <div class="col-2">
            {/* 1st Column  */}
            <p>
              Total Products: <strong>{products.length}</strong>
            </p>
            <label for="exampleInputEmail1" class="form-label">
              Search Products
            </label>

            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <hr />
            <ul class="list-group">
              <li class="list-group-item">A-Z</li>
              <li class="list-group-item">Z-A</li>
              <li class="list-group-item">Low to High</li>
              <li class="list-group-item">High to Low</li>
            </ul>
          </div>

          {/* 2nd Column */}
          <div class="col">
            {/* ===All Products Start */}
            <div class="row row-cols-1 row-cols-md-3 g-2">
              {products.map((product) => {
                // return <ProductItem key={product.id} product={product} />;
                return (
                  <ProductItem
                    productId={product.productId}
                    productName={product.productName}
                    productDescription={product.productDescription}
                    productPrice={product.productPrice}
                  />
                );
              })}
            </div>

            {/* ====All Products End */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
