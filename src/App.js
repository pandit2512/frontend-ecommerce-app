import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Comonents/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Comonents/Layout";
import Homepage from "./Comonents/Homepage";
import ProductForm from "./Comonents/Products/ProductForm";
import AllProducts from "./Comonents/Products/AllProducts";
import ProductDetail from "./Comonents/Products/ProductDetail";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "create-product",
        element: <ProductForm />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="#">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
