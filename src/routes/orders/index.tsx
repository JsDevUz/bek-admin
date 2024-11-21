import { Outlet } from "react-router-dom";
import DashboarPage from "../../modules/seller/pages/dashboard";
import LayoutWithNavbar from "../../layouts/LayoutWithNavbar";
import OrdersPage from "../../modules/seller/pages/orders";

const ordersRoutes = {
  path: "orders",
  element: <LayoutWithNavbar />,
  children: [
    {
      path: "all",
      element: <OrdersPage />,
    },
  ],
};

export default ordersRoutes;
