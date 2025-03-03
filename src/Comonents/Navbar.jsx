import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backdropFilter: "blur(10px) saturate(200%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: "#fff", fontWeight: "bold" }}
        >
          E-Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: "#fff" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/create-product"
                style={{ color: "#fff" }}
              >
                Add Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/all-products"
                style={{ color: "#fff" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop" style={{ color: "#fff" }}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" style={{ color: "#fff" }}>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/account"
                style={{ color: "#fff" }}
              >
                Account
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products"
              aria-label="Search"
              style={{
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
