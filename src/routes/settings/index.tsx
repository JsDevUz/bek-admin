import { Outlet } from "react-router-dom";
import DashboarPage from "../../modules/seller/pages/dashboard";
import LayoutWithNavbar from "../../layouts/LayoutWithNavbar";
import OrdersPage from "../../modules/seller/pages/orders";
import InterfacePage from "../../modules/seller/pages/settings/profile";
import SettingsPage from "../../modules/seller/pages/settings";

const settingsRoutes = {
  path: "settings",
  element: <LayoutWithNavbar />,
  children: [
    {
      path: "",
      element: <SettingsPage />,
    },
    {
      path: "profile",
      element: <InterfacePage />,
    },
  ],
};

export default settingsRoutes;
