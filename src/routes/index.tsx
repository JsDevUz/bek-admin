import dashboardRoutes from "./dashboard";
import ordersRoutes from "./orders";
import productsRoutes from "./products";
import settingsRoutes from "./settings";

const routes = [
  { ...dashboardRoutes },
  { ...ordersRoutes },
  { ...settingsRoutes },
  { ...productsRoutes },
];
export default routes;
