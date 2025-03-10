//To add logic for adding All products

import React, { useEffect, useState } from "react";
import {
  fetchProducts,
  fetchproductsByPriceAsc,
  fetchproductsByPriceDesc,
  fetchproductsByProductNameAsc,
  fetchproductsByProductNameDesc,
} from "../../Services/ProductService";
import ProductItem from "./ProductItem";
import { fetchCategories } from "../../Services/CategoryService";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // For Category
  const [categories, setCategories] = useState([]);

  //===To Fetch All Products
  const getProducts = async () => {
    setProducts(await fetchProducts());
  };
  //===To Fetch All Categories
  const getCategories = async () => {
    setCategories(await fetchCategories());
  };

  useEffect(() => {
    getProducts();
    getCategories(); // calling getCategories
    console.log(products);
  }, []);

  //Sorting product price wise

  const sort = async (action) => {
    switch (action) {
      case "productName_ASC":
        setProducts(await fetchproductsByProductNameAsc());
        break;

      case "productName_DESC":
        setProducts(await fetchproductsByProductNameDesc());
        break;

      case "Low_To_High":
        setProducts(await fetchproductsByPriceAsc());
        break;

      case "High_To_Low":
        setProducts(await fetchproductsByPriceDesc());
        break;
    }
  };
  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <hr />
            <ul class="list-group">
              <li
                class="list-group-item"
                onClick={() => {
                  sort("productName_ASC");
                }}
              >
                A-Z
              </li>
              <li
                class="list-group-item"
                onClick={() => {
                  sort("productName_DESC");
                }}
              >
                Z-A
              </li>
              <li
                class="list-group-item"
                onClick={() => {
                  sort("Low_To_High");
                }}
              >
                Low to High
              </li>
              <li
                class="list-group-item"
                onClick={() => {
                  sort("High_To_Low");
                }}
              >
                High to Low
              </li>
            </ul>

            <hr />
            {/* ====Fetching Categories=== */}
            <ul className="list-group">
              {categories.map((category) => {
                return <li class="list-group-item">{category.categoryName}</li>;
              })}
            </ul>
          </div>

          {/* 2nd Column */}
          <div class="col">
            {/* ===All Products Start */}
            <div class="row row-cols-1 row-cols-md-3 g-2">
              {filteredProducts.length === 0 ? (
                <div className="col">
                  <h4>No products found.</h4>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <ProductItem
                    key={product.productId}
                    productId={product.productId}
                    productName={product.productName}
                    productDescription={product.productDescription}
                    productPrice={product.productPrice}
                    refreshProduct={getProducts}
                  />
                ))
              )}
            </div>

            {/* ====All Products End */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
