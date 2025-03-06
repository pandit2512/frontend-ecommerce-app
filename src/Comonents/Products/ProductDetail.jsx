import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../Services/ProductService";
import logo from "../../logo.svg";
import "../../productdetail.css";

function ProductDetail() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  const getProductById = async () => {
    setProduct(await fetchProductById(productId));
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div>
      <section
        class="product m-5 w-50"
        style={{ position: "relative", left: 200 + "px" }}
      >
        <div class="product__photo">
          <div class="photo-container">
            <div class="photo-main">
              <div class="controls">
                <i class="material-icons">share</i>
                <i class="material-icons">favorite_border</i>
              </div>
              <img src={logo} alt="green apple slice" />
            </div>
          </div>
        </div>
        <div class="product__info">
          <div class="title">
            <h1>{product.productName}</h1>
          </div>
          <div class="price">
            R$ <span>{product.productPrice}</span>
          </div>

          <div class="description">{product.productDescription}</div>
          <button class="buy--btn">ADD TO CART</button>
        </div>
      </section>

      <footer>
        <p>
          Design from{" "}
          <a href="https://dribbble.com/shots/5216438-Daily-UI-012">
            dribbble shot
          </a>{" "}
          of <a href="https://dribbble.com/rodrigorramos">Rodrigo Ramos</a>
        </p>
      </footer>
    </div>

    // <div className="card mx-5 my-5 w-50 container  shadow p-3 mb-5 bg-body rounded">
    //     <img src={logo} className="card-img-top w-75" alt="..." />
    //     <div className="card-body">
    //         <h5 className="card-title">{product.productName}</h5>
    //         <p className="card-text">{product.productDescription}</p>
    //         <p className="card-text">{product.productPrice}</p>

    //     </div>
    // </div>
  );
}

export default ProductDetail;
