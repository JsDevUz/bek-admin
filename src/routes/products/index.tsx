import { Outlet } from "react-router-dom";
import DashboarPage from "../../modules/seller/pages/dashboard";
import LayoutWithNavbar from "../../layouts/LayoutWithNavbar";
import OrdersPage from "../../modules/seller/pages/orders";
import ProductsPage from "../../modules/seller/pages/products";
import AddProductPage from "../../modules/seller/pages/products/add";
import AddAndEditProductPage from "../../modules/seller/pages/products/add";

const productsRoutes = {
  path: "products",
  element: <LayoutWithNavbar />,
  children: [
    {
      path: "all",
      element: <ProductsPage />,
    },
    {
      path: "add",
      element: <AddAndEditProductPage />,
    },
  ],
};

export default productsRoutes;
