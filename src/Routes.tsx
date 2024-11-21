import { Suspense, useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import routes from "./routes/index";
import MainLayout from "./layouts/MainLayout";
import Redirect from "./modules/seller/pages/redirect";

interface Route {
  path: string;
  element?: JSX.Element;
  children?: Route[];
}

export default function Routes() {
  const [routeString, setRouteString] = useState<string[]>([]);

  const filterRoutes = (
    routes: Route[],
    urls: string[],
    isChild: string | null = null
  ): Route[] => {
    if ("SUPER_ADMIN" === "SUPER_ADMIN") {
      return routes;
    }

    return routes.reduce<Route[]>((acc, route) => {
      let parentMatches = urls.includes(`/${route.path}`);

      if (route.path === "login" || route.path === "dashboard") {
        parentMatches = true;
      }

      if (isChild !== null && isChild.length) {
        if (route.path === "" || route.path === "all") {
          parentMatches = true;
        }
        if (urls.includes(`${isChild}/${route.path}`)) {
          parentMatches = true;
        }
      }

      let childrenMatches: Route[] = [];
      if (route.children && parentMatches) {
        childrenMatches = filterRoutes(route.children, urls, `/${route.path}`);
      }

      if (parentMatches) {
        if (childrenMatches.length) {
          acc.push({
            ...route,
            children: childrenMatches,
          });
        } else {
          acc.push({
            ...route,
          });
        }
      }

      return acc;
    }, []);
  };

  const filteredRoutes = filterRoutes(routes, routeString);

  const formattedRoutes = useRoutes([
    ...filteredRoutes,
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Navigate to={"/dashboard"} />,
        },
        // {
        //   path: "/orders",
        //   element: <Navigate to={"/orders"} />,
        // },
        // {
        //   path: "/settings",
        //   element: <Navigate to={"/settings"} />,
        // },
        {
          path: "redirect",
          element: <Redirect />,
        },
        {
          path: "*",
          element: <Navigate to="redirect" />,
        },
      ],
    },
  ]);

  return <Suspense fallback={<>Loading...</>}>{formattedRoutes}</Suspense>;
}
