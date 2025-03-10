import React, { useState } from "react";
import { addProduct } from "../../Services/ProductService";
import { ToastContainer, toast } from "react-toastify";

function ProductForm() {
  //==Handling Form
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    //react controlled form
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = (e) => {
    //to prevent reload of page
    e.preventDefault();

    addProduct(formData);
    toast.success("Product Added Successfully!");

    console.log("form submitted", formData);
    // Clear the form after submitting
    setFormData({
      productName: "",
      productDescription: "",
      productPrice: "",
    });
  };

  return (
    <div className="container">
      {/* ==== form for Adding Products ==== */}

      <form action="" onSubmit={handleSubmit}>
        {/* for product Name */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.productName}
            onChange={handleChange}
            name="productName"
            required
          />
        </div>

        {/* for product Description */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.productDescription}
            onChange={handleChange}
            name="productDescription"
            required
          />
        </div>

        {/* for product Price */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.productPrice}
            onChange={handleChange}
            name="productPrice"
            required
          />
        </div>
        {/* submit button  */}
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default ProductForm;
