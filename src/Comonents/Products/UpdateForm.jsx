import React, { useState } from "react";
import {
  deleteProduct,
  deleteProductById,
  updateProduct,
} from "../../Services/ProductService";

function UpdateForm({
  productId,
  productName,
  productDescription,
  productPrice,
  refreshProduct,
}) {
  // above we have passed the props from the ProductItem => <UpdateForm --""--/>
  //== Handling Form ==
  const [formData, setFormData] = useState({
    // after clicking on update form will open with the provided data
    productName: productName,
    productDescription: productDescription,
    productPrice: productPrice,
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    //react controlled form
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = async (e) => {
    //to prevent reload of page
    e.preventDefault();
    const data = await updateProduct(productId, formData); // calling updateProduct from ProductService
    refreshProduct();

    // await deleteProductById(productId, formData);
  };

  return (
    <div>
      <div
        class="modal fade"
        id={`update-modal-${productId}`}
        //while copying id from product item will remove the # as per bootstrap modal code
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title ms-2" id="exampleModalLabel">
                Update Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* Form update start */}

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
                  />
                </div>
                {/* submit button  */}
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>

              {/* Form update end */}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateForm;
