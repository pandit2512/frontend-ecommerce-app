//=====Logic to Add a Product======
const API_LINK = "http://localhost:8080/products";

// when object of product will passed from ProductForm
// in order to use this function in Other File we need to initiase it with "export"
export const addProduct = async (product) => {
  //in response will get response Object=> response Object has Json data
  const response = await fetch(API_LINK, {
    method: "POST",
    //headers itself a Object
    headers: { "Content-Type": "application/json" },

    //JSON.stringify() is used to convert a JavaScript object or value to a JSON string.
    body: JSON.stringify(product),
  });

  console.log(response);
  // to convert String Json Data to Json
  const data = await response.json();
  console.log(data);

  return data;
};

//=========To get/see the Product =========
export const fetchProducts = async () => {
  const response = await fetch(API_LINK);
  const data = await response.json();
  return data["_embedded"]["products"];
};

//====Fetch Products (productName : Asc)

export const fetchproductsByProductNameAsc = async () => {
  fetch(API_LINK + "/search/findByOrderByProductNameAsc");
  const response = await fetch(
    API_LINK + "/search/findByOrderByProductNameAsc"
  );
  const data = await response.json();
  return data["_embedded"]["products"];
};
//====Fetch Products (productName : desc)
export const fetchproductsByProductNameDesc = async () => {
  fetch(API_LINK + "/search/findByOrderByProductNameDesc");
  const response = await fetch(
    API_LINK + "/search/findByOrderByProductNameDesc"
  );
  const data = await response.json();
  return data["_embedded"]["products"];
};

// Fetch product By Price Low to High

export const fetchproductsByPriceAsc = async () => {
  const response = await fetch(
    API_LINK + "/search/findByOrderByProductPriceAsc"
  );
  const data = await response.json();
  return data["_embedded"]["products"];
};
// Fetch product By Price High to Low

export const fetchproductsByPriceDesc = async () => {
  const response = await fetch(
    API_LINK + "/search/findByOrderByProductPriceDesc"
  );
  const data = await response.json();
  return data["_embedded"]["products"];
};

//fetch product by id

export const fetchProductById = async (productId) => {
  console.log(API_LINK + `/${productId}`);
  const response = await fetch(API_LINK + `/${productId}`);
  const data = await response.json();
  return data;
};

// To update product by Id

export const updateProduct = async (productId, product) => {
  const response = await fetch(API_LINK + `/${productId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  const data = await response.json();
  return data;
};

export const deleteProductById = async (productId) => {
  const response = await fetch(API_LINK + `/${productId}`, {
    method: "DELETE",
    //body: JSON.stringify(product), => you wouldn't need to send the product details in the body.
  });

  const data = await response.json();
  return data;
};
