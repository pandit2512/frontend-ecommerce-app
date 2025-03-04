// ===To Fetch All Categories ====

const API_LINK = "http://localhost:8080/category";
// this function will return array of Category
export const fetchCategories = async () => {
  const response = await fetch(API_LINK); // you will get Response object
  const data = await response.json();
  console.log(data);
  return data["_embedded"]["categories"];
};
