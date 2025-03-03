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
