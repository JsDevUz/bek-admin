import { Outlet } from "react-router-dom";
import DashboarPage from "../../modules/seller/pages/dashboard";
import LayoutWithNavbar from "../../layouts/LayoutWithNavbar";

const dashboardRoutes = {
  path: "dashboard",
  element: <LayoutWithNavbar />,
  children: [
    {
      path: "",
      element: <DashboarPage />,
    },
  ],
};

export default dashboardRoutes;
